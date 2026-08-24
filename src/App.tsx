import { useState } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useLenis } from './hooks/useLenis';
import { motion, AnimatePresence } from 'framer-motion';
import FlipSection from './components/FlipSection';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialize smooth scrolling
  useLenis();

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden"
          >
            <Cursor />
            <Navbar />
            
            {/* Main wrapper centered and structured professionally */}
            <main className="flex-grow w-full flex flex-col items-center justify-start">
              <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <FlipSection direction="top">
                  <Hero />
                </FlipSection>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
              </div>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}