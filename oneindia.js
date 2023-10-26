async function oneindiaFetch(){
    let getData = fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLkLQB0QZKvQ_EgfGUvhHlj2AB7b2ALD8S&key=AIzaSyAujwmrQmarmwAwA83fowSoZOT7WFlietg")
    let response = (await getData).json();
    let objData = await response
    let result = await objData.items;
    // console.log(result)
    return result;
   
}

// ryanFetch()

async function displayRyan() {
    let getRyan = await oneindiaFetch()
    // console.log(getRyan)
    let videoCard = document.querySelector(".main-content")
    let showItems = getRyan.map(element => {
        let video = `<div class="video-card">
        <div class="videoimg">
            <a target= "_blank" href="https://www.youtube.com/watch?v= ${element.snippet.resourceId.videoId}">
                <img src="${element.snippet.thumbnails.medium.url}" alt="" class="src">
            </a>   
       </div>

       <div class="card-informa">
           <div class="channelimg">
               <img src="" alt="" class="src">
           </div>

           <div class="desc">
           <a target="_blank" href="https://www.youtube.com/watch?v= ${element.snippet.resourceId.videoId}">
               <div class="videoname">${element.snippet.title}</div>
               <div class="channelname">${element.snippet.channelTitle}</div>
            </a>   
               <div class="channelviewers"><span>13.1M subscribers</span></div>
           </div>
        </div>
        </div>`
        return video
    })
videoCard.innerHTML=showItems.join("")
   // console.log(getRyan)
}

displayRyan()
