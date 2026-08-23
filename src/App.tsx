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
          >
            <Cursor />
            <Navbar />
            <main>
              {/* Wrapping each section in FlipSection where appropriate.
                  Hero is usually visible immediately so it can skip or use direction="top" */}
              <FlipSection direction="top">
                <Hero />
              </FlipSection>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
