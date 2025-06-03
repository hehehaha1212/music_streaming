// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Signup from "./Pages/signup_page";
import Login from "./Pages/login_page";
import Home from './pages/Home';
import About from './pages/AboutUs';
import Player from './components/Player';

import './styles/App.css';
import Header from './components/Header';
import TopArtists from './components/TopArtists';
import DoseofLove from './sections/DoseofLove';
import International from './sections/International';
import Devotional from './sections/Devotional';
import Footer from './components/Footer';

import { SongProvider } from './context/SongContext';

function MusicDashboard() {
  return (
    <>
      <Header />
      <DoseofLove />
      <TopArtists sectionTitle="Top Artists" />
      <International />
      <Devotional />
      <Footer />
    </>
  );
}

function LayoutWrapper() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <div className={isAuthPage ? "auth-container" : ""}>
      {isAuthPage && (
        <>
          <span id="PlayDZ"><h1><b>🎧PlayDz🎧</b></h1></span>
          <nav style={{ marginBottom: "20px" }}>
            <Link to="/signup" style={{ marginRight: "20px" }}>Signup</Link>
            <Link to="/login">Login</Link>
          </nav>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Player" element={<Player />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MusicDashboard />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <SongProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </SongProvider>
  );
}

export default App;
