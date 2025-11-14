import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import Guidelines from './pages/Guidelines';
import Kontakt from './pages/Kontakt';
import Opstart from './pages/Opstart';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wiki" element={<Wiki />} />
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="opstart" element={<Opstart />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;