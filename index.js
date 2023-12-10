

//initialise the variables
let songIndex =0 ;
let  audioElement = new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSong = document.getElementById('masterSong');
let songs = [
    {songName : "I was never there - The weekend", filePath : "1.mp3", coverpath: "anku.jpg" , duration : "02:58"},
    {songName : "Love your voice", filePath : "2.mp3", coverpath: "anku.jpg", duration : "02:58"},
    {songName : "Kaisi ye judai", filePath : "3.mp3", coverpath: "music1.jpg", duration : "05:39"},
    {songName : "Hari aur Main", filePath : "4.mp3", coverpath: "peakpx.jpg", duration : "05:09"},
    {songName : "Chandni ke noor se", filePath : "5.mp3", coverpath: "music2.jpg", duration : "06:00"}
]
songItem.forEach((element, i)=>{
    
   element.getElementsByTagName('img')[0].src = songs[i].coverpath;
   element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//aduioElement.play();


//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value =progress;
})


myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})
const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSong.innerText = songs[songIndex].songName;
        gif.style.opacity =1;

    }
    )
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 4){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity =1;
    masterSong.innerText = songs[songIndex].songName;
}
)
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity =1;
    masterSong.innerText = songs[songIndex].songName;
    

}
)