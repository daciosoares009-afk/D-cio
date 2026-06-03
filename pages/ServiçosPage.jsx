import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, ClipboardCheck, Calculator, Hammer, Search, Leaf } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServiçosPage = () => {
  const services = [
    {
      icon: Building2,
      title: 'PROJETOS ESTRUTURAIS',
      description: 'Desenvolvimento completo de projetos estruturais para edificações residenciais, comerciais e industriais. Utilizamos tecnologia de ponta e metodologias consagradas para garantir segurança, economia e durabilidade em cada estrutura projetada.',
    },
    {
      icon: ClipboardCheck,
      title: 'CONSULTORIA TÉCNICA',
      description: 'Assessoria especializada em todas as fases do seu projeto. Nossa equipe oferece suporte técnico para tomada de decisões, análise de viabilidade, otimização de custos e soluções para desafios estruturais complexos.',
    },
    {
      icon: Calculator,
      title: 'ORÇAMENTOS',
      description: 'Elaboração de orçamentos detalhados e precisos para obras estruturais. Fornecemos quantitativos completos, especificações técnicas e análise de custos para auxiliar no planejamento financeiro do seu projeto.',
    },
    {
      icon: Hammer,
      title: 'REFORMAS E AMPLIAÇÕES',
      description: 'Projetos estruturais para reformas e ampliações de edificações existentes. Realizamos análise criteriosa das estruturas atuais e desenvolvemos soluções seguras e eficientes para adequação às novas necessidades.',
    },
    {
      icon: Search,
      title: 'INSPEÇÃO PREDIAL',
      description: 'Avaliação técnica detalhada de edificações para identificação de patologias, análise de desempenho estrutural e recomendações de manutenção. Laudos técnicos elaborados conforme normas vigentes.',
    },
    {
      icon: Leaf,
      title: 'PROJETOS SUSTENTÁVEIS',
      description: 'Desenvolvimento de soluções estruturais com foco em sustentabilidade. Incorporamos materiais e técnicas que reduzem o impacto ambiental, promovem eficiência energética e contribuem para certificações ambientais.',
    },
  ];

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Helmet>
        <title>Serviços | B Engenharia</title>
        <meta name="description" content="Conheça os serviços especializados da B Engenharia: projetos estruturais, consultoria técnica, orçamentos e mais." />
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
              NOSSOS SERVIÇOS
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
              Soluções completas em engenharia estrutural, combinando expertise técnica, inovação e compromisso com a excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-primary/20 p-10 bg-[#0a0e27] hover:border-primary transition-all duration-500 group"
              >
                <service.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h2 className="heading-font text-xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <div className="w-8 h-[1px] bg-primary/50 mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="text-white/60 font-light leading-relaxed text-sm">
                  {service.description}
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

export default ServiçosPage;