import React, { useEffect, useState, useRef } from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection';
import MethodJourneySection from './section/MethodJourneySection';
import  HistoricalMentorsSection from './section/HistoricalMentorsSection';
import  EventDetailsSection from './section/EventDetailsSection';
import  PricingSection from './section/PricingSection';
import  CristoferLeoneSectionn from './section/CristoferLeoneSectionn';
import  FinalCtaSection from './section/FinalCtaSection';
import  FAQSection from './section/FAQSection';
import UnifiedBackground from './components/UnifiedBackground';

const App = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [deviceType, setDeviceType] = useState('desktop'); // 'desktop', 'tablet', 'mobile', 'small', 'foldable', 'ipad-pro', 'ipad-air', 'ipad-mini', 'surface'
  const audienceSectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    // Função aprimorada para detectar tipo de dispositivo com suporte a tablets específicos
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
        setDeviceType('small');
      } else if (width < 768) {
        setDeviceType('mobile');
      } else if (isIPad && width >= 1024) {
        // iPad Pro (12.9")
        setDeviceType('ipad-pro');
      } else if (isIPad && width <= 834 && width >= 820) {
        // iPad Air (10.9")
        setDeviceType('ipad-air');
      } else if (isIPad && width <= 768) {
        // iPad Mini
        setDeviceType('ipad-mini');
      } else if (isSurface) {
        // Surface Pro 7
        setDeviceType('surface');
      } else if (isFoldable || (width <= 1180 && width >= 768 && aspectRatio < 0.8)) {
        // Asus ZenBook Fold ou outros dobráveis
        setDeviceType('foldable');
      } else if (width <= 1024 && height >= 1000) {
        // Outros tablets genéricos
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Função para atualizar altura da viewport
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
      // Define a variável CSS para altura da viewport
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      
      // Detecta tipo de dispositivo
      detectDeviceType();
      
      // Para dispositivos pequenos, adiciona classe especial e fix para o gap
      if (window.innerWidth <= 400) {
        document.body.classList.add('small-device');
        
        // Fix para o gap entre seções em dispositivos pequenos
        const fixSectionGap = () => {
          const appContainer = document.querySelector('.app-container');
          if (appContainer) {
            appContainer.style.backgroundColor = '#0c1220';
          }
          
          const heroSection = document.querySelector('.hero-section');
          const audienceSection = document.querySelector('.audience-section');
          
          if (heroSection && audienceSection) {
            // Garante que não haja gap entre as seções
            heroSection.style.marginBottom = '-1px';
            audienceSection.style.marginTop = '0';
            audienceSection.style.paddingTop = '1rem';
            
            // Adiciona um elemento visual para cobrir qualquer gap
            const existingFix = document.getElementById('section-gap-fix');
            if (!existingFix) {
              const fixElement = document.createElement('div');
              fixElement.id = 'section-gap-fix';
              fixElement.style.position = 'absolute';
              fixElement.style.bottom = '0';
              fixElement.style.left = '0';
              fixElement.style.width = '100%';
              fixElement.style.height = '2px';
              fixElement.style.backgroundColor = '#0c1220';
              fixElement.style.zIndex = '100';
              heroSection.style.position = 'relative';
              heroSection.appendChild(fixElement);
            }
          }
        };
        
        // Executar após um pequeno delay para garantir que o DOM está pronto
        setTimeout(fixSectionGap, 100);
      } else {
        document.body.classList.remove('small-device');
      }
    };

    // Executa imediatamente e adiciona listener
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateViewportHeight, 200);
    });
    
    // Configuração do observer para detectar seção atual
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('hero-section')) {
            setCurrentSection('hero');
          } else if (entry.target.classList.contains('audience-section')) {
            setCurrentSection('audience');
          }
        }
      });
    }, observerOptions);

    // Observa as seções
    if (heroSectionRef.current) sectionObserver.observe(heroSectionRef.current);
    if (audienceSectionRef.current) sectionObserver.observe(audienceSectionRef.current);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
      if (heroSectionRef.current) sectionObserver.unobserve(heroSectionRef.current);
      if (audienceSectionRef.current) sectionObserver.unobserve(audienceSectionRef.current);
    };
  }, []);

  return (
    <main className={`app-container device-type-${deviceType}`}>
      {/* Global styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
          background-color: #0c1220;
          color: white;
          overflow-x: hidden;
          -webkit-tap-highlight-color: transparent;
          min-height: 100vh;
          min-height: calc(var(--vh, 1vh) * 100);
        }
        
        html, body {
          width: 100%;
          max-width: 100%;
        }
        
        h1, h2, h3, h4, h5, h6, button {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }
        
        p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }
        
        .app-container section {
          position: relative;
          z-index: 1;
        }
        
        :root {
          --primary-color: #e19d24;
          --primary-light: #f8c56d;
          --primary-dark: #d3891a;
          --bg-dark: #0c1220;
          --bg-dark-medium: #182030;
          --bg-dark-light: #1d2638;
          --text-light: #c8d4e6;
          --text-white: #ffffff;
        }
        
        .app-container section + section {
          margin-top: 0;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          width: 100%;
          position: relative;
          background-color: #0c1220;
        }
        
        /* Correção para dispositivos small */
        #section-gap-fix {
          display: none;
        }
        
        body.small-device #section-gap-fix {
          display: block;
        }
        
        /* Ajustes específicos para tablet 853x1280 */
        @media (min-width: 768px) and (max-width: 1024px) and (min-height: 1000px) {
          .device-type-tablet .hero-section {
            height: 100vh !important;
            min-height: 100vh !important;
          }
          
          .device-type-tablet .hero-text-column {
            margin-top: -100px !important;
          }
          
          .device-type-tablet .audience-section {
            min-height: 100vh !important;
          }
          
          .device-type-tablet .mobile-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
            width: 90% !important;
            max-width: 1000px !important;
          }
          
          .device-type-tablet .mobile-card {
            padding: 1.5rem !important;
          }
        }
        
        /* Ajustes para iPad Pro (12.9") */
        .device-type-ipad-pro .hero-section {
          height: 100vh !important;
          min-height: 100vh !important;
          display: flex !important;
          align-items: center !important;
        }
        
        .device-type-ipad-pro .hero-text-column {
          margin-top: -50px !important;
          padding-left: 3rem !important;
        }
        
        .device-type-ipad-pro .cristofer-image-container {
          height: 85vh !important;
        }
        
        .device-type-ipad-pro .audience-section {
          min-height: 100vh !important;
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }
        
        .device-type-ipad-pro .mobile-card-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 2.5rem !important;
          width: 85% !important;
          max-width: 1200px !important;
        }
        
        .device-type-ipad-pro .mobile-card {
          padding: 2rem !important;
        }
        
        /* Ajustes para iPad Air (10.9") */
        .device-type-ipad-air .hero-section {
          height: 100vh !important;
          min-height: 100vh !important;
        }
        
        .device-type-ipad-air .hero-text-column {
          margin-top: -80px !important;
        }
        
        .device-type-ipad-air .cristofer-image-container {
          height: 80vh !important;
        }
        
        .device-type-ipad-air .audience-section {
          min-height: 100vh !important;
          padding-top: 2.5rem !important;
        }
        
        .device-type-ipad-air .mobile-card-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 2rem !important;
          width: 90% !important;
        }
        
        /* Ajustes para iPad Mini */
        .device-type-ipad-mini .hero-section {
          height: 100vh !important;
          min-height: 100vh !important;
        }
        
        .device-type-ipad-mini .hero-text-column {
          margin-top: -70px !important;
        }
        
        .device-type-ipad-mini .cristofer-image-container {
          height: 75vh !important;
        }
        
        .device-type-ipad-mini .audience-section {
          min-height: 100vh !important;
          padding-top: 2rem !important;
        }
        
        .device-type-ipad-mini .mobile-card-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1.5rem !important;
          width: 92% !important;
        }
        
        /* Ajustes para Surface Pro 7 */
        .device-type-surface .hero-section {
          height: 100vh !important;
          min-height: 100vh !important;
        }
        
        .device-type-surface .hero-text-column {
          margin-top: -90px !important;
        }
        
        .device-type-surface .cristofer-image-container {
          height: 80vh !important;
        }
        
        .device-type-surface .audience-section {
          min-height: 100vh !important;
          padding-top: 2.5rem !important;
        }
        
        .device-type-surface .mobile-card-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1.75rem !important;
          width: 90% !important;
        }
        
        /* Ajustes para dispositivos dobráveis como Asus ZenBook Fold */
        .device-type-foldable .hero-section {
          height: 100vh !important;
          min-height: 100vh !important;
          display: flex !important;
          align-items: center !important;
        }
        
        .device-type-foldable .hero-text-column {
          margin-top: -40px !important;
        }
        
        .device-type-foldable .cristofer-image-container {
          height: 75vh !important;
        }
        
        .device-type-foldable .audience-section {
          min-height: 100vh !important;
          padding-top: 3rem !important;
        }
        
        .device-type-foldable .mobile-card-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1.5rem !important;
          width: 90% !important;
        }
        
        /* Correção para dispositivos pequenos 360x640 */
        @media (max-width: 400px) {
          body {
            background-color: #0c1220 !important;
          }
          
          .device-type-small .hero-section {
            height: 100vh !important;
            margin-bottom: -1px !important;
            border-bottom: 2px solid #0c1220 !important;
          }
          
          .device-type-small .audience-section {
            padding-top: 1rem !important;
            margin-top: 0 !important;
            background-color: #0c1220 !important;
          }
        }
        
        @media (max-width: 768px) {
          .app-container {
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
            overflow-x: hidden;
          }
          
          body {
            position: static;
            width: 100%;
            height: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .app-container section.hero-section {
            min-height: calc(var(--vh, 1vh) * 100);
            max-height: calc(var(--vh, 1vh) * 100);
          }
          
          .app-container section > .absolute:not(.content-absolute) {
            display: none;
          }
        }
        
        @media (max-width: 360px), (max-height: 640px) {
          html {
            font-size: 14px;
          }
        }
        
        @supports (padding-top: env(safe-area-inset-top)) {
          body {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
      `}</style>
      
      {/* Unified background component */}
      <UnifiedBackground currentSection={currentSection} />
      
      {/* Section components with refs */}
      <Hero ref={heroSectionRef} noBackground={true} deviceType={deviceType} />
      <AudienceSection ref={audienceSectionRef} noBackground={true} deviceType={deviceType} />
     < MethodJourneySection/>
     < HistoricalMentorsSection/>
     <EventDetailsSection/>
     <PricingSection/>
     <CristoferLeoneSectionn/>
     <FinalCtaSection/>
     <FAQSection/>
    </main>
  );
};

export default App;