import { useState, useEffect } from 'react';

const useViewport = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [deviceType, setDeviceType] = useState('desktop');
  
  useEffect(() => {
    const detectDeviceType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Detecção de dispositivos específicos
      const isIPad = /ipad/.test(userAgent) || (/macintosh/.test(userAgent) && 'ontouchend' in document);
      const isSurface = /windows nt/.test(userAgent) && (width >= 768 && width <= 1024);
      const isFoldable = aspectRatio > 0.65 && aspectRatio < 0.8 && width >= 768 && width <= 1180;
      
      if (width <= 400) {
        return 'small';
      } else if (width < 768) {
        return 'mobile';
      } else if (isIPad && width >= 1024) {
        // iPad Pro (12.9")
        return 'ipad-pro';
      } else if (isIPad && width <= 834 && width >= 820) {
        // iPad Air (10.9")
        return 'ipad-air';
      } else if (isIPad && width <= 768) {
        // iPad Mini
        return 'ipad-mini';
      } else if (isSurface) {
        // Surface Pro 7
        return 'surface';
      } else if (isFoldable || (width <= 1180 && width >= 768 && aspectRatio < 0.8)) {
        // Asus ZenBook Fold ou outros dobráveis
        return 'foldable';
      } else if (width <= 1024 && height >= 1000) {
        // Outros tablets genéricos
        return 'tablet';
      } else {
        return 'desktop';
      }
    };

    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
      
      // Define a variável CSS para altura da viewport
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      
      // Detecta e define o tipo de dispositivo
      const device = detectDeviceType();
      setDeviceType(device);
      document.body.setAttribute('data-device', device);
      
      if (device === 'small' || device === 'mobile') {
        document.body.classList.add('mobile-device');
        
        // Fix para gaps entre seções
        fixMobileSections();
      } else {
        document.body.classList.remove('mobile-device');
      }
    };
    
    const fixMobileSections = () => {
      // Ajusta seções para evitar gaps
      const sections = document.querySelectorAll('.app-container section');
      sections.forEach((section, index) => {
        if (index > 0) {
          section.style.marginTop = '-1px';
          section.style.paddingTop = section.classList.contains('hero-section') ? '0' : '2rem';
          section.style.position = 'relative';
          section.style.zIndex = 5 + index;
          
          // Adiciona um elemento para cobrir qualquer gap potencial
          if (!section.querySelector('.section-gap-fix')) {
            const fixElement = document.createElement('div');
            fixElement.className = 'section-gap-fix';
            fixElement.style.position = 'absolute';
            fixElement.style.top = '-2px';
            fixElement.style.left = '0';
            fixElement.style.width = '100%';
            fixElement.style.height = '4px';
            fixElement.style.backgroundColor = '#0c1220';
            fixElement.style.zIndex = '10';
            section.appendChild(fixElement);
          }
        }
      });
    };
    
    // Executa na montagem e em cada redimensionamento
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateViewport, 200);
    });
    
    // Ajuste inicial após renderização completa
    setTimeout(fixMobileSections, 300);
    
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);
  
  return { viewportHeight, viewportWidth, deviceType };
};

export default useViewport;