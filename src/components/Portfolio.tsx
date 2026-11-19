import { motion } from 'motion/react';
import { Phone, Menu, X, Languages, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { createElement, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';

type Lang = 'en' | 'vi';

export const Navbar = ({ lang, setLang }: { lang: Lang, setLang: (l: Lang) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-bg/80 backdrop-blur-md border-b border-white/5' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display italic tracking-tighter"
        >
          Đỗ Thị Sáu<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          <button 
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-all"
          >
            <Languages size={14} className="text-accent" />
            {lang === 'en' ? 'VN' : 'EN'}
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 ml-4 pl-8 border-l border-white/10"
          >
            <a href="https://instagram.com/Cynhaccudanam_8754" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com/nhaccudanam" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold"
          >
            <Languages size={12} className="text-accent" />
            {lang === 'en' ? 'VN' : 'EN'}
          </button>
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-bg border-b border-white/5 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/60 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = ({ lang }: { lang: Lang }) => {
  const t = TRANSLATIONS[lang].hero;
  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-6"
          >
            {t.status}
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-8 leading-[0.9]">
            {t.title}<span className="text-accent">.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl md:text-3xl text-white/80 font-light italic">
              {t.role}{t.exp && <> <span className="text-white/40">—</span> {t.exp}</>}
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              {t.desc}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
              >
                {t.viewProjects}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {t.contactMe}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const About = ({ lang }: { lang: Lang }) => {
  const t = TRANSLATIONS[lang].about;
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-20 w-20 glass-card rounded-2xl flex flex-col items-center justify-center border border-accent/20">
              <span className="text-3xl font-display font-bold text-accent">2</span>
              <span className="text-[8px] uppercase tracking-widest text-white/40">{t.yearsTag.split(' ')[0]}</span>
            </div>
          </div>
          
          <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">{t.tag}</h3>
          <h2 className="text-4xl md:text-6xl font-display mb-10 leading-tight">
            {t.title}
          </h2>
          <div className="space-y-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
            <p>{t.desc3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Skills = ({ lang, skills }: { lang: Lang, skills: { languages: string[], platforms: string[], tools: string[] } }) => {
  const t = TRANSLATIONS[lang].expertise;
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">{t.tag}</h3>
        <h2 className="text-4xl md:text-5xl font-display">{t.title}</h2>
      </div>
      
      <div className="space-y-12">
        <div>
          <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">{t.platforms}</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.platforms.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center justify-center text-center hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">{t.languages}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.languages.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center justify-center text-center hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">{t.tools}</h4>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = ({ lang, projects }: { lang: Lang, projects: any[] }) => {
  const t = TRANSLATIONS[lang].portfolio;
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [selected3D, setSelected3D] = useState<{ model: string; video?: string; poster: string; title: string } | null>(null);
  const [active3DTab, setActive3DTab] = useState<'model' | 'video'>('model');
  const [viewerReady, setViewerReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedImage || selected3D ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage, selected3D]);

  useEffect(() => {
    if (selected3D && !viewerReady) {
      import('@google/model-viewer').then(() => setViewerReady(true));
    }
  }, [selected3D, viewerReady]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
        setSelected3D(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">{t.tag}</h3>
          <h2 className="text-4xl md:text-5xl font-display">{t.title}</h2>
        </div>
        <p className="text-white/40 max-w-xs text-sm">
          {t.desc}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <button
              type="button"
              onClick={() => {
                if (project.model) {
                  setActive3DTab('model');
                  setSelected3D({ model: project.model, video: project.video, poster: project.image, title: project.title });
                } else {
                  setSelectedImage({ src: project.image, title: project.title });
                }
              }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 block w-full cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
              aria-label={project.model ? `${t.view3D}: ${project.title}` : `Xem ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold">
                {project.platform}
              </div>
            </button>
            
            <h4 className="text-3xl font-display mb-4 group-hover:text-accent transition-colors">{project.title}</h4>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              {project.description[lang]}
            </p>

            {project.model && (
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setActive3DTab('model');
                    setSelected3D({ model: project.model, video: project.video, poster: project.image, title: project.title });
                  }}
                  className="px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/80 transition-colors"
                >
                  {t.view3D}
                </button>
                {project.video && (
                  <button
                    type="button"
                    onClick={() => {
                      setActive3DTab('video');
                      setSelected3D({ model: project.model, video: project.video, poster: project.image, title: project.title });
                    }}
                    className="px-5 py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    {t.viewAnimation}
                  </button>
                )}
              </div>
            )}

            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {project.images.map((image: string, index: number) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setSelectedImage({ src: image, title: `${project.title} ${index + 1}` })}
                    className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 bg-white/5 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={`Xem ${project.title} ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {project.links && (
              <div className="flex gap-4 mb-8">
                {project.links.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-accent hover:underline">
                    <ExternalLink size={12} /> App Store
                  </a>
                )}
                {project.links.playStore && (
                  <a href={project.links.playStore} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-accent hover:underline">
                    <ExternalLink size={12} /> Play Store
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-accent hover:underline">
                    <ExternalLink size={12} /> GitHub
                  </a>
                )}
                {project.links.website && (
                  <a href={project.links.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-accent hover:underline">
                    <ExternalLink size={12} /> Website
                  </a>
                )}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="text-[10px] uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selected3D && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selected3D.title}
          onClick={() => setSelected3D(null)}
        >
          <div className="w-full max-w-6xl max-h-full flex flex-col gap-4" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4">
              <h5 className="text-lg md:text-2xl font-display">{selected3D.title}</h5>
              <button
                type="button"
                onClick={() => setSelected3D(null)}
                className="h-11 w-11 shrink-0 rounded-full border border-white/20 bg-black/80 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label={t.close3D}
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex gap-2" role="tablist" aria-label={selected3D.title}>
              <button type="button" role="tab" aria-selected={active3DTab === 'model'} onClick={() => setActive3DTab('model')} className={`px-4 py-2 rounded-full text-sm ${active3DTab === 'model' ? 'bg-accent text-white' : 'bg-white/10 text-white/70'}`}>
                {t.view3D}
              </button>
              {selected3D.video && (
                <button type="button" role="tab" aria-selected={active3DTab === 'video'} onClick={() => setActive3DTab('video')} className={`px-4 py-2 rounded-full text-sm ${active3DTab === 'video' ? 'bg-accent text-white' : 'bg-white/10 text-white/70'}`}>
                  {t.viewAnimation}
                </button>
              )}
            </div>
            <div className="w-full aspect-video max-h-[72vh] rounded-2xl overflow-hidden bg-[#222] border border-white/10">
              {active3DTab === 'model' ? (
                viewerReady ? createElement('model-viewer', {
                  src: selected3D.model,
                  poster: selected3D.poster,
                  alt: selected3D.title,
                  'camera-controls': true,
                  'environment-image': 'neutral',
                  'shadow-intensity': '1',
                  'touch-action': 'pan-y',
                  style: { width: '100%', height: '100%' },
                }) : <div className="h-full flex items-center justify-center text-white/60">{t.loading3D}</div>
              ) : (
                <video key={selected3D.video} src={selected3D.video} poster={selected3D.poster} controls playsInline preload="metadata" className="w-full h-full object-contain" />
              )}
            </div>
            {active3DTab === 'model' && <p className="text-center text-sm text-white/50">{t.rotateHint}</p>}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[100] h-12 w-12 rounded-full border border-white/20 bg-black/80 shadow-2xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Đóng"
          >
            <X size={22} />
          </button>
          <div
            className="max-h-full max-w-6xl w-full flex flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <h5 className="text-white/80 text-sm md:text-base font-medium text-center">{selectedImage.title}</h5>
          </div>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl hover:bg-accent hover:text-white transition-colors"
          >
            Đóng ảnh
          </button>
        </div>
      )}
    </section>
  );
};

export const Contact = ({ lang }: { lang: Lang }) => {
  const t = TRANSLATIONS[lang].contact;
  return (
    <section id="contact" className="section-container">
      <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-display mb-8">{t.title}</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            {t.desc}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="tel:0344256802"
              className="flex items-center gap-3 text-2xl font-medium hover:text-accent transition-colors"
            >
              <Phone className="text-accent" />
              0344256802
            </a>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/Cynhaccudanam_8754" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/nhaccudanam" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = ({ lang }: { lang: Lang }) => {
  const t = TRANSLATIONS[lang].footer;
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Đỗ Thị Sáu. {t.rights}
        </p>
        <div className="flex items-center gap-8 text-xs uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">{t.backToTop}</a>
          <span className="text-white/10">|</span>
          <span>{t.builtWith}</span>
        </div>
      </div>
    </footer>
  );
};
