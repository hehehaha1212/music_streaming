import React from 'react';
import MusicSection from '../components/MusicSection';
import { assets } from '../assets/assets';

import song1 from '../assets/perfect.png';
import song2 from '../assets/nights.png';
import song3 from '../assets/lover.png';
import song4 from '../assets/snowman.png';

const internationalSongs = [
  { 
    name: "Perfect", 
    image: song1,
    file: assets.songs.song1,
    artist: "Ed Sheeran",
    duration: "4:23"
  },
  { 
    name: "The Nights", 
    image: song2,
    file: assets.songs.song2,
    artist: "Avicii",
    duration: "3:10"
  },
  { 
    name: "Lover", 
    image: song3,
    file: assets.songs.song2,
    artist: "Taylor Swift",
    duration: "3:41"
  },
  { 
    name: "Snowman", 
    image: song4,
    file: assets.songs.song2,
    artist: "Sia",
    duration: "2:45"
  }
];

const International = () => {
  return (
    <MusicSection title="International Hits" songs={internationalSongs} />
  );
};

export default International;
