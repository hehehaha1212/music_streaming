import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSong } from '../context/SongContext';
import '../styles/MusicCard.css';

const MusicCard = ({ title, image, file, artist, duration }) => {
  const { setCurrentSong } = useSong();
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentSong({ 
      title:title || "Unknown Title",
      image:image || null,
      file:file || null,
      artist: artist || "Unknown Artist",
      duration: duration || "Unknown Duration"
    });
    navigate('/player');
    
    console.log({
      title,
      image,
      file,
      artist,
      duration,
    });
  };

  return (
    <div className="music-card" onClick={handleClick}>
      <img src={image} alt={title} className="music-card-image" />
      <p className="music-card-title">{title}</p>
    </div>
  );
};

export default MusicCard;
