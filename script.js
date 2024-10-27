
const songs = [
    {
      title: "Sandese Aate Hai",
      artist: "Roopkumar Rathod and Sonu Nigam",
      cover: "./assets/sandeseaatehai.jpeg",
      src: "./assets/sandeseaatehai.mp3"
    },
    {
      title: "Main Hoon Na",
      artist: "Sonu Nigam, Shreya Ghoshal",
      cover: "./assets/mainhoonna.jpeg",
      src: "./assets/mainhoonna.mp3"
    },
    {
      title: "Kun Faya Kun",
      artist: " A. R. Rahman, Javed Ali, and Mohit Chauhan",
      cover: "./assets/kunfayakun.jpeg",
      src: "./assets/kunfayakun.mp3"
    },
    {
      title: "Tajdar-E-Haram",
      artist: "Atif Aslam",
      cover: "./assets/tajdareharam.jpg",
      src: "./assets/tajdareharam.mp3"
    },
    {
      title: "Kaathu Mela",
      artist: "Deva, OfRo, and Paal Dabba",
      cover: "./assets/kaathumela.jpg",
      src: "./assets/kaathumela.mp3"
    },
    {
      title: "Illuminati",
      artist: "Dabzee, Sushin Shyam, and Vinayak Sasikumar",
      cover: "./assets/illuminati.jpg",
      src: "./assets/illuminati.mp3"
    },
    {
      title: "Ishq",
      artist: "Amir Ameer, Faheem Abdullah",
      cover: "./assets/ishq.jpg",
      src: "./assets/ishq.mp3"
    },
    {
      title: "Jugnu [Joker]",
      artist: "GV Prakash Kumar, Udit Narayan",
      cover: "./assets/jugnu.jpg",
      src: "./assets/jugnu.mp3"
    },
    {
      title: "Hai Junoon [New York]",
      artist: "KK",
      cover: "./assets/haijunoon.jpeg",
      src: "./assets/haijunoon.mp3"
    },
    {
      title: "O Mahi O Mahi",
      artist: "Arijit Singh",
      cover: "./assets/o Mahi.jpg",
      src: "./assets/o Mahi.mp3"
    }
  ];
  
  let currentSongIndex = 0;
  let isPlaying = false;
  
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("play-pause");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  

  function playPauseSong() {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.innerText = "Play";
    } else {
      audio.play();
      playPauseBtn.innerText = "Pause";
    }
    isPlaying = !isPlaying;
  }
  
  
  function loadSong(songIndex) {
    const song = songs[songIndex];
    title.innerText = song.title;
    artist.innerText = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
    playPauseBtn.innerText = "Play"; 
    isPlaying = false;  
  }
  
  
  function prevSong() {
    currentSongIndex = currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
  }
  
  
  function nextSong() {
    currentSongIndex = currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
  }
  

  function selectSong(index) {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    playPauseSong(); 
  }
  
  
  loadSong(currentSongIndex);
  