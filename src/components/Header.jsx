import React, { useState, useEffect } from 'react';
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
    { name: 'SOBRE', path: '/sobre' },
    { name: 'SERVIÇOS', path: '/servicos' },
    { name: 'PROJETOS', path: '/portfolio' },
    { name: 'DIFERENCIAIS', path: '/diferenciais' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0a0e27]/95 backdrop-blur-md border-primary/20 py-4' 
          : 'bg-[#0a0e27] border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="heading-font text-2xl font-bold text-white tracking-widest group-hover:text-primary transition-colors">
              B ENGENHARIA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`heading-font text-xs font-semibold transition-all duration-200 relative ${
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
            <Button asChild className="bg-primary text-[#0a0e27] hover:bg-primary/90 heading-font text-xs font-bold tracking-wider rounded-none px-8">
              <Link to="/contato">FALE CONOSCO</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-primary hover:bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0e27] border-b border-primary/20">
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
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="heading-font text-sm font-semibold text-primary mt-4"
            >
              FALE CONOSCO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;