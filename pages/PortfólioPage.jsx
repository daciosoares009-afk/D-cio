import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PortfolioPage = () => {
  const projects = [
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.33%20%284%29.jpeg',
      title: 'ÁREA GOURMET COM LAVANDERIA',
      category: 'Interiores Residenciais',
      description: 'Ambiente integrado com revestimentos geométricos, bancada funcional e iluminação indireta.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.33%20%283%29.jpeg',
      title: 'LAVABO CONTEMPORÂNEO',
      category: 'Banheiro',
      description: 'Projeto com bancada em pedra natural, espelho iluminado e composição com madeira ripada.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.33%20%282%29.jpeg',
      title: 'BANHEIRO COM MARCENARIA VERDE',
      category: 'Banheiro',
      description: 'Ambiente moderno com cuba esculpida, metais pretos, nichos e box em vidro.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.33%20%281%29.jpeg',
      title: 'BANHEIRO EM MÁRMORE CLARO',
      category: 'Banheiro',
      description: 'Projeto elegante com revestimentos marmorizados, prateleiras iluminadas e espelho com LED.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.33.jpeg',
      title: 'SUÍTE CASAL INTEGRADA',
      category: 'Dormitório',
      description: 'Suíte com tons neutros, iluminação aconchegante e integração visual com área de closet.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32%20%285%29.jpeg',
      title: 'DORMITÓRIO CASAL COM PENDENTES',
      category: 'Dormitório',
      description: 'Ambiente compacto e sofisticado com cabeceira estofada, madeira clara e iluminação decorativa.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32%20%284%29.jpeg',
      title: 'DORMITÓRIO CASAL MINIMALISTA',
      category: 'Dormitório',
      description: 'Composição clean com mesas laterais em madeira, iluminação simétrica e tons suaves.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32%20%283%29.jpeg',
      title: 'DORMITÓRIO INFANTIL PLANEJADO',
      category: 'Dormitório',
      description: 'Quarto com marcenaria funcional, painel de estudo, armário planejado e iluminação linear.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32%20%282%29.jpeg',
      title: 'DORMITÓRIO INFANTIL ROSÉ',
      category: 'Dormitório',
      description: 'Ambiente delicado com painel em madeira, parede rosé e composição acolhedora.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32%20%281%29.jpeg',
      title: 'COZINHA VERDE COM ILHA',
      category: 'Cozinha',
      description: 'Cozinha planejada com armários verdes, ilha branca, iluminação linear e acabamento em madeira.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.32.jpeg',
      title: 'COZINHA INTEGRADA COM JANTAR',
      category: 'Cozinha Integrada',
      description: 'Projeto de cozinha gourmet integrada à sala de jantar, com ilha, pendentes e marcenaria verde.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.31%20%281%29.jpeg',
      title: 'SALA DE JANTAR INTEGRADA',
      category: 'Área Social',
      description: 'Ambiente social com mesa ampla, parede em tijolinho branco e integração com cozinha gourmet.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.31.jpeg',
      title: 'HALL COM COBOGÓ',
      category: 'Área Social',
      description: 'Circulação com painel verde, cobogó decorativo e vista integrada para cozinha e jantar.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.30%20%281%29.jpeg',
      title: 'SALA DE ESTAR COM PÉ-DIREITO ALTO',
      category: 'Sala de Estar',
      description: 'Sala ampla com painel em madeira, parede vazada, sofá claro e integração com varanda.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.30.jpeg',
      title: 'GARAGEM MODERNA',
      category: 'Garagem',
      description: 'Garagem com iluminação perimetral, parede ripada em madeira e acabamento em concreto.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.29%20%282%29.jpeg',
      title: 'FACHADA COM VARANDA',
      category: 'Fachada Residencial',
      description: 'Fachada contemporânea com garagem, varanda superior e iluminação cênica.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.29%20%281%29.jpeg',
      title: 'VARANDA RESIDENCIAL',
      category: 'Fachada Residencial',
      description: 'Varanda com guarda-corpo em vidro, cadeira suspensa e iluminação decorativa.',
    },
    {
      image: '/img/WhatsApp%20Image%202026-04-03%20at%2022.44.29.jpeg',
      title: 'FACHADA RUA ZACARIAS',
      category: 'Fachada Residencial',
      description: 'Projeto residencial com fachada urbana, garagem frontal e varanda iluminada.',
    },
  ];

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Helmet>
        <title>Projetos | B Engenharia</title>
        <meta
          name="description"
          content="Conheça o portfólio de projetos da B Engenharia."
        />
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
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group relative overflow-hidden border border-primary/20 bg-[#0a0e27] ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
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

export default PortfolioPage;
