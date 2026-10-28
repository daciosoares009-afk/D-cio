import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Users, HardHat, Medal } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const DiferenciaisPage = () => {
  const differentials = [
    {
      icon: Building2,
      title: "+50 PROJETOS ENTREGUES",
      subtitle: "com excelência",
      description: "Nossa vasta experiência se traduz em um portfólio robusto de obras concluídas com sucesso. Cada projeto entregue é um testemunho do nosso compromisso com a qualidade, prazos e orçamento estabelecidos. Atuamos em diversos segmentos, desde residenciais de alto padrão até complexos industriais, sempre mantendo o mesmo rigor técnico."
    },
    {
      icon: Users,
      title: "100% COMPROMISSO COM O CLIENTE",
      subtitle: "do início ao fim",
      description: "Acreditamos que a comunicação transparente é a base de qualquer projeto bem-sucedido. Nossa equipe mantém os clientes informados em cada etapa, oferecendo um atendimento personalizado e soluções ágeis para qualquer desafio. Seu projeto é tratado com a exclusividade e a atenção que merece."
    },
    {
      icon: HardHat,
      title: "QUALIDADE E SEGURANÇA",
      subtitle: "em cada etapa da obra",
      description: "Não abrimos mão dos mais altos padrões de segurança e qualidade. Utilizamos materiais certificados, tecnologias construtivas avançadas e seguimos rigorosamente todas as normas técnicas vigentes. Nossa equipe passa por treinamentos constantes para garantir um ambiente de trabalho seguro e resultados impecáveis."
    },
    {
      icon: Medal,
      title: "CONFIANÇA E TRANSPARÊNCIA",
      subtitle: "valores que guiam cada decisão",
      description: "Construímos relacionamentos duradouros baseados na ética e na transparência. Nossos orçamentos são detalhados e realistas, sem surpresas desagradáveis durante a execução. Acreditamos que a confiança é o alicerce mais importante que construímos com nossos clientes e parceiros."
    }
  ];

  return (
    <div className="bg-[#000000] min-h-screen">
      <Helmet>
        <title>Diferenciais | B Engenharia</title>
        <meta name="description" content="O que nos torna únicos no mercado de engenharia. Conheça os diferenciais da B Engenharia." />
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
              NOSSOS DIFERENCIAIS
            </h1>
            <p className="text-primary text-lg md:text-xl max-w-2xl mx-auto font-light">
              O que nos torna únicos no mercado de engenharia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-primary/20 p-10 bg-[#000000] hover:border-primary transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                
                <diff.icon className="w-12 h-12 text-primary mb-8" strokeWidth={1} />
                <h2 className="heading-font text-2xl font-bold text-white mb-2">
                  {diff.title}
                </h2>
                <h3 className="text-primary font-medium mb-6">
                  {diff.subtitle}
                </h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiferenciaisPage;