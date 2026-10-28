import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  Medal,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { completeProjects } from '@/data/completeProjects.js';
import { createFeedback, feedbackStoreMode, listFeedbacks } from '@/lib/feedbackStore.js';

const HomePage = () => {
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [siteFeedbacks, setSiteFeedbacks] = useState([]);
  const [feedbackStatus, setFeedbackStatus] = useState('');
  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        setSiteFeedbacks(await listFeedbacks());
      } catch (error) {
        setFeedbackStatus('Nao foi possivel carregar os feedbacks agora.');
      }
    };

    loadFeedbacks();
  }, []);
  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();

    const name = feedbackName.trim() || 'Cliente';
    const text = feedbackText.trim();

    if (!text) {
      setFeedbackStatus('Escreva seu feedback antes de publicar.');
      return;
    }

    try {
      const newFeedback = await createFeedback({
        name,
        text,
        rating: Number(feedbackRating),
      });

      setSiteFeedbacks((currentFeedbacks) => [newFeedback, ...currentFeedbacks].slice(0, 20));
      setFeedbackName('');
      setFeedbackText('');
      setFeedbackRating(5);
      setFeedbackStatus(feedbackStoreMode === 'supabase' ? 'Feedback publicado no site.' : 'Feedback publicado neste navegador.');
    } catch (error) {
      setFeedbackStatus('Nao foi possivel publicar agora. Tente novamente.');
    }
  };
  const services = [
    {
      icon: Building2,
      title: 'PROJETOS ESTRUTURAIS',
      description: 'Desenvolvimento de projetos estruturais para edificações residenciais, comerciais e industriais.',
    },
    {
      icon: ClipboardCheck,
      title: 'CONSULTORIA TÉCNICA',
      description: 'Assessoria especializada para tomada de decisões, análise de viabilidade e soluções estruturais.',
    },
    {
      icon: Calculator,
      title: 'ORÇAMENTOS',
      description: 'Quantitativos, especificações técnicas e análise de custos para planejamento financeiro da obra.',
    },
    {
      icon: HardHat,
      title: 'REFORMAS E AMPLIAÇÕES',
      description: 'Soluções seguras para adequação, reforço e ampliação de edificações existentes.',
    },
    {
      icon: Search,
      title: 'INSPEÇÃO PREDIAL',
      description: 'Avaliação técnica de edificações, identificação de patologias e recomendações de manutenção.',
    },
    {
      icon: Leaf,
      title: 'PROJETOS SUSTENTÁVEIS',
      description: 'Soluções com foco em eficiência, menor impacto ambiental e melhor uso dos recursos.',
    },
  ];  const steps = [
    {
      title: 'Briefing',
      description: 'Entendemos o objetivo, medidas, estilo, prazo e fase atual do projeto.',
    },
    {
      title: 'Análise técnica',
      description: 'Avaliamos viabilidade, estrutura, materiais, normas e melhores soluções.',
    },
    {
      title: 'Proposta',
      description: 'Apresentamos escopo, cronograma, investimento e próximos passos.',
    },
    {
      title: 'Execução e acompanhamento',
      description: 'Seguimos com projeto, documentação e suporte até a entrega planejada.',
    },
  ];

  const technicalProof = [
    {
      icon: ShieldCheck,
      title: 'Responsabilidade técnica',
      description: 'Projetos conduzidos com critério técnico, segurança e atenção às normas.',
    },
    {
      icon: FileCheck2,
      title: 'Documentação clara',
      description: 'Entregáveis organizados para facilitar obra, aprovação e tomada de decisão.',
    },
    {
      icon: Ruler,
      title: 'Compatibilização',
      description: 'Olhar integrado entre estrutura, arquitetura, interiores e execução.',
    },
  ];

  const testimonials = [
    {
      name: 'Cliente residencial',
      text: 'O atendimento foi claro desde o primeiro contato. O projeto ficou funcional, bonito e muito bem explicado.',
    },
    {
      name: 'Reforma de interiores',
      text: 'A equipe conseguiu transformar as ideias em soluções práticas, com cuidado nos detalhes e no orçamento.',
    },
    {
      name: 'Projeto completo',
      text: 'Gostei da transparência em cada etapa. Passou confiança e ajudou muito na tomada de decisões.',
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen">
      <Helmet>
        <title>B Engenharia | Projetos Estruturais, Reformas e Interiores em São Paulo</title>
        <meta
          name="description"
          content="B Engenharia: projetos estruturais, reformas, interiores, consultoria técnica e orçamentos em São Paulo. Solicite seu orçamento pelo WhatsApp."
        />
        <meta property="og:title" content="B Engenharia | Estruturando sonhos" />
        <meta property="og:description" content="Soluções em engenharia, interiores, reformas e projetos estruturais." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="w-full overflow-hidden">
        <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-24 scroll-mt-28">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1675576917482-edb5c58c5818"
              alt="Arquitetura moderna"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-black/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="geometric-line mb-8" />
              <h1 className="heading-font text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.08]">
                ENGENHARIA QUE TRANSFORMA IDEIAS EM <span className="text-primary">REALIDADE.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
                Soluções inteligentes em engenharia, interiores e reformas para construir com segurança, estética e planejamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black heading-font text-sm font-bold tracking-wider rounded-none px-6 sm:px-8 py-6 h-auto">
                  <Link to="/#projetos-completos" className="flex items-center justify-center gap-3">
                    VER PROJETOS
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-[#050505] text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="heading-font text-primary text-sm font-bold tracking-widest mb-4">QUEM NÓS SOMOS</h2>
                <h3 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  MAIS QUE ENGENHARIA, CONSTRUÍMOS CONFIANÇA.
                </h3>
                <div className="space-y-6 text-white/70 font-light leading-relaxed mb-10">
                  <p>
                    Olá, você que está chegando, seja muito bem-vindo à nossa página. Somos a B Engenharia, uma equipe dedicada a transformar ideias em projetos seguros, funcionais e bem planejados.
                  </p>
                  <p>
                    Nossa missão é oferecer soluções com qualidade, responsabilidade e profissionalismo, atuando em diferentes áreas da engenharia e construção civil.
                  </p>
                  <p>
                    Cada serviço realizado carrega dedicação, atenção aos detalhes e compromisso de entregar resultados que façam diferença.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute -inset-4 border border-primary/30 translate-x-4 translate-y-4 z-0" />
                <div className="relative z-10 flex h-[320px] sm:h-[420px] lg:h-[560px] items-center justify-center bg-[#000000] p-8 sm:p-12">
                  <img
                    src="/img/logo.svg"
                    alt="Logo B Engenharia"
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-16 md:py-24 bg-[#000000] border-y border-primary/20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <div className="geometric-line mx-auto mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">NOSSOS SERVIÇOS</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
                Soluções completas em engenharia estrutural, combinando técnica, inovação e compromisso com a excelência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="border border-primary/20 p-8 bg-[#000000] hover:border-primary transition-all duration-500 group"
                >
                  <service.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  <h3 className="heading-font text-xl font-bold text-white mb-4">{service.title}</h3>
                  <div className="w-8 h-[1px] bg-primary/50 mb-6 group-hover:w-16 transition-all duration-500" />
                  <p className="text-white/60 font-light leading-relaxed text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-16 md:py-24 bg-[#050505] text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 md:mb-16 max-w-3xl">
              <div className="geometric-line mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6">COMO FUNCIONA</h2>
              <p className="text-white/70 text-lg font-light">
                Um processo objetivo para sair da ideia e chegar em uma proposta técnica clara.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="border border-primary/30 p-7">
                  <span className="heading-font text-primary text-sm font-bold">0{index + 1}</span>
                  <h3 className="heading-font text-xl font-bold mt-4 mb-4">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos-completos" className="py-16 md:py-24 bg-[#050505] text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="geometric-line mx-auto mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                PROJETOS COM PLANTA
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
                As plantas ficam separadas das fotos para facilitar a visualizacao de cada projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14 md:mb-20">
              {completeProjects.filter((project) => project.plans.length > 0).map((project) => (
                <Link
                  key={project.slug}
                  to={`/projetos/${project.slug}`}
                  className="group border border-primary/25 bg-[#080808] overflow-hidden transition-all duration-300 hover:border-primary"
                >
                  <div className="photo-watermark relative aspect-[16/10] overflow-hidden bg-[#050505]">
                    <img
                      src={project.cover}
                      alt={`${project.coverLabel} - ${project.title}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 border-t border-primary/20">
                    <span className="text-primary heading-font text-xs font-bold tracking-widest">{project.location}</span>
                    <h3 className="heading-font text-2xl font-bold text-white mt-3 mb-3">{project.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">{project.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary heading-font text-sm font-bold">
                      VER PLANTA E FOTOS
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="bastidores" className="py-16 md:py-24 bg-[#000000] text-white border-y border-primary/20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="geometric-line mb-6" />
                <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6">BASTIDORES E EVOLUÇÃO</h2>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                  Mostramos etapas de estudo, projeto, compatibilização e resultado para que o cliente acompanhe o raciocínio por trás de cada escolha.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-primary/20 p-5">
                    <span className="heading-font text-primary text-sm font-bold">ANTES</span>
                    <p className="text-white/60 text-sm mt-2">Levantamento, necessidades e restrições.</p>
                  </div>
                  <div className="border border-primary/20 p-5">
                    <span className="heading-font text-primary text-sm font-bold">DEPOIS</span>
                    <p className="text-white/60 text-sm mt-2">Solução visual, técnica e funcional.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="photo-watermark relative aspect-[3/4] overflow-hidden border border-primary/20">
                  <img src="/img/WhatsApp%20Image%202026-04-03%20at%2022.44.31.jpeg" alt="Bastidor do projeto" className="w-full h-full object-cover" />
                </div>
                <div className="photo-watermark relative aspect-[3/4] overflow-hidden border border-primary/20 mt-10">
                  <img src="/img/WhatsApp%20Image%202026-04-03%20at%2022.44.29%20%282%29.jpeg" alt="Resultado de projeto" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="prova-tecnica" className="py-16 md:py-24 bg-[#050505] text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="geometric-line mx-auto mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6">PROVA TÉCNICA</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
                Engenharia com método, clareza documental e responsabilidade em cada entrega.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technicalProof.map((item) => (
                <div key={item.title} className="border-t-4 border-primary bg-[#101010] p-8 shadow-sm">
                  <item.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.4} />
                  <h3 className="heading-font text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24 bg-[#000000] text-white border-y border-primary/20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="geometric-line mx-auto mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6">DEPOIMENTOS</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
                Confiança também se constrói com comunicação clara e entrega consistente.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="border border-primary/20 p-8">
                  <div className="flex gap-1 text-primary mb-6">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/70 font-light leading-relaxed mb-6">“{testimonial.text}”</p>
                  <h3 className="heading-font text-primary text-sm font-bold">{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="feedback" className="py-20 md:py-24 bg-[#050505] text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <div>
                <div className="geometric-line mb-6" />
                <span className="text-primary heading-font text-sm font-bold tracking-widest">SUA OPINIAO</span>
                <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                  DEIXE SEU FEEDBACK
                </h2>
                <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                  Escreva seu nome, escolha uma avaliacao de 0 a 5 estrelas e publique seu feedback direto no site.
                </p>
              </div>

              <div className="space-y-8">
                <form onSubmit={handleFeedbackSubmit} className="border border-primary/25 bg-[#000000] p-5 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(201,169,97,0.10)]">
                  <div className="grid grid-cols-1 gap-5">
                    <label className="block">
                      <span className="heading-font text-primary text-xs font-bold tracking-widest mb-3 block">NOME</span>
                      <input
                        type="text"
                        value={feedbackName}
                        onChange={(event) => setFeedbackName(event.target.value)}
                        placeholder="Seu nome"
                        className="w-full border border-primary/25 bg-[#101010] px-4 py-4 text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary"
                      />
                    </label>

                    <div>
                      <span className="heading-font text-primary text-xs font-bold tracking-widest mb-3 block">AVALIACAO</span>
                      <div className="flex flex-wrap items-center gap-3">
                        {[0, 1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setFeedbackRating(rating)}
                            className={`flex h-11 min-w-11 items-center justify-center border px-3 heading-font text-sm font-bold transition-colors ${
                              feedbackRating === rating
                                ?
                                'border-primary bg-primary text-black'
                                : 'border-primary/30 text-white hover:border-primary hover:text-primary'
                            }`}
                            aria-label={`Avaliar com ${rating} estrelas`}
                          >
                            {rating}
                          </button>
                        ))}
                        <div className="flex items-center gap-1 text-primary" aria-label={`${feedbackRating} de 5 estrelas`}>
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`w-5 h-5 ${index < feedbackRating ? 'fill-current' : 'opacity-30'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <label className="block">
                      <span className="heading-font text-primary text-xs font-bold tracking-widest mb-3 block">FEEDBACK</span>
                      <textarea
                        value={feedbackText}
                        onChange={(event) => setFeedbackText(event.target.value)}
                        placeholder="Escreva seu feedback aqui"
                        rows={6}
                        className="w-full resize-none border border-primary/25 bg-[#101010] px-4 py-4 text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary"
                      />
                    </label>

                    <Button type="submit" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                      PUBLICAR AVALIACAO
                    </Button>

                    {feedbackStatus && (
                      <p className="text-sm text-white/70">{feedbackStatus}</p>
                    )}
                  </div>
                </form>

                {siteFeedbacks.length > 0 && (
                  <div className="grid grid-cols-1 gap-4">
                    {siteFeedbacks.map((feedback) => (
                      <div key={feedback.id} className="border border-primary/25 bg-[#101010] p-5 shadow-sm">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="heading-font text-white text-lg font-bold">{feedback.name}</h3>
                            <span className="text-white/50 text-sm">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-primary" aria-label={`${feedback.rating} de 5 estrelas`}>
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                className={`w-4 h-4 ${index < feedback.rating ? 'fill-current' : 'opacity-30'}`}
                              />
                            ))}
                            <span className="ml-2 heading-font text-xs font-bold text-white">{feedback.rating}/5</span>
                          </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">{feedback.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>        <section id="diferenciais" className="py-16 md:py-24 bg-[#000000] border-y border-primary/20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <div className="geometric-line mx-auto mb-6" />
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">NOSSOS DIFERENCIAIS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-primary/20">
              {[
                { icon: Building2, title: '+50 PROJETOS ENTREGUES', subtitle: 'com excelência' },
                { icon: Users, title: '100% COMPROMISSO COM O CLIENTE', subtitle: 'do início ao fim' },
                { icon: HardHat, title: 'QUALIDADE E SEGURANÇA', subtitle: 'em cada etapa da obra' },
                { icon: Medal, title: 'CONFIANÇA E TRANSPARÊNCIA', subtitle: 'valores que guiam cada decisão' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-8 flex flex-col items-center text-center group"
                >
                  <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  <h3 className="heading-font text-primary text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-primary/70 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 md:py-24 bg-[#050505] text-white scroll-mt-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="min-w-0">
                <div className="geometric-line mb-6" />
                <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-xl">
                  FALE COM A B ENGENHARIA
                </h2>
                <p className="text-white/70 text-base sm:text-lg font-light mb-10 max-w-xl leading-relaxed">
                  Estamos prontos para entender seu projeto e indicar o melhor caminho técnico.
                </p>

                <div className="space-y-6 mb-10 text-base sm:text-lg">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                    <span className="break-words">+55 (11) 98853-5276</span>
                  </div>
                  <div className="flex items-center gap-4 min-w-0">
                    <Mail className="w-5 h-5 shrink-0 text-primary" />
                    <span className="break-all">eng.bernardos@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 shrink-0 text-primary" />
                    <span className="break-words">São Paulo - SP</span>
                  </div>
                </div>

                <Button asChild className="w-full sm:w-auto bg-[#000000] text-white hover:bg-primary hover:text-black heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                  <a href="mailto:eng.bernardos@gmail.com">
                    SOLICITAR ORÇAMENTO
                  </a>
                </Button>
              </div>

              <div className="border border-primary/30 p-8 md:p-10 bg-[#000000] text-white">
                <h3 className="heading-font text-2xl font-bold mb-6">COMECE SEU PROJETO</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  Nossa equipe vai entender o tipo de obra, a localização e a fase atual do projeto para preparar a melhor solução técnica.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="border border-primary/20 p-5">
                    <span className="heading-font text-primary font-bold block mb-2">01</span>
                    <p className="text-white/60 text-sm">Briefing</p>
                  </div>
                  <div className="border border-primary/20 p-5">
                    <span className="heading-font text-primary font-bold block mb-2">02</span>
                    <p className="text-white/60 text-sm">Análise</p>
                  </div>
                  <div className="border border-primary/20 p-5">
                    <span className="heading-font text-primary font-bold block mb-2">03</span>
                    <p className="text-white/60 text-sm">Proposta</p>
                  </div>
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
