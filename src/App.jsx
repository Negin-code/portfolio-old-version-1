import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import CrimsonPlate from './Pages/CrimsonPlate';
import AlzCare from './Pages/AlzCare';
import ListeningLab from './Pages/ListeningLab';
import CultureCafe from './Pages/CultureCafe';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/crimson-plate" element={<CrimsonPlate />} />
        <Route path="/projects/alzcare" element={<AlzCare />} />
        <Route path="/projects/listening-lab" element={<ListeningLab />} />
        <Route path="/projects/culture-cafe" element={<CultureCafe />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
