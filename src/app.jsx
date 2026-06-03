import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from '@/pages/HomePage.jsx';
import ServiçosPage from '@/pages/ServiçosPage.jsx';
import PortfólioPage from '@/pages/PortfólioPage.jsx';
import SobrePage from '@/pages/SobrePage.jsx';
import ContatoPage from '@/pages/ContatoPage.jsx';
import DiferenciaisPage from '@/pages/DiferenciasPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServiçosPage />} />
        <Route path="/portfolio" element={<PortfólioPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/diferenciais" element={<DiferenciaisPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;