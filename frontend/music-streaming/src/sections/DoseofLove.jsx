import React from 'react';
import MusicSection from '../components/MusicSection';
import song1 from '../assets/song01.png';
import song2 from '../assets/song2.png';
import song3 from '../assets/song3.png';
import song4 from '../assets/song4.png';
import song5 from '../assets/song005.png';
import { assets } from '../assets/assets';
// import song6 from '../assets/song6.png';

const songs = [
  { 
    name: "Bulleya", 
    image: song1,
    file: assets.songs.song1,
    artist: "Arijit Singh",
    duration: "4:30"
  },
  { 
    name: "Sanam Re", 
    image: song2,
    file: assets.songs.song2,
    artist: "Arijit Singh",
    duration: "3:45"
  },
  { 
    name: "Jhol", 
    image: song3,
    file: assets.songs.song2,
    artist: "Arijit Singh",
    duration: "3:20"
  },
  { 
    name: "Khairiyat", 
    image: song4,
    file: assets.songs.song2,
    artist: "Arijit Singh",
    duration: "4:15"
  },
  {
    name: "Mast Magan", 
    image: song5,
    file: assets.songs.song2,
    artist: "Arijit Singh",
    duration: "3:50"
  },
  // {title: "Isq Risk", image: song6}
];

const DoseofLove = () => {
    return (
      <MusicSection title="Dose of Love" songs={songs} />
    );
  };

export default DoseofLove;