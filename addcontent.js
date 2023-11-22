// implementing video, image upload content

let videoname = document.querySelector("input[placeholder='videotitle']")
let descitems = document.querySelector("input[placeholder='videodesc']")
let filetype = document.querySelector("input[placeholder='file']")
let mysubmit = document.querySelector('.submitall')

// grabing the input from the  text field and initializing the varibale container
let vnames; // storing video name
let desc;  // storing video description
let vfile ; //storing file type

onload = function (){
    displayData()
    

//     let displayLocalStorage = JSON.parse(localStorage.getItem('data')) || []
//     displayLocalStorage.push({"vnames":vnames, "desc":desc, "vfile":vfile})
//     console.log(displayLocalStorage)
//     localStorage.setItem('data',JSON.stringify(displayLocalStorage))
//     displayData(displayLocalStorage) // invoking the function, to populate the data
//
 }

let collect_items = []  // store items





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
    let displayLocalStorage = JSON.parse(localStorage.getItem('data')) || []
    // let displayLocalStorage = JSON.parse(localStorage.getItem('data')) || []
    // store the items:

// collect_items.push({"Video Name":vnames, "Video Desc":desc, "File Image":vfile})

// Before adding the data, check if the data is available on the local Storage to avoid overwritten

//  localStorage.setItem('data',JSON.stringify(collect_items)) || []

// console.log(collect_items)
    displayLocalStorage.push({"vnames":vnames, "desc":desc, "vfile":vfile})
    localStorage.setItem('data',JSON.stringify(displayLocalStorage))
    displayData() // invoking the function

})

// display the images and description 

function displayData(){
    let mainContent = document.querySelector('.main-content')
    let displayLocalStorage = JSON.parse(localStorage.getItem('data')) || []
    console.log(mainContent)
     // if it has no data please create an empty array:
    console.log(displayLocalStorage, "<=","Data is Displayed")
    let displayitems = displayLocalStorage.map((item,i) => {
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
        <div>
        <button style="height:30px;width:100px; text-align: center;
        font-size:larger; background-color: lightgreen;" onclick="del(${i})">Delete</button>
        </div>
        <div>
        <button style="height:30px;width:100px; text-align: center;
        font-size:larger; background-color: darkorange;" onclick="edit(${i})">Edit</button>
        </div>
        </div>`
        return video
    })
mainContent.innerHTML=displayitems.join("")
}

function del(i) {
    
    console.log(i)
    let displayLocalStorage = JSON.parse(localStorage.getItem('data')) || []
    console.log(displayLocalStorage)
    displayLocalStorage.splice(i,1)
    localStorage.setItem('data', JSON.stringify(displayLocalStorage))
    displayData()    
    
}

function edit (i) {
    console.log("Edit is clicked")
    let displayLocalStorage=JSON.parse(localStorage.getItem('data'))
    videoname.value = displayLocalStorage[i].vnames
    console.log("we are capturing videoname/title",videoname.value)
    descitems.value= displayLocalStorage[i].desc
    console.log("we are capturing video desc",descitems.value)

    mysubmit.setAttribute('id','additems')

    let edittext = document.querySelector('#edittext')
    edittext.style.display='inline';

    videoname.addEventListener('keyup', function(element) {
        vnames = element.target.value;

       
    })
    descitems.addEventListener('keyup',function(element){
        desc= element.target.value
       
    })

    edittext.addEventListener('click', function (element) {
        let displayLocalStorage=JSON.parse(localStorage.getItem('data'))
        displayLocalStorage[i].vnames=vnames;
        localStorage.setItem('data',JSON.stringify(displayLocalStorage))
        displayLocalStorage[i].desc=desc;
        localStorage.setItem('data',JSON.stringify(displayLocalStorage))
        displayData()
        videoname.value = ""
        descitems.value = ""
        edittext.style.display='none';
        mysubmit.setAttribute('id','')


    })

}




