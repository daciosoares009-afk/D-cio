import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, HardHat, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Helmet>
        <title>B Engenharia | Transformando Ideias em Realidade</title>
        <meta name="description" content="Soluções inteligentes e inovadoras em engenharia para construir um futuro melhor." />
      </Helmet>

      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1675576917482-edb5c58c5818" 
              alt="Modern architecture" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27] via-[#0a0e27]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="geometric-line mb-8" />
              <h1 className="heading-font text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                ENGENHARIA QUE TRANSFORMA IDEIAS EM <span className="text-primary">REALIDADE.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
                Soluções inteligentes e inovadoras em engenharia para construir um futuro melhor.
              </p>
              <Button asChild size="lg" className="bg-primary text-[#0a0e27] hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                <Link to="/portfolio" className="flex items-center gap-3">
                  CONHEÇA NOSSOS PROJETOS
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAIS SECTION */}
        <section className="py-24 bg-[#0a0e27] border-y border-primary/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-primary/20">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 flex flex-col items-center text-center group"
              >
                <Building2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="heading-font text-primary text-xl font-bold mb-3">+50 PROJETOS ENTREGUES</h3>
                <p className="text-primary/70 text-sm">com excelência</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 flex flex-col items-center text-center group"
              >
                <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="heading-font text-primary text-xl font-bold mb-3">100% COMPROMISSO COM O CLIENTE</h3>
                <p className="text-primary/70 text-sm">do início ao fim</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 flex flex-col items-center text-center group"
              >
                <HardHat className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="heading-font text-primary text-xl font-bold mb-3">QUALIDADE E SEGURANÇA</h3>
                <p className="text-primary/70 text-sm">em cada etapa da obra</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 flex flex-col items-center text-center group"
              >
                <Medal className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="heading-font text-primary text-xl font-bold mb-3">CONFIANÇA E TRANSPARÊNCIA</h3>
                <p className="text-primary/70 text-sm">valores que guiam cada decisão</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-24 bg-white text-[#0a0e27]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-font text-primary text-sm font-bold tracking-widest mb-4">QUEM NÓS SOMOS</h2>
                <h3 className="heading-font text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  MAIS QUE ENGENHARIA, CONSTRUÍMOS CONFIANÇA.
                </h3>
                
                <div className="space-y-8 mb-10">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="w-[1px] h-full bg-primary/30 my-2" />
                    </div>
                    <div className="pb-6">
                      <h4 className="heading-font font-bold text-lg mb-2">Bernardo Sousa</h4>
                      <p className="text-gray-600">Engenheiro Civil e Fundador, com mais de 15 anos de experiência em obras de alta complexidade.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="w-[1px] h-full bg-primary/30 my-2" />
                    </div>
                    <div className="pb-6">
                      <h4 className="heading-font font-bold text-lg mb-2">Nossa Missão</h4>
                      <p className="text-gray-600">Entregar projetos estruturais e arquitetônicos que superem as expectativas, unindo estética e funcionalidade.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="w-[1px] h-full bg-primary/30 my-2" />
                    </div>
                    <div className="pb-6">
                      <h4 className="heading-font font-bold text-lg mb-2">Nossa História</h4>
                      <p className="text-gray-600">Fundada com o propósito de elevar o padrão da construção civil através de inovação tecnológica.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <div>
                      <h4 className="heading-font font-bold text-lg mb-2">Nossa Visão</h4>
                      <p className="text-gray-600">Ser a principal referência em engenharia de alto padrão no mercado nacional.</p>
                    </div>
                  </div>
                </div>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-[#0a0e27] heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                  <Link to="/sobre">CONHEÇA NOSSA HISTÓRIA</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 border border-primary/30 translate-x-4 translate-y-4 z-0" />
                <img 
                  src="https://horizons-cdn.hostinger.com/5e5ebf47-2c25-4e9e-89f6-ba1d6f4256f9/b5db6e2e1a830e6dc2ccc89bd741cfc4.png" 
                  alt="Bernardo Sousa - Fundador da B Engenharia" 
                  className="relative z-10 w-full h-[600px] object-cover transition-all duration-700"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-[#0a0e27] relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1640445439197-e3f67db7c5ee" 
              alt="Construction tools" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27] via-[#0a0e27]/90 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="border border-primary p-12 md:p-20 bg-[#0a0e27]/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="geometric-line mb-6" />
                  <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    VAMOS CONSTRUIR ALGO EXTRAORDINÁRIO JUNTOS.
                  </h2>
                  <p className="text-white/70 text-lg mb-8">
                    Fale com nossa equipe e transforme seu projeto em realidade com quem entende do assunto.
                  </p>
                  <Button asChild className="bg-primary text-[#0a0e27] hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                    <Link to="/contato">FALE CONOSCO</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;