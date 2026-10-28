import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const instagramUrl = 'https://www.instagram.com/b.engenhariaaa?srtk=MXBjanptZnIwNHF5Zw==';
  const linkedinUrl = 'https://www.linkedin.com/';

  return (
    <footer className="bg-background text-foreground border-t border-primary/20 pt-14 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="heading-font text-2xl sm:text-3xl font-bold text-foreground tracking-widest">
                B ENGENHARIA
              </span>
            </Link>

            <p className="text-foreground/70 max-w-md leading-relaxed mb-8">
              Engenharia que transforma ideias em realidade. Soluções inteligentes e inovadoras para construir um futuro melhor.
            </p>

            <div className="flex gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da B Engenharia"
                className="w-12 h-12 border border-primary/30 flex items-center justify-center hover:border-primary transition-all duration-300"
              >
                <img src="/img/instagram.svg" alt="" className="w-7 h-7" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da B Engenharia"
                className="w-12 h-12 border border-primary/30 flex items-center justify-center hover:border-primary transition-all duration-300"
              >
                <img src="/img/linkedin.svg" alt="" className="w-7 h-7" />
              </a>

            </div>
          </div>

          <div>
            <h4 className="heading-font text-sm font-bold text-primary mb-6">NAVEGAÇÃO</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors text-sm">Início</Link>
              <Link to="/#sobre" className="text-foreground/70 hover:text-primary transition-colors text-sm">Sobre Nós</Link>
              <Link to="/#servicos" className="text-foreground/70 hover:text-primary transition-colors text-sm">Serviços</Link>
              <Link to="/#projetos-completos" className="text-foreground/70 hover:text-primary transition-colors text-sm">Projetos</Link>
              <Link to="/#diferenciais" className="text-foreground/70 hover:text-primary transition-colors text-sm">Diferenciais</Link>
              <Link to="/#contato" className="text-foreground/70 hover:text-primary transition-colors text-sm">Contato</Link>
            </nav>
          </div>

          <div>
            <h4 className="heading-font text-sm font-bold text-primary mb-6">CONTATO</h4>
            <div className="flex flex-col gap-3 text-sm text-foreground/70">
              <p className="break-all">eng.bernardos@gmail.com</p>
              <p>+55 (11) 98853-5276</p>
              <p className="mt-4">São Paulo - SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-foreground/50 text-sm break-words">
            © 2026 B Engenharia. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-foreground/50">
            <Link to="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
