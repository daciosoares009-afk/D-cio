import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const whatsappUrl = 'https://wa.me/5511988535276?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', path: '/' },
    { name: 'SOBRE', path: '/#sobre' },
    { name: 'SERVIÇOS', path: '/#servicos' },
    { name: 'PROJETOS', path: '/#portfolio' },
    { name: 'DIFERENCIAIS', path: '/#diferenciais' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }

    return `${location.pathname}${location.hash}` === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0a0e27]/95 backdrop-blur-md border-primary/20 py-2'
            : 'bg-[#0a0e27] border-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <Link to="/" className="flex shrink-0 items-center gap-3 group">
              <img
                src="/img/logo.svg"
                alt="B Engenharia"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <div className="hidden sm:flex md:hidden xl:flex flex-col leading-none">
                <span className="heading-font text-xl xl:text-2xl font-bold text-white tracking-widest group-hover:text-primary transition-colors">
                  B ENGENHARIA
                </span>
                <span className="mt-2 text-[10px] xl:text-[11px] font-semibold tracking-[0.28em] text-white/60">
                  ESTRUTURANDO SONHOS
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex flex-1 items-center justify-end gap-3 lg:gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`heading-font text-[11px] lg:text-xs font-semibold transition-all duration-200 relative whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-white/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary" />
                  )}
                </Link>
              ))}

              <Button
                asChild
                className="bg-primary text-[#0a0e27] hover:bg-primary/90 heading-font text-[11px] lg:text-xs font-bold tracking-wider rounded-none px-4 lg:px-6 xl:px-7"
              >
                <Link to="/#contato">CONTATO</Link>
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img src="/img/whatsapp.svg" alt="" className="h-10 w-10" />
              </a>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-primary hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0e27] border-b border-primary/20">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`heading-font text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="heading-font text-sm font-semibold text-primary mt-4"
              >
                CONTATO
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="heading-font flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <img src="/img/whatsapp.svg" alt="" className="h-5 w-5" />
                WHATSAPP
              </a>
            </nav>
          </div>
        )}
      </header>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105"
      >
        <img src="/img/whatsapp.svg" alt="" className="h-16 w-16" />
      </a>
    </>
  );
};

export default Header;
