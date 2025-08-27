import './icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProjectPage from './pages/Project/ProjectPage.jsx';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home';
import AllProjects from './pages/AllProjects/AllProjects.jsx';
import './index.scss';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
