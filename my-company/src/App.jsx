import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ "react-router-dom", "Routes", "Route"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // optional

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes> {/* ✅ Routes */}
          <Route path="/" element={<Home />} /> {/* ✅ path, element */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
