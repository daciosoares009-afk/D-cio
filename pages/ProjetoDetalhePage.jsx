import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { completeProjects } from '@/data/completeProjects.js';

const ProjetoDetalhePage = () => {
  const { slug } = useParams();
  const project = completeProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="bg-[#0A0E27] min-h-screen text-white">
        <Header />
        <main className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-font text-4xl font-bold mb-6">Projeto nao encontrado</h1>
          <Link to="/#projetos-completos" className="text-primary">Voltar para projetos</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const hasPlans = project.plans.length > 0;

  return (
    <div className="bg-[#0A0E27] min-h-screen">
      <Helmet>
        <title>{project.title} | B Engenharia</title>
        <meta name="description" content={`Veja plantas e imagens do projeto ${project.title}.`} />
      </Helmet>

      <Header />

      <main className="w-full overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 md:pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <Link
            to="/#projetos-completos"
            className="inline-flex items-center gap-2 text-primary heading-font text-sm font-bold mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLTAR AOS PROJETOS
          </Link>

          <div className={`grid grid-cols-1 gap-8 lg:gap-12 items-center ${hasPlans ? 'lg:max-w-3xl' : 'lg:grid-cols-[0.85fr_1.15fr]'}`}>
            <div className="min-w-0">
              <div className="geometric-line mb-6" />
              <span className="text-primary heading-font text-sm font-bold tracking-widest">{project.location}</span>
              <h1 className="heading-font text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                {project.description}
              </p>
              {project.slug !== 'santa-barbara' && (
                <div className="inline-flex border border-primary/30 px-4 py-2 text-primary heading-font text-xs font-bold tracking-widest">
                  {project.category}
                </div>
              )}
              {project.documentUrl && (
                <a
                  href={project.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-primary/30 px-4 py-3 text-primary heading-font text-xs font-bold tracking-widest transition-colors hover:bg-primary hover:text-black"
                >
                  {project.documentLabel || 'ACESSAR DOCUMENTO'}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            {!hasPlans && (
              <div className="photo-watermark relative overflow-hidden border border-primary/20 bg-[#0A0E27]">
                <img
                  src={project.cover}
                  alt={`${project.coverLabel} - ${project.title}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {hasPlans && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
            <div className="mb-8 md:mb-10">
              <div className="geometric-line mb-6" />
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                PLANTAS DO PROJETO
              </h2>
              <p className="text-white/60 max-w-2xl">
                Visualizacao das plantas diretamente na pagina, sem botao de download.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {project.plans.map((plan, index) => (
                <div key={plan} className="photo-watermark relative overflow-hidden border border-primary/20 bg-[#0A0E27]">
                  <img
                    src={plan}
                    alt={`${project.title} - planta ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.images.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 md:mb-10">
              <div className="geometric-line mb-6" />
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                FOTOS DO PROJETO
              </h2>
              <p className="text-white/60 max-w-2xl">
                Fotos organizadas na ordem em que foram enviadas, com marca d'agua da B Engenharia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {project.images.map((image, index) => (
                <div key={image} className="photo-watermark relative aspect-[4/3] overflow-hidden border border-primary/20 bg-[#0A0E27]">
                  <img
                    src={image}
                    alt={`${project.title} - foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjetoDetalhePage;
