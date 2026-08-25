import React, { Suspense, useEffect } from 'react';
import { Header } from '@components/Header/Header';
import { Hero } from '@components/Hero/Hero';
import { useTheme } from '@hooks/useTheme';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { useInteractionStore } from '@stores/interactionStore';
import { ToastContainer } from '@components/common/Toast';

// Lazy load sections
const About = React.lazy(() => import('@components/About/About').then(module => ({ default: module.About })));
const Projects = React.lazy(() => import('@components/Projects/Projects').then(module => ({ default: module.Projects })));
const Contact = React.lazy(() => import('@components/Contact/Contact').then(module => ({ default: module.Contact })));

const LoadingSpinner = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

const App: React.FC = () => {
  // Initialize theme
  useTheme();
  
  // Track scroll position
  useScrollPosition();
  
  const setActiveSection = useInteractionStore((state) => state.setActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0 
      }
    );

    // Give DOM time to render lazy components
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
