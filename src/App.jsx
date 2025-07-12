import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import About from './page/About';
import Home from './page/Home';
import Portofolio from './page/Portofolio';
import Contact from './page/Contact';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portofolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
