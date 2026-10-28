import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from '@/pages/HomePage.jsx';
import ServiçosPage from '@/pages/ServiçosPage.jsx';
import PortfólioPage from '@/pages/PortfólioPage.jsx';
import SobrePage from '@/pages/SobrePage.jsx';
import ContatoPage from '@/pages/ContatoPage.jsx';
import DiferenciaisPage from '@/pages/DiferenciasPage.jsx';
import ProjetoDetalhePage from '@/pages/ProjetoDetalhePage.jsx';
import AdminPage from '@/pages/AdminPage.jsx';
import { getWhatsAppUrl } from '@/lib/whatsapp.js';
import { MessageCircle } from 'lucide-react';

function App() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredTheme =
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const root = document.documentElement;
    root.classList.toggle('dark', preferredTheme === 'dark');
    root.classList.toggle('light', preferredTheme === 'light');
    root.style.colorScheme = preferredTheme;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServiçosPage />} />
        <Route path="/portfolio" element={<PortfólioPage />} />
        <Route path="/projetos/:slug" element={<ProjetoDetalhePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/diferenciais" element={<DiferenciaisPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <Toaster />
    </Router>
  );
}

export default App;
