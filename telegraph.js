async function theTelegraph(){
    let getData = fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLJnf_DDTfIVA486HRVbUEsXSDW3KDCdTi&key=AIzaSyA6aG6XTAj5ktnvySRT_2nwTna45arwZ2s")
    let response = (await getData).json();
    let objData = await response
    let result = await objData.items;
    // console.log(result)
    return result;
   
}

// ryanFetch()

async function displaytele() {
    let getRyan = await theTelegraph()
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

displaytele()

// implementing suggestion on search:
let sugg = document.querySelector(".sugg")
let Ressugg = document.querySelector(".showsugg")


let search = document.querySelector('#search')
//  console.log(search)

search.addEventListener('keyup',  async function (e) {
    let searchValue = e.target.value.toUpperCase()

    let getVideoName = await theTelegraph()

    //  console.log(getTitle)
    let filteredItems = getVideoName.filter((item) => {
        let titleName =item.snippet.title.toUpperCase()
         return titleName.includes(searchValue)
        // return filteredItems
    })
    //  console.log(filteredItems)

    sugg.setAttribute('id', 'sugg')
    let suggDisplay = filteredItems.map(element =>  {
    let resdisplay = `
    <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}"><li>${element.snippet.title}</li></a>`
    return resdisplay

})
Ressugg.innerHTML=suggDisplay.join("")

   
    let videoCard = document.querySelector(".main-content")
    let renderItems = filteredItems.map((data) => {
        let video =`<div class="video-card">
    <div class="videoimg">
         <a target="_blank" href="https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}">
            <img  src=${data.snippet.thumbnails.medium.url} alt="" class="src">
        </a>
 </div>
<div class="card-informa">
<div class="channelimg">
    <img src="" alt="" class="src">
</div>
</div>

<div class="desc">
<a target="_blank" href="https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}">
<div class="videoname"><span>${data.snippet.title}</span></div>
<div class="channelname"><span>${data.snippet.channelTitle}</span></div>
</a>    
<div class="channelviewers"><span>13.1M subscribers</span></div>
</div>
</div>`
return video

    })
videoCard.innerHTML=renderItems.join("")     
})

//clearing dynamic suggest once we click on the body

let clearsugg = document.body.addEventListener('click', () => {
    Ressugg.innerHTML="";
   
})

