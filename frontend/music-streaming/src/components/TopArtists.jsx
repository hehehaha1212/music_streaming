import React from 'react';
import '../styles/TopArtists.css';
import arijit from '../assets/artists/arijit.png';
import taylor from '../assets/artists/taylor.png';
import karan from '../assets/artists/karan.png';
import atif from '../assets/artists/atif.png';
import justin from '../assets/artists/justin.png';

const artists = [
  { name: "Arijit Singh", image: arijit },
  { name: "Taylor Swift", image: taylor },
  { name: "Karan Aujla", image: karan },
  { name: "Atif Aslam", image: atif },
  {name: "Justin Bieber", image: justin},
];

const TopArtists = ({sectionTitle}) => {
  return (
    <div className="top-artists-section">
      <h2>Top Artists</h2>
      <div className="artist-cards-container">
        {artists.map((artist, idx) => (
          <div className="artist-card" key={idx}>
            <img src={artist.image} alt={artist.name} className="artist-image" loading="lazy" />
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
