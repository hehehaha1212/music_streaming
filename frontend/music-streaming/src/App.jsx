import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs';
import './styles/App.css';
import Player from './components/Player';
import { BrowserRouter } from 'react-router-dom';


import { SongProvider } from './context/SongContext';

function App() {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>
  );
}
export default App;
