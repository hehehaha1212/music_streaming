import React, { useState, useRef, useEffect } from 'react';
import '../styles/Player.css';
import { useSong } from '../context/SongContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const { currentSong } = useSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  if (!currentSong) {
    return (
      <div className="audio-player-container">
        <div className="no-song-message">
          <h2>No song selected</h2>
          <p>Please select a song to play</p>
          <button onClick={() => navigate('/')} className="back-button">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="song-info">
        <h2>{currentSong.title || "Unknown Title"}</h2>
        <h3>{currentSong.artist || "Unknown Artist"}</h3>
      </div>

      <div className="custom-divider1"></div>

      <div className="cover-image">
        <img src={currentSong.image} alt={currentSong.title || "Song Cover"} />
      </div>

      <div className="time-display">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="seek-bar-bg" onClick={handleSeek}>
        <div 
          className="seek-bar-filled" 
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="custom-divider"></div>

      <div className="controls">
        <img src={assets.icons.volume} alt="Volume" />
        <img src={assets.icons.like} alt="Like" />
        <img src={assets.icons.prev} alt="Previous" />
        <img 
          src={isPlaying ? assets.icons.pause : assets.icons.play1} 
          alt={isPlaying ? "Pause" : "Play"} 
          onClick={handlePlayPause}
          className="play-button"
        />
        <img src={assets.icons.next} alt="Next" />
        <img src={assets.icons.rightArrow} alt="Menu" />
        <img src={assets.icons.volume} alt="Volume" />
      </div>

      <div className="footer-bar">
        <span onClick={() => navigate('/')}>&lt; Back to Home</span>
        <span>Save to Playlist &gt;</span>
      </div>
    </div>
  );
};

export default Player;
