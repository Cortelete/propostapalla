import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Link as LinkIcon, 
  Music, 
  Radio, 
  Smartphone, 
  BarChart3, 
  Video, 
  Lightbulb, 
  ArrowRight,
  X,
  Send,
  Headphones,
  ShoppingBag
} from 'lucide-react';

// --- Components ---

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: React.ElementType }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
    className="flex items-center gap-3 mb-12"
  >
    {Icon && <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400"><Icon size={24} /></motion.div>}
    <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{children}</h2>
  </motion.div>
);

const GlassCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, type: "spring", bounce: 0.3 }}
    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(168,85,247,0.15)" }}
    className={`glass-card rounded-3xl p-8 hover:border-purple-500/30 transition-colors duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const text = `Olá, meu nome é ${name.trim()}. ${message.trim()}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5541988710303?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setName('');
    setMessage('');
  };

  return (
    <div className="min-h-screen cosmic-bg font-sans selection:bg-purple-500/30">
      
      {/* Background Stars Effect (Simple CSS implementation) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header / Hero */}
        <header className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden p-3">
              <img src="/logolab.png" alt="Labirinto Acústico" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="text-2xl text-slate-400 font-light">+</div>
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden p-3">
              <img src="/logopala.png" alt="Palladium" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-tight"
          >
            Labirinto Acústico <br/>
            <span className="text-slate-400 text-4xl md:text-6xl font-light">&times;</span> <br/>
            <span className="text-gradient">Palladium Ponta Grossa</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12"
          >
            Conexão, presença e experiência de marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm font-medium tracking-wider uppercase"
            >
              Descubra a proposta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </header>

        {/* Intro */}
        <section id="intro" className="mb-32 scroll-mt-24">
          <GlassCard className="text-center md:text-left md:flex items-center gap-12">
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">Ouvir, Sentir, Conectar.</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                O <strong>Labirinto Acústico</strong> é um projeto multiplataforma que une música, entretenimento e comunicação, com forte presença digital e atuação na tradicional rádio local.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Nossa proposta é criar uma parceria com o <strong>Shopping Palladium Ponta Grossa</strong>, unindo mídia, conteúdo e experiência digital para fortalecer ainda mais a conexão com o público.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
                <Radio className="text-blue-400 mb-3" size={32} />
                <span className="font-medium">Rádio Local</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
                <Smartphone className="text-pink-400 mb-3" size={32} />
                <span className="font-medium">Digital</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.02 }} className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center col-span-2">
                <Video className="text-purple-400 mb-3" size={32} />
                <span className="font-medium">Conteúdo Multiplataforma</span>
              </motion.div>
            </div>
          </GlassCard>
        </section>

        {/* Proposta */}
        <section className="mb-32">
          <SectionHeading icon={Rocket}>A Proposta</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard delay={0.1} className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <LinkIcon size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">Experiência Digital Exclusiva</h3>
              <p className="text-slate-400 mb-6 flex-grow">Criação de uma página totalmente personalizada para o Palladium (Link na bio):</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" /> Design exclusivo (não utilizamos modelos prontos)</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" /> Identidade visual alinhada com a marca</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" /> Acesso direto para lojas, cinema, eventos e promoções</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" /> Experiência moderna, prática e pensada para conversão</li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.2} className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
                <Music size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">Jingle Exclusivo</h3>
              <p className="text-slate-400 mb-6 flex-grow">Uma identidade sonora marcante para o shopping:</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" /> Produção original e personalizada</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" /> Fácil memorização e identificação da marca</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" /> Aplicação em rádio, redes sociais e campanhas</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Radio Presence */}
        <section className="mb-32">
          <GlassCard className="relative overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
            ></motion.div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logoclube.png" alt="Clube FM" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
                  <h2 className="text-3xl font-display font-bold">Presença na Rádio</h2>
                </div>
                <p className="text-lg text-slate-300 mb-8">Atuação forte dentro da programação do Labirinto Acústico na Clube FM (94.1 FM).</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring" }} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">2x</div>
                    <div className="text-sm text-slate-400">Inserções por programa</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring" }} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">4x</div>
                    <div className="text-sm text-slate-400">Programas por semana</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }} className="bg-white/5 rounded-xl p-4 border border-white/5 col-span-2">
                    <div className="text-3xl font-bold text-gradient mb-1">+80 mil</div>
                    <div className="text-sm text-slate-400">Ouvintes mensais alcançados</div>
                  </motion.div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                  <h4 className="font-medium text-blue-300 mb-2">Além disso:</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">&bull; Possibilidade de inserções em outros horários</li>
                    <li className="flex items-center gap-2">&bull; Presença em uma emissora consolidada na região</li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
                <Radio size={64} className="text-white/20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full mix-blend-overlay"></div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Digital Reach */}
        <section className="mb-32">
          <SectionHeading icon={BarChart3}>Alcance Digital</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard delay={0.1} className="md:col-span-2">
              <h3 className="text-xl font-display font-semibold mb-6">Ecossistema Multiplataforma</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Rádio (94.1 FM)', url: null },
                  { name: 'Twitch', url: 'https://www.twitch.tv/labirintoacustico' },
                  { name: 'Facebook', url: 'https://www.facebook.com/people/Labirinto-Ac%C3%BAstico/61587062987128/' },
                  { name: 'YouTube', url: 'https://www.youtube.com/@LabirintoAc%C3%BAstico' },
                  { name: 'Instagram', url: 'https://www.instagram.com/labirintoacustico/' },
                  { name: 'TikTok', url: 'https://www.tiktok.com/@labirintoacustico' },
                  { name: 'Spotify', url: 'https://open.spotify.com/user/313lmghjbjiyr6nqmltzbjc4k3wq?si=dc71b318da2f43db' }
                ].map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
                  >
                    {platform.url ? (
                      <a 
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:bg-purple-500/20 hover:text-white hover:border-purple-500/50 transition-all hover:scale-105"
                      >
                        {platform.name}
                      </a>
                    ) : (
                      <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">
                        {platform.name}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
            
            <GlassCard delay={0.2} className="flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold text-gradient mb-2">+2M</div>
              <div className="text-sm text-slate-400">Curtidas no TikTok</div>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard delay={0.3} className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0">
                <Video className="text-purple-400" size={28} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100k</div>
                <div className="text-sm text-slate-400">Média de curtidas por live</div>
              </div>
            </GlassCard>

            <GlassCard delay={0.4}>
              <h3 className="text-lg font-display font-semibold mb-4">Conteúdo e Exposição</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" /> Presença da marca durante transmissões ao vivo</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" /> Produção de vídeos exclusivos</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" /> Conteúdos para eventos, campanhas e datas sazonais</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" /> Integração entre rádio e redes sociais</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Diferencial */}
        <section className="mb-32">
          <GlassCard className="text-center relative overflow-hidden py-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 text-yellow-400">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">O Diferencial da Proposta</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Não se trata apenas de divulgação. A proposta é posicionar o Palladium com:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring" }} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-semibold text-lg mb-2 text-blue-300">Presença Constante</h4>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-semibold text-lg mb-2 text-purple-300">Conteúdo Relevante</h4>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, type: "spring" }} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-semibold text-lg mb-2 text-pink-300">Experiência Diferenciada</h4>
                </motion.div>
              </div>
              
              <p className="mt-12 text-lg text-slate-400 font-medium tracking-wide uppercase text-sm">
                Tudo isso conectado em um único ecossistema de mídia.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Footer / CTA */}
        <footer className="text-center pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Próximo Passo</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Estamos à disposição para apresentar ideias visuais e aplicações práticas dessa parceria.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Falar com a equipe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <div className="mt-16 pt-8 border-t border-white/10 text-slate-500 text-sm flex flex-col items-center gap-2">
              <p className="font-medium text-slate-300">Labirinto Acústico &bull; Cortelete</p>
              <p>@labirintoacustico</p>
            </div>
          </motion.div>
        </footer>

      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2">Iniciar Conversa</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Envie uma mensagem diretamente para o nosso WhatsApp para darmos o próximo passo.
                </p>

                <form onSubmit={handleWhatsAppSend} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Seu Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                      placeholder="Como podemos te chamar?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Mensagem</label>
                    <textarea 
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                      placeholder="Gostaria de agendar uma reunião para..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors mt-6"
                  >
                    Enviar para WhatsApp <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
