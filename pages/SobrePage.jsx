import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const SobrePage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Sobre Nós | B Engenharia</title>
        <meta name="description" content="Conheça a história, missão e valores da B Engenharia." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="bg-background text-foreground py-20 -mt-32 pt-40 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="geometric-line mb-6" />
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SOBRE B ENGENHARIA
              </h1>
              <p className="text-primary text-lg md:text-xl font-light">
                Mais que engenharia, construímos confiança e legados duradouros.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio Section - Quem Nós Somos */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Elegant Frame */}
              <div className="absolute -inset-4 border border-primary translate-x-4 translate-y-4 z-0" />
              <div className="absolute -inset-4 border border-primary/30 -translate-x-2 -translate-y-2 z-0" />
              
              <div className="relative z-10 flex aspect-square w-full items-center justify-center bg-card p-8 sm:p-12 shadow-2xl">
                <img
                  src="/img/logo-bengenharia.png"
                  alt="Logo B Engenharia"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="geometric-line mb-6" />
              <h2 className="heading-font text-primary text-sm font-bold tracking-widest mb-4 uppercase">
                QUEM NÓS SOMOS
              </h2>
              <h3 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                MAIS QUE ENGENHARIA, CONSTRUÍMOS CONFIANÇA.
              </h3>
              
              <div className="space-y-6 text-foreground/70 font-light leading-relaxed mb-10">
                <p>
                  Olá, você que está chegando, seja muito bem-vindo à nossa página. Somos a B Engenharia, uma equipe dedicada a transformar ideias em projetos seguros, funcionais e bem planejados.
                </p>
                <p>
                  Nossa missão é oferecer soluções com qualidade, responsabilidade e profissionalismo, atuando em diferentes áreas da engenharia e construção civil. Cada serviço realizado carrega dedicação, atenção aos detalhes e o compromisso de entregar resultados que realmente façam diferença.
                </p>
                <p>
                  A B Engenharia nasceu de um sonho que, com muito esforço e constância, vem se transformando em uma trajetória construída com seriedade, confiança e evolução diária. Fique à vontade para acompanhar nosso trabalho e fazer parte dessa caminhada.
                </p>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto transition-colors duration-300">
                <Link to="/portfolio">CONHEÇA NOSSOS PROJETOS</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-background py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                NOSSA FILOSOFIA
              </h2>
              <div className="geometric-line mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 border-t-4 border-primary shadow-sm"
              >
                <h3 className="heading-font text-xl font-bold text-foreground mb-4">MISSÃO</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Entregar projetos estruturais e arquitetônicos que superem as expectativas, unindo estética, funcionalidade e rigor técnico, garantindo a total satisfação de nossos clientes.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card p-10 border-t-4 border-primary shadow-sm"
              >
                <h3 className="heading-font text-xl font-bold text-foreground mb-4">VISÃO</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Ser a principal referência em engenharia de alto padrão no mercado nacional, reconhecida pela inovação tecnológica, sustentabilidade e excelência em cada detalhe.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card p-10 border-t-4 border-primary shadow-sm"
              >
                <h3 className="heading-font text-xl font-bold text-foreground mb-4">VALORES</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Ética inegociável, transparência absoluta, compromisso com a segurança, valorização humana e busca contínua pela perfeição técnica em todas as nossas entregas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <h2 className="heading-font text-3xl font-bold text-foreground mb-8">
            PRONTO PARA INICIAR SEU PROJETO
          </h2>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-10 py-6 h-auto transition-colors duration-300">
            <Link to="/contato">FALE COM NOSSA EQUIPE</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobrePage;
