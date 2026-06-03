import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PortfólioPage = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1586423951975-ba24e359efc0',
      title: 'EDIFÍCIO RESIDENCIAL JARDIM EUROPA',
      category: 'Residencial Alto Padrão',
      description: 'Projeto estrutural completo para edifício residencial com 18 pavimentos, incluindo subsolo e área de lazer.',
    },
    {
      image: 'https://images.unsplash.com/photo-1645883448890-da2a70d885ae',
      title: 'CENTRO COMERCIAL VILA MARIANA',
      category: 'Comercial',
      description: 'Estrutura em concreto armado para complexo comercial com 4 pavimentos e estacionamento subterrâneo.',
    },
    {
      image: 'https://images.unsplash.com/photo-1470973173492-f010cdacd027',
      title: 'GALPÃO INDUSTRIAL GUARULHOS',
      category: 'Industrial',
      description: 'Projeto de estrutura metálica para galpão industrial com vão livre de 32 metros e pé-direito de 12 metros.',
    },
    {
      image: 'https://images.unsplash.com/photo-1611129005683-7178fe278943',
      title: 'RESIDÊNCIA UNIFAMILIAR ALPHAVILLE',
      category: 'Residencial',
      description: 'Projeto estrutural para residência de alto padrão com arquitetura contemporânea e balanços estruturais.',
    },
    {
      image: 'https://images.unsplash.com/photo-1613051855981-e75ca9eb5e36',
      title: 'REFORMA ESTRUTURAL CENTRO',
      category: 'Reforma',
      description: 'Reforço estrutural e adequação para mudança de uso de edifício comercial no centro de São Paulo.',
    },
  ];

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Helmet>
        <title>Projetos | B Engenharia</title>
        <meta name="description" content="Conheça o portfólio de projetos da B Engenharia." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="geometric-line mx-auto mb-6" />
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              NOSSOS PROJETOS
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
              Obras que demonstram nossa capacidade técnica e compromisso com a excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden border border-primary/20 bg-[#0a0e27] ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <div className="absolute inset-0 bg-[#0a0e27]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8 relative z-20 bg-[#0a0e27] border-t border-primary/20">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="heading-font text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfólioPage;