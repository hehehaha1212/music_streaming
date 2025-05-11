import React from 'react';
import MusicSection from '../components/MusicSection';
import { assets } from '../assets/assets';

import song1 from '../assets/devotional/deva.png';
import song2 from '../assets/devotional/durga.png';
import song3 from '../assets/devotional/krishna.png';
import song4 from '../assets/devotional/ram.png';
import song5 from '../assets/devotional/siya.png';

const devotionalSongs = [
  { 
    name: "Deva Deva", 
    image: song1,
    file: assets.songs.aayeGayeRaghunandan,
    artist: "Arijit Singh",
    duration: "4:15"
  },
  { 
    name: "Aigiri Nandini", 
    image: song2,
    file: assets.songs.aeMereWatanKeLogon,
    artist: "Traditional",
    duration: "5:30"
  },
  { 
    name: "Tum Prem Ho", 
    image: song3,
    file: assets.songs.dieWithASmile,
    artist: "Krishna Das",
    duration: "6:20"
  },
  { 
    name: "Ram Aayenge", 
    image: song4,
    file: assets.songs.ekJaisaHaalTeraMera,
    artist: "Traditional",
    duration: "4:45"
  },
  {
    name: "Ram Siya Ram", 
    image: song5,
    file: assets.songs.fellForYou,
    artist: "Traditional",
    duration: "3:55"
  }
];

const Devotional = () => {
  return (
    <MusicSection title="Devotional Songs" songs={devotionalSongs} />
  );
};

export default Devotional;