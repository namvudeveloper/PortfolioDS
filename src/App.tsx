/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components/Portfolio';
import { PROJECTS, SKILLS } from './constants';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'vi'>('vi');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent/30 selection:text-accent">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} skills={SKILLS} />
        <Projects lang={lang} projects={PROJECTS} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
