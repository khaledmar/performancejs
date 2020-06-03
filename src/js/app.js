function loadVideos(){
    const API_KEY = "AIzaSyBAWXJdEbUeX3p48Phh6nhdUcBzdAz2f7Q";
    const CHANNEL_ID = "UCE8deXi-Eea3SuEV1Q1L4ug";
    const $nextPageContent = document.getElementById("nextPage");
    const nextPage = $nextPageContent.value;
    const renderVideos = data => {
        const $container = document.getElementById("videos");
        const content = data.items.map(item => {
            console.log('item', item)
            return `            
            <figure>
                <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.description}" />
                <figcaption>${item.snippet.description}</figcaption>
            </figure>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        }).join(' ')

        $container.innerHTML = content;
        $nextPageContent.value = data.nextPageToken;
        
    };
    fetch(
       `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxresult=20&pageToken=${nextPage}`
    )
    .then(res => res.json())
    .then(res => renderVideos(res));   
    
}

function animateTitle(){
    console.log('teste');
    
    setTimeout(() => {
        document.querySelector('.title').classList.add('animate'); 
        setTimeout(() => {
            document.querySelector('.title').classList.remove('animate');
        }, 2000);   
    }, 1000);
    
    
}

(function() {
    //loadVideos();
    let jogo = setInterval(animateTitle,4000);
    //requestAnimationFrame(loadVideos,1000);
/*
    if ('requestIdleCallback' in window) {
        alert('idle')
        requestIdleCallback(loadVideos, { timeout: 2000 });
      } else {
        // Do what you’d do today.
        alert('animation')
        requestAnimationFrame(loadVideos,2000);
      }
*/

    
     
})();