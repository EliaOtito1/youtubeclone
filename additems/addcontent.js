// implementing video, image upload content

let videoname = document.querySelector("input[placeholder='videotitle']")
let descitems = document.querySelector("input[placeholder='videodesc']")
let filetype = document.querySelector("input[placeholder='file']")
let mysubmit = document.querySelector('.submitall')


let collect_items = []  // store items


// grabing the input from the  text field and initializing the varibale container
let vnames; // storing video name
let desc;  // storing video description
let vfile ; //storing file type

videoname.addEventListener('keyup',function (item){
    vnames = item.target.value;
     console.log(vnames)
}
)

descitems.addEventListener('keyup', function(item) {
    desc = item.target.value
    console.log(desc)

})

filetype.addEventListener('input',function(file){
    vfile = file.target.files[0].name;
    console.log(vfile)
})

mysubmit.addEventListener('click',function(){
    // store the items:

// collect_items.push({"Video Name":vnames, "Video Desc":desc, "File Image":vfile})

// console.log(collect_items)
    collect_items.push({"vnames":vnames, "desc":desc, "vfile":vfile})
    displayData() // invoking the function
    console.log(collect_items)

})

// display the images and description 

function displayData(){
    let mainContent = document.querySelector('.main-content')
    console.log(mainContent)
    let displayitems = collect_items.map(item => {
        let video = `<div class="video-card">
        <div class="videoimg">
                <img src=${item.vfile} alt="" class="src">  
       </div>

       <div class="card-informa">
           <div class="channelimg">
               <img src="" alt="" class="src">
           </div>

           <div class="desc">
               <div class="videoname">${item.vnames}</div>  
               <div class="channelviewers"><span>${item.desc}</span></div>
           </div>
        </div>
        </div>`
        return video
    })
mainContent.innerHTML=displayitems.join("")
}



