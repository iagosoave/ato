import React, { useEffect, useState, useRef } from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection';
import MethodJourneySection from './section/MethodJourneySection';
import EventDetailsSection from './section/EventDetailsSection';
import PricingSection from './section/PricingSection';
import TestimonialsSection from './section/TestimonialsSection';
import DiferenciaisSection from './section/DiferenciaisSection'; // Nova importação
import CristoferLeoneSectionn from './section/CristoferLeoneSectionn';
import FinalCtaSection from './section/FinalCtaSection';
import FAQSection from './section/FAQSection';
import Footer from './section/Footer'; // Importação do componente Footer

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
      
      // Fix para outras seções - aplica a mesma lógica para as seções após a audience section
      if (window.innerWidth < 768) {
        const fixOtherSections = () => {
          // Selecionar todas as seções após AudienceSection
          const sections = [
            document.querySelector('.method-journey-section'),
            document.querySelector('.historical-mentors-section'),
            document.querySelector('.event-logistics-section'),
            document.querySelector('.pricing-section'),
            document.querySelector('.testimonials-section'),
            document.querySelector('.diferenciais-section'), // Adicionando a nova seção
            document.querySelector('.cristofer-section'),
            document.querySelector('.final-cta-section'),
            document.querySelector('.faq-section')
            // Footer não incluído aqui pois tem background preto
          ];
          
          // Garantir que todas as seções tenham a mesma cor de fundo
          sections.forEach(section => {
            if (section) {
              section.style.backgroundColor = '#0c1220';
              section.style.position = 'relative';
            }
          });
          
          // Aplicar correções para cada par de seções adjacentes
          for (let i = 0; i < sections.length - 1; i++) {
            const currentSection = sections[i];
            const nextSection = sections[i + 1];
            
            if (currentSection && nextSection) {
              // Criar uma sobreposição sutil entre as seções
              currentSection.style.marginBottom = '-1px';
              nextSection.style.marginTop = '-1px';
              
              // Adicionar elemento para cobrir qualquer gap
              if (!currentSection.querySelector(`.section-${i}-bottom-fix`)) {
                const bottomFix = document.createElement('div');
                bottomFix.className = `section-${i}-bottom-fix`;
                bottomFix.style.position = 'absolute';
                bottomFix.style.bottom = '-2px';
                bottomFix.style.left = '0';
                bottomFix.style.width = '100%';
                bottomFix.style.height = '4px';
                bottomFix.style.backgroundColor = '#0c1220';
                bottomFix.style.zIndex = '10';
                currentSection.appendChild(bottomFix);
              }
              
              if (!nextSection.querySelector(`.section-${i+1}-top-fix`)) {
                const topFix = document.createElement('div');
                topFix.className = `section-${i+1}-top-fix`;
                topFix.style.position = 'absolute';
                topFix.style.top = '-2px';
                topFix.style.left = '0';
                topFix.style.width = '100%';
                topFix.style.height = '4px';
                topFix.style.backgroundColor = '#0c1220';
                topFix.style.zIndex = '10';
                nextSection.insertBefore(topFix, nextSection.firstChild);
              }
            }
          }
          
          // Adicionar um z-index específico para cada seção, com valores decrescentes
          const baseZIndex = 50; // Aumentado para acomodar mais seções
          sections.forEach((section, index) => {
            if (section) {
              section.style.zIndex = (baseZIndex - index).toString();
            }
          });
          
          // Garantir que a primeira seção após AudienceSection se conecte corretamente com ela
          const methodSection = document.querySelector('.method-journey-section');
          const audienceSection = document.querySelector('.audience-section');
          
          if (methodSection && audienceSection) {
            audienceSection.style.marginBottom = '-1px';
            methodSection.style.marginTop = '-1px';
            methodSection.style.backgroundColor = '#0c1220';
            
            // Adicionar elemento para cobrir o gap entre audience e method
            if (!audienceSection.querySelector('.audience-bottom-fix')) {
              const bottomFix = document.createElement('div');
              bottomFix.className = 'audience-bottom-fix';
              bottomFix.style.position = 'absolute';
              bottomFix.style.bottom = '-2px';
              bottomFix.style.left = '0';
              bottomFix.style.width = '100%';
              bottomFix.style.height = '4px';
              bottomFix.style.backgroundColor = '#0c1220';
              bottomFix.style.zIndex = '10';
              audienceSection.appendChild(bottomFix);
            }
            
            if (!methodSection.querySelector('.method-top-fix')) {
              const topFix = document.createElement('div');
              topFix.className = 'method-top-fix';
              topFix.style.position = 'absolute';
              topFix.style.top = '-2px';
              topFix.style.left = '0';
              topFix.style.width = '100%';
              topFix.style.height = '4px';
              topFix.style.backgroundColor = '#0c1220';
              topFix.style.zIndex = '10';
              methodSection.insertBefore(topFix, methodSection.firstChild);
            }
          }
          
          // Ajuste para a transição entre a última seção e o rodapé preto
          const faqSection = document.querySelector('.faq-section');
          const footerElement = document.querySelector('footer');
          
          if (faqSection && footerElement) {
            faqSection.style.marginBottom = '-1px';
            footerElement.style.marginTop = '-1px';
            
            // Fixar transição para o footer preto
            if (!faqSection.querySelector('.faq-to-black-footer')) {
              const transitionElement = document.createElement('div');
              transitionElement.className = 'faq-to-black-footer';
              transitionElement.style.position = 'absolute';
              transitionElement.style.bottom = '0';
              transitionElement.style.left = '0';
              transitionElement.style.width = '100%';
              transitionElement.style.height = '4px';
              transitionElement.style.background = 'linear-gradient(to bottom, #0c1220, #000)';
              transitionElement.style.zIndex = '5';
              faqSection.appendChild(transitionElement);
            }
          }
        };
        
        // Executar após um pequeno delay para garantir que o DOM está pronto
        setTimeout(fixOtherSections, 100);
        // Executar novamente após um tempo maior para garantir que todo o conteúdo foi carregado
        setTimeout(fixOtherSections, 500);
        setTimeout(fixOtherSections, 1000);
      }
    };

    // Executa imediatamente e adiciona listener
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateViewportHeight, 200);
    });
    
    // Executar novamente após carregamento completo
    window.addEventListener('load', updateViewportHeight);
    
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
      window.removeEventListener('load', updateViewportHeight);
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
        
        /* Estilos para o footer */
        footer {
          position: relative;
          z-index: 5;
          background-color: #000 !important;
          border-top: 1px solid #111;
        }
        
        /* Otimizações específicas para mobile que não afetam o layout original */
        @media (max-width: 768px) {
          /* Garantir que todas as seções tenham cor de fundo consistente */
          .app-container, .app-container section, body, html {
            background-color: #0c1220 !important;
          }
          
          /* Footer sempre preto */
          footer {
            background-color: #000 !important;
          }
          
          /* Container principal */
          .app-container {
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
          }
          
          body {
            position: static;
            width: 100%;
            height: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Hero section */
          .app-container section.hero-section {
            min-height: calc(var(--vh, 1vh) * 100);
            max-height: calc(var(--vh, 1vh) * 100);
          }
          
          /* Audience section */
          .app-container section.audience-section {
            z-index: 45;
          }
          
          /* Outras seções - Ajustado para incluir DiferenciaisSection */
          .app-container section.method-journey-section {
            z-index: 40;
          }
          
          .app-container section.historical-mentors-section {
            z-index: 35;
          }
          
          .app-container section.event-logistics-section {
            z-index: 30;
          }
          
          .app-container section.pricing-section {
            z-index: 25;
          }
          
          .app-container section.testimonials-section {
            z-index: 23;
          }
          
          .app-container section.diferenciais-section {
            z-index: 22;
          }
          
          .app-container section.cristofer-section {
            z-index: 20;
          }
          
          .app-container section.final-cta-section {
            z-index: 15;
          }
          
          .app-container section.faq-section {
            z-index: 10;
          }
          
          footer {
            z-index: 5;
          }
          
          /* Evitar que elementos quebrem o layout */
          .app-container section:not(.hero-section):not(.audience-section) {
            margin-bottom: -1px !important;
            position: relative !important;
            background-color: #0c1220 !important;
          }
          
          /* Elementos de correção para as seções */
          .section-0-bottom-fix, 
          .section-1-bottom-fix,
          .section-2-bottom-fix,
          .section-3-bottom-fix,
          .section-4-bottom-fix,
          .section-5-bottom-fix,
          .section-6-bottom-fix,
          .section-7-bottom-fix,
          .section-8-bottom-fix,
          .section-1-top-fix,
          .section-2-top-fix,
          .section-3-top-fix,
          .section-4-top-fix,
          .section-5-top-fix,
          .section-6-top-fix,
          .section-7-top-fix,
          .section-8-top-fix,
          .audience-bottom-fix,
          .method-top-fix,
          .faq-to-black-footer {
            display: block !important;
          }
        }
        
        /* Correção para dispositivos muito pequenos */
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
      
      {/* Section components with refs */}
      <Hero ref={heroSectionRef} noBackground={true} deviceType={deviceType} />
      <AudienceSection ref={audienceSectionRef} noBackground={true} deviceType={deviceType} />
      <MethodJourneySection noBackground={true} deviceType={deviceType} />
      <EventDetailsSection noBackground={true} deviceType={deviceType} />
      <PricingSection noBackground={true} deviceType={deviceType} />
      <TestimonialsSection noBackground={true} deviceType={deviceType} />
      <DiferenciaisSection noBackground={true} deviceType={deviceType} /> {/* Nova seção adicionada */}
      <CristoferLeoneSectionn noBackground={true} deviceType={deviceType} />
      <FinalCtaSection noBackground={true} deviceType={deviceType} />
      <FAQSection noBackground={true} deviceType={deviceType} />
      <Footer />
    </main>
  );
};

export default App;