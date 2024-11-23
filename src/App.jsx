import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/Contect';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';

function App() {
  console.log(import.meta.env.BASE_URL);
  return (
    <div>
      <Routes>
        <Route path="/DevilSamael/" element={<Home />} />
        <Route path="/DevilSamael/about" element={<About />} />
        <Route path="/DevilSamael/contact" element={<ContactUs />} />
        <Route path="/DevilSamael/services" element={<Services/>} />
        <Route path="/DevilSamael/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
