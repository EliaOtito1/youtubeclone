async function bloomer(){
    let getData = fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=PLGaYlBJIOoa95Dvos1OgQAQnGWHWrvUew&key=AIzaSyA6aG6XTAj5ktnvySRT_2nwTna45arwZ2s")
    let response = (await getData).json();
    let objData = await response
    let result = await objData.items;
    // console.log(result)
    return result;
   
}

// ryanFetch()

async function bloomLive() {
    let getRyan = await bloomer()
    // console.log(getRyan)
    let videoCard = document.querySelector(".main-content")
    let showItems = getRyan.map(element => {
        let video = `<div class="video-card">
        <div class="videoimg">
            <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
                <img src=${element.snippet.thumbnails.medium.url} alt="" class="src">
            </a>   
       </div>

       <div class="card-informa">
           <div class="channelimg">
               <img src="" alt="" class="src">
           </div>

           <div class="desc">
           <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
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

bloomLive()


    // implementing suggestion on search:
    let sugg = document.querySelector(".sugg")
    let Ressugg = document.querySelector(".showsugg")

    //Implementing Video search
    let search = document.querySelector('#search')

    search.addEventListener('keyup', async function(e) {

    let searchValue = e.target.value.toUpperCase()
    let getData = await bloomer()
    let filterItems = getData.filter((item) => {
    let title = item.snippet.title.toUpperCase()
     return title.includes(searchValue)  
    })
    // console.log(filterItems)

    // implementing dynamic suggestion based on our API Fetch dataset
    sugg.setAttribute('id', 'sugg')
    let suggDisplay = filterItems.map(element =>  {
    let resdisplay = `
    <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}"><li>${element.snippet.title}</li></a>`
    return resdisplay

})
Ressugg.innerHTML=suggDisplay.join("")

    let videoCard = document.querySelector(".main-content")
    let renderItems = filterItems.map((element) => {
        let video = `<div class="video-card">
        <div class="videoimg">
            <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
                <img src=${element.snippet.thumbnails.medium.url} alt="" class="src">
            </a>   
       </div>

       <div class="card-informa">
           <div class="channelimg">
               <img src="" alt="" class="src">
           </div>

           <div class="desc">
           <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
               <div class="videoname">${element.snippet.title}</div>
               <div class="channelname">${element.snippet.channelTitle}</div>
            </a>   
               <div class="channelviewers"><span>13.1M subscribers</span></div>
           </div>
        </div>
        </div>`
    return video    
    }) 
     
videoCard.innerHTML=renderItems.join("")
})

//Clearing the suggestion box / div once we click the body

let clearsugg = document.body.addEventListener('click', () => {
    Ressugg.innerHTML="";
   
})
