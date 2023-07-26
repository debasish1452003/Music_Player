console.log("Welcome to Spotify");

// Initialize the Variables
let SongIndex = 0;
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('./Songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName: "Kesariya", filePath: "Songs/1.mp3", coverPath: "./images/Cover1.jpg" },
    { songName: "lalala", filePath: "Songs/2.mp3", coverPath: "./images/Cover1.jpg" },
    { songName: "Kamariya", filePath: "Songs/3.mp3", coverPath: "./images/Cover1.jpg" },
    { songName: "Rait zara si", filePath: "Songs/4.mp3", coverPath: "./images/Cover1.jpg" },
    { songName: "Is qadar", filePath: "Songs/5.mp3", coverPath: "./images/Cover1.jpg" },
    { songName: "Barsat ki dhun", filePath: "Songs/6.mp3", coverPath: "./images/Cover1.jpg" },
]

songItems.forEach((element, i) => {

    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * (audioElement.duration / 100);
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);

        makeAllPlays();


        index = parseInt(e.target.id);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index + 1}.mp3`;
        masterSongName.innerText = songs[SongIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    })

})

document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >=5) {
        SongIndex = 0;
    }

    else {
        SongIndex += 1;
    }

    audioElement.src = `songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[SongIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity =1;
})



document.getElementById('previous').addEventListener('click', () => {
    if(SongIndex <= 0 ) {
        SongIndex = 0;
    }

    else {
        SongIndex -= 1;
    }

    audioElement.src = `songs/${index + 1}.mp3`;
    masterSongName.innerText = songs[SongIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
