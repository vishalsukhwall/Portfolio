export const reportWebVitals = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Check if web-vitals is available or use native PerformanceObserver
    if ('PerformanceObserver' in window) {
      // Basic implementation for Web Vitals using Performance API
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`[Performance] ${entry.name}:`, entry);
        });
      });
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  } catch (err) {
    console.warn('Web Vitals reporting failed:', err);
  }
};

export const monitorFrameRate = () => {
  if (typeof window === 'undefined') return () => {};
  
  let _frameCount = 0;
  let lastTime = performance.now();
  let animationFrameId: number;

  const loop = () => {
    _frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      _frameCount = 0;
      lastTime = currentTime;
    }
    animationFrameId = requestAnimationFrame(loop);
  };

  animationFrameId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
};
