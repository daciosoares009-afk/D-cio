import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ContatoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Contato | B Engenharia</title>
        <meta name="description" content="Entre em contato com a B Engenharia para discutir seu próximo projeto." />
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
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ENTRE EM CONTATO
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light">
              Estamos prontos para transformar seu projeto em realidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="heading-font text-2xl font-bold text-foreground mb-8">INFORMAÇÕES DE CONTATO</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold mb-1">Telefone</h3>
                      <p className="text-foreground/60 font-light">+55 (11) 98853-5276</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold mb-1">E-mail</h3>
                      <p className="text-white/60 font-light break-all">eng.bernardos@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold mb-1">Endereço</h3>
                      <p className="text-foreground/60 font-light">Av. Engenheiro Luís Carlos Berrini, 1500<br/>São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="bg-card border border-primary/30 p-8 md:p-10">
                <h2 className="heading-font text-2xl font-bold text-foreground mb-8">ENVIE UMA MENSAGEM</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80 text-xs font-bold tracking-widest uppercase mb-2 block">Nome Completo</Label>
                    <Input 
                      id="name" 
                      required 
                      className="bg-background border-primary/30 text-foreground rounded-none focus-visible:ring-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="bg-background border-primary/30 text-foreground rounded-none focus-visible:ring-primary h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      required 
                      className="bg-background border-primary/30 text-foreground rounded-none focus-visible:ring-primary min-h-[150px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-primary/90 heading-font text-sm font-bold tracking-wider rounded-none h-14"
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContatoPage;
