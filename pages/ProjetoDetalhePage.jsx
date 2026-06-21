import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { completeProjects } from '@/data/completeProjects.js';

const ProjetoDetalhePage = () => {
  const { slug } = useParams();
  const project = completeProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="bg-[#0a0e27] min-h-screen text-white">
        <Header />
        <main className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-font text-4xl font-bold mb-6">Projeto não encontrado</h1>
          <Link to="/#projetos-completos" className="text-primary">Voltar para projetos</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Helmet>
        <title>{project.title} | B Engenharia</title>
        <meta name="description" content={`Veja planta baixa, imagens e PDF do projeto ${project.title}.`} />
      </Helmet>

      <Header />

      <main className="pt-36 pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link
            to="/#projetos-completos"
            className="inline-flex items-center gap-2 text-primary heading-font text-sm font-bold mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLTAR AOS PROJETOS
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <div className="geometric-line mb-6" />
              <span className="text-primary heading-font text-sm font-bold tracking-widest">{project.location}</span>
              <h1 className="heading-font text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                {project.title}
              </h1>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                {project.description}
              </p>
              {project.pdf && (
                <Button asChild className="bg-primary text-[#0a0e27] hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none px-8 py-6 h-auto">
                  <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    ABRIR PDF COMPLETO
                    <FileText className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>

            <div className="photo-watermark relative overflow-hidden border border-primary/20 bg-white">
              <img
                src={project.plan}
                alt={`${project.coverLabel || 'Planta baixa'} - ${project.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="geometric-line mb-6" />
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
              IMAGENS DO PROJETO
            </h2>
            <p className="text-white/60 max-w-2xl">
              Seleção leve das principais imagens do projeto. {project.pdf ? 'O PDF completo fica disponível no botão acima.' : 'Galeria organizada para visualização rápida.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={image} className="photo-watermark relative aspect-[4/3] overflow-hidden border border-primary/20">
                <img
                  src={image}
                  alt={`${project.title} - imagem ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjetoDetalhePage;
