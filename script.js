async function fetchData(){
    let getData =  fetch('https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyA6aG6XTAj5ktnvySRT_2nwTna45arwZ2s&channelid=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&part=snippet,id&order=date&maxResults=50')
    let obj_data = (await getData).json()
    let result = await obj_data
    let displayData = await result.items
    // console.log(displayData)
    return displayData
    
}
// fetchData()

async function getFirstPost(){
    let getdata = fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLEVkQGIATCXJzEBw0AinG_WsGNmwspPPr&key=AIzaSyA6aG6XTAj5ktnvySRT_2nwTna45arwZ2s")
    let getresp = (await getdata).json()
    let showdata = await getresp
    let showresult = showdata.items
    return showresult
}



// async function displayFirstPost(){
//     let fetchdata= await getFirstPost()
//     // console.log(fetchData)
//     // let mainnvav = document.querySelector('.')

// }

// displayFirstPost()

async function displayCart (){
    let fetchitems= await getFirstPost() // async

    console.log(fetchitems)
    // console.log(fetchitems[0].snippet.resourceId)
    let videoCard = document.querySelector(".main-content")
    let result_items =fetchitems.map(element => {
        let video = `<div class="video-card">
                        <div class="videoimg">
                             <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
                                <img  src=${element.snippet.thumbnails.medium.url} alt="" class="src">
                            </a>
                     </div>
                <div class="card-informa">
                    <div class="channelimg">
                        <img src="" alt="" class="src">
                </div>
                </div>

                <div class="desc">
                    <div class="videoname"><span>${element.snippet.title}</span></div>
                    <div class="channelname"><span>${element.snippet.channelTitle}</span></div>
                <div class="channelviewers"><span>13.1M subscribers</span></div>
            </div>
            </div>` 
        
        return video
    })
   
videoCard.innerHTML=result_items.join("")
     
}

displayCart()