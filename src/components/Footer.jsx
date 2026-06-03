import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e27] text-white border-t border-primary/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="heading-font text-3xl font-bold text-white tracking-widest">
                B ENGENHARIA
              </span>
            </Link>
            <p className="text-white/70 max-w-md leading-relaxed mb-8">
              Engenharia que transforma ideias em realidade. Soluções inteligentes e inovadoras para construir um futuro melhor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-[#0a0e27] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-[#0a0e27] transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-[#0a0e27] transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="heading-font text-sm font-bold text-primary mb-6">NAVEGAÇÃO</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-white/70 hover:text-primary transition-colors text-sm">Início</Link>
              <Link to="/sobre" className="text-white/70 hover:text-primary transition-colors text-sm">Sobre Nós</Link>
              <Link to="/servicos" className="text-white/70 hover:text-primary transition-colors text-sm">Serviços</Link>
              <Link to="/portfolio" className="text-white/70 hover:text-primary transition-colors text-sm">Projetos</Link>
              <Link to="/diferenciais" className="text-white/70 hover:text-primary transition-colors text-sm">Diferenciais</Link>
            </nav>
          </div>

          <div>
            <h4 className="heading-font text-sm font-bold text-primary mb-6">CONTATO</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>contato@bengenharia.com.br</p>
              <p>+55 (11) 99999-9999</p>
              <p className="mt-4">Av. Engenheiro Luís Carlos Berrini, 1500<br/>São Paulo - SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 B Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link to="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;