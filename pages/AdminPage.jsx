import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Star, Trash2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { completeProjects } from '@/data/completeProjects.js';
import { deleteFeedback, feedbackStoreMode, listFeedbacks } from '@/lib/feedbackStore.js';
import { Button } from '@/components/ui/button';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'bengenharia2026';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [status, setStatus] = useState('');

  const loadFeedbacks = async () => {
    try {
      setFeedbacks(await listFeedbacks());
      setStatus('');
    } catch (error) {
      setStatus('Nao foi possivel carregar os feedbacks.');
    }
  };

  useEffect(() => {
    if (isLogged) {
      loadFeedbacks();
    }
  }, [isLogged]);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLogged(password === ADMIN_PASSWORD);
    setStatus(password === ADMIN_PASSWORD ? '' : 'Senha incorreta.');
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeedback(id);
      await loadFeedbacks();
      setStatus('Feedback removido.');
    } catch (error) {
      setStatus('Nao foi possivel remover o feedback.');
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-white">
      <Helmet>
        <title>Admin | B Engenharia</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="geometric-line mb-6" />
          <h1 className="heading-font text-3xl sm:text-5xl font-bold mb-6">ADMINISTRACAO</h1>
          <p className="text-white/60 max-w-2xl mb-10">
            Painel simples para acompanhar feedbacks e projetos publicados no site.
          </p>

          {!isLogged ? (
            <form onSubmit={handleLogin} className="max-w-md border border-primary/25 p-6 sm:p-8">
              <label className="block mb-5">
                <span className="heading-font text-primary text-xs font-bold tracking-widest mb-3 block">SENHA</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full border border-primary/25 bg-[#101010] px-4 py-4 text-white outline-none focus:border-primary"
                  placeholder="Digite a senha"
                />
              </label>

              <Button type="submit" className="bg-primary text-black hover:bg-primary/90 heading-font rounded-none px-8 py-6 h-auto">
                ENTRAR
              </Button>

              {status && <p className="text-sm text-white/70 mt-4">{status}</p>}
            </form>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8">
              <div className="border border-primary/20 p-5 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="heading-font text-2xl font-bold">Feedbacks</h2>
                    <p className="text-white/50 text-sm">Modo atual: {feedbackStoreMode === 'supabase' ? 'Supabase' : 'localStorage'}</p>
                  </div>
                  <Button type="button" onClick={loadFeedbacks} className="bg-primary text-black hover:bg-primary/90 heading-font rounded-none">
                    ATUALIZAR
                  </Button>
                </div>

                <div className="space-y-4">
                  {feedbacks.length === 0 && (
                    <p className="text-white/60">Nenhum feedback publicado ainda.</p>
                  )}

                  {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="border border-primary/20 p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <h3 className="heading-font text-lg text-primary font-bold">{feedback.name}</h3>
                          <p className="text-white/50 text-sm mb-3">{feedback.date}</p>
                          <div className="flex items-center gap-1 text-primary mb-4">
                            {[...Array(5)].map((_, index) => (
                              <Star key={index} className={`w-4 h-4 ${index < feedback.rating ? 'fill-current' : 'opacity-30'}`} />
                            ))}
                            <span className="ml-2 text-xs heading-font">{feedback.rating}/5</span>
                          </div>
                          <p className="text-white/70 leading-relaxed">{feedback.text}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDelete(feedback.id)}
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-primary/25 text-primary hover:bg-primary hover:text-black"
                          aria-label="Remover feedback"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {status && <p className="text-sm text-white/70 mt-5">{status}</p>}
              </div>

              <div className="border border-primary/20 p-5 sm:p-8">
                <h2 className="heading-font text-2xl font-bold mb-6">Projetos com planta</h2>
                <div className="space-y-4">
                  {completeProjects.map((project) => (
                    <div key={project.slug} className="border border-primary/15 p-4">
                      <span className="text-primary heading-font text-xs font-bold">{project.location}</span>
                      <h3 className="heading-font font-bold mt-2">{project.title}</h3>
                      <p className="text-white/50 text-sm mt-2">{project.images.length} imagens + {project.plans.length} planta</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
