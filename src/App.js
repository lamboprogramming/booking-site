import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Music from './pages/Music'
import Media from './pages/Media'
import Contact from './pages/Contact'


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
