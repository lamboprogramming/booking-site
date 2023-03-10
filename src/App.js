import { Routes, Route } from "react-router-dom";
import Home from './pages/home-page/Home'
import Music from './pages/music-page/Music'
import Media from './pages/media-page/Media'
import Contact from './pages/contact-page/Contact'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="media" element={<Media />} />
      <Route path="music" element={<Music />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
