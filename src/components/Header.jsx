import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
            ?
            'bg-[#0A0E27]/95 backdrop-blur-md border-primary/20 py-2'
            : 'bg-[#0A0E27] border-transparent py-2 sm:py-3'
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
                <span className="heading-font text-lg lg:text-xl xl:text-2xl font-bold text-white tracking-widest group-hover:text-primary transition-colors">
                  B ENGENHARIA
                </span>
                <span className="mt-2 text-[9px] lg:text-[10px] xl:text-[11px] font-semibold tracking-[0.22em] xl:tracking-[0.28em] text-white/60">
                  ESTRUTURANDO SONHOS
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex flex-1 items-center justify-end gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`heading-font text-xs font-semibold transition-all duration-200 relative whitespace-nowrap ${
                        isActive(link.path)
                          ?
                      'text-primary'
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
                className="bg-primary text-black hover:bg-primary/90 heading-font text-xs font-bold tracking-wider rounded-none px-7"
              >
                <Link to="/#contato">CONTATO</Link>
              </Button>

            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden text-white hover:text-primary hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#0A0E27] border-b border-primary/20">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`heading-font text-sm font-semibold transition-all duration-200 ${
                      isActive(link.path)
                        ?
                      'text-primary'
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

            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
