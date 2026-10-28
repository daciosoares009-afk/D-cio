import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/whatsapp.js';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') {
      return 'dark';
    }

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const activeTheme = theme === 'dark' ? 'dark' : 'light';

    root.classList.toggle('dark', activeTheme === 'dark');
    root.classList.toggle('light', activeTheme === 'light');
    root.style.colorScheme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'INÍCIO', path: '/' },
    { name: 'SOBRE', path: '/#sobre' },
    { name: 'SERVIÇOS', path: '/#servicos' },
    { name: 'PROJETOS', path: '/#projetos-completos' },
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
            ? 'bg-background/95 backdrop-blur-md border-primary/20 py-2'
            : 'bg-background border-transparent py-2 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[72px] items-center justify-between gap-3 sm:gap-6">
            <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 group">
              <img
                src="/img/logo.svg"
                alt="B Engenharia"
                className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
              />
              <div className="hidden sm:flex xl:flex flex-col leading-none min-w-0">
                <span className="heading-font text-lg lg:text-xl xl:text-2xl font-bold text-foreground tracking-widest group-hover:text-primary transition-colors">
                  B ENGENHARIA
                </span>
                <span className="mt-2 text-[9px] lg:text-[10px] xl:text-[11px] font-semibold tracking-[0.22em] xl:tracking-[0.28em] text-foreground/60">
                  ESTRUTURANDO SONHOS
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex flex-1 items-center justify-end gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`heading-font text-xs font-semibold transition-all duration-200 relative whitespace-nowrap ${
                    isActive(link.path)                     ? 'text-primary' : 'text-foreground/80 hover:text-primary'                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary" />
                  )}
                </Link>
              ))}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#1fb45d]"
              >
                <img src="/img/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
                WhatsApp
              </a>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                onClick={toggleTheme}
                className="text-white hover:text-primary hover:bg-transparent"
              >
                {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
              </Button>

              <Button
                asChild
                className="bg-primary text-black hover:bg-primary/90 heading-font text-xs font-bold tracking-wider rounded-none px-7"
              >
                <Link to="/#contato">CONTATO</Link>
              </Button>
            </nav>

            <div className="flex items-center gap-2 xl:hidden">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                onClick={toggleTheme}
                className="text-white hover:text-primary hover:bg-transparent"
              >
                {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-transparent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-background border-b border-primary/20">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`heading-font text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 heading-font text-sm font-semibold text-[#25D366] mt-2"
              >
                <img src="/img/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
                WHATSAPP
              </a>

              <Link
                to="/#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="heading-font text-sm font-semibold text-primary mt-2"
              >
                CONTATO
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
