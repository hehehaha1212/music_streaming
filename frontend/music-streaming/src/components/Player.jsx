import React from 'react';
import '../styles/Player.css';
import { useSong } from '../context/SongContext';
import { assets } from '../assets/assets';

const Player = () => {
  const { currentSong } = useSong();
  console.log(currentSong);
  console.log

  if (!currentSong) {
    return <div className="audio-player-container">No song selected. Please select a song to play.</div>;
  }

  return (
    <div className="audio-player-container">
      <div className="song-info">
        <h2>{currentSong.title || "Unknown Title"}</h2>
        <h3>{currentSong.artist || "Unknown Artist"}</h3>
      </div>

      <div className="custom-divider1"></div>

      <div className="cover-image">
        <img src={currentSong.image} alt={currentSong.title || "Song Cover"} />
      </div>

      <div className="time-display">
        <span>0:00</span>
        <span>{currentSong.duration || "Unknown Duration"}</span>
      </div>

      <div className="seek-bar-bg">
        <div className="seek-bar-filled"></div>
      </div>

      <div className="custom-divider"></div>

      <div className="controls">
        <img src={assets.icons.volume} alt="Volume" />
        <img src={assets.icons.like} alt="Volume" />
        <img src={assets.icons.prev} alt="Volume" />
        <img src={assets.icons.play1} alt="Volume" />
        <img src={assets.icons.next} alt="Volume" />
        <img src={assets.icons.rightArrow} alt="Volume" />
        <img src={assets.icons.volume} alt="Volume" />
      </div>

      <div className="footer-bar">
        <span>&lt; Back to Home</span>
        <span>Save to Playlist &gt;</span>
      </div>
    </div>
  );
};

export default Player;
