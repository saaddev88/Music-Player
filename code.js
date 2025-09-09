

const allSong = [
    {
        name :"Saiyaara ",
        artist : "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, Irshad Kamil",
        songImg :"https://i.ytimg.com/vi/FudfVyYWNxQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnQSCcNBfFnJMr6KuC7ULFhMSUkw",
        songLink : "allSongs/Saiyaara Title Song  Ahaan Panday, Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil.mp3"
    },
     {
        name :"Agar Tum Saath Ho ",
        artist : "Alka Yagnik, Arijit Singh",
        songImg :"https://i.pinimg.com/564x/c3/b2/ef/c3b2efa61225810f2e5e7fa0a938f42f.jpg",
        songLink : "allSongs/'AGAR TUM SAATH HO' Full VIDEO song  Tamasha  Ranbir Kapoor, Deepika Padukone  T-Series.mp3"
    },
     {
        name :"Introduction ",
        artist : "Faris Shafi",
        songImg :"https://i.ytimg.com/vi/TatSV119fdI/mqdefault.jpg",
        songLink : "allSongs/INTRODUCTION - FARIS SHAFI.mp3"
    },
     {
        name :"Aadat ",
        artist : "Atif Aslam, Jal, Mithoon",
        songImg :"https://i.ytimg.com/vi/e5LShHAE03A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-6f-FlpvStpIpLqqcWOBBwq-CDQ",
        songLink : "allSongs/Aadat (Juda Hoke Bhi)  Atif Aslam  Kunal Khemu  Kalyug  Sayeed Q  Emraan Hashmi.mp3"
    },
     {
        name :"Humsafar ",
        artist : "Parampara Tandon, Sachet Tandon, Sachet-Parampara, Irshad Kamil, Prashant Pandey",
        songImg :"https://a10.gaanacdn.com/gn_img/albums/z8k3y13rxo/k3y7MNjdbr/size_m_1750854932.jpg",
        songLink : "allSongs/Humsafar Song  Saiyaara  Ahaan Panday  Aneet Padda Sachet Tandon, Parampara Tandon, Irshad Kamil.mp3"
    },
     {
        name :"Jhol ",
        artist : "Maanu, Annural Khalid, Abdullah Siddiqui",
        songImg :"https://i.scdn.co/image/ab67616d0000b2731344800458a38197bfc721f3",
        songLink : "allSongs/Jhol  Coke Studio Pakistan  Season 15  Maanu x Annural Khalid.mp3"
    },
     {
        name :"Tum Hi Ho ",
        artist : "Mithoon,Arijit Singh",
        songImg :"data:image/jpeg;base64,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",
        songLink : "allSongs/Tum Hi Ho Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor.mp3"
    },
     {
        name :"Bekhayali ",
        artist : "Sachet Tandon, Sachet-Parampara, Irshad Kamil",
        songImg :"https://upload.wikimedia.org/wikipedia/en/b/be/Bekhayali_song.jpg",
        songLink : "allSongs/Bekhayali Full Song  Kabir Singh  Shahid K,Kiara ASandeep Reddy Vanga  Sachet-Parampara  Irshad.mp3"
    },
     {
        name :"Bachke Bachke ",
        artist : "Karun Aujla, Ikky, Yarah",
        songImg :"https://i.ytimg.com/vi/fRJ03btNsao/maxresdefault.jpg",
        songLink : "allSongs/Bachke Bachke (Full Video) Karan Aujla I Ikky  Latest Punjabi Songs 2023.mp3"
    },
     {
        name :"Old Money ",
        artist : "Ap Dhillon",
        songImg :"https://i.ytimg.com/vi/-K-WY0WRT48/maxresdefault.jpg",
        songLink : "allSongs/AP Dhillon - Old Money (Official Audio).mp3"
    }
]

const list= document.querySelector("ul")
const trackImg = document.querySelector(".trackImg")
const player = new Audio()
let currentSong
allSong.forEach((song,i)=>{
    
    const listItem = document.createElement("li")
    listItem.addEventListener("click",(e)=>{
        player.src = song.songLink
        player.play()
        trackImg.src = song.songImg
        currentSong = i
        pauseResumeBtn.innerHTML =             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
        <path d="M96 64h96v384H96zm224 0h96v384h-96z"/>
      </svg>`
    
        durationUpdater()
        

    })
    const backwardBtn = document.getElementById("backwardBtn")
    backwardBtn.addEventListener('click',()=>{
    currentSong = i
    if(currentSong >0 && currentSong <=9){
        currentSong--
        player.src = song.songLink
        player.play()
        pauseResumeBtn.innerHTML =             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
        <path d="M96 64h96v384H96zm224 0h96v384h-96z"/>
      </svg>`
        trackImg.src = song.songImg
        durationUpdater()
    }
})
    const forwardBtn = document.getElementById("forwardBtn")
    forwardBtn.addEventListener("click",()=>{
    currentSong = i
    if(currentSong >=0 && currentSong <9){
        currentSong++
        player.src = song.songLink
        player.play()
        pauseResumeBtn.innerHTML =             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
        <path d="M96 64h96v384H96zm224 0h96v384h-96z"/>
      </svg>`
        trackImg.src = song.songImg
        durationUpdater()

    }

})
    listItem.id = "listItem"
    
   const img = document.createElement("img")
   img.className = "img"
   img.src = song.songImg
   listItem.appendChild(img)
   const container = document.createElement("div")
   listItem.appendChild(container)
   const heading = document.createElement("h1")
   heading.className = "titleHeading"
   heading.textContent = song.name
   container.appendChild(heading)
   const subheading = document.createElement("h2")
   subheading.className = "subHeading"
   subheading.textContent= song.artist
   container.appendChild(subheading)
   console.log(song.artist)
   console.log(song.songImg)
   console.log(song.songLink) 

   list.appendChild(listItem)
})

const pauseResumeBtn = document.getElementById("pauseResumeBtn")
let isnotPlaying = false
pauseResumeBtn.addEventListener('click',()=>{
if(isnotPlaying){
    pauseResumeBtn.innerHTML =   ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
        <path d="M96 52v408l320-204L96 52z"/>
      </svg> `
    player.pause()
                

} 
else{
    pauseResumeBtn.innerHTML = 
       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
        <path d="M96 64h96v384H96zm224 0h96v384h-96z"/>
      </svg>` 


    player.play()
} 
isnotPlaying = !isnotPlaying  
})


let progressBar = document.querySelector(".progressBar") 
// let progressBarUpdater =function() {player.addEventListener("timeupdate",()=>{
//     let percentage = (player.currentTime / player.duration)*100
//     progressBar.style.width = percentage + '%' 

// })

const durationUpdater = function(){ player.addEventListener('timeupdate',()=>{
    let percentage = (player.currentTime / player.duration)*100
    progressBar.style.width = percentage + '%' 

})
}
// const progressBarUpdater = ()=>{
//     let percentage = (player.currentTime / player.duration)*100
//     progressBar.style.width = percentage + '%' 
// }