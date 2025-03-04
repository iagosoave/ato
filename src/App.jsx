import React, { useEffect, useState } from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection';

const App = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Função para atualizar a altura da viewport (especialmente importante para móveis)
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
      // Define a variável CSS personalizada para viewport height
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    // Executa imediatamente e adiciona listener
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    
    // Ajuste para teclado móvel e mudanças de orientação
    window.addEventListener('orientationchange', () => {
      setTimeout(updateViewportHeight, 200);
    });

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);

  return (
    <main className="app-container">
      {/* Estilos de fonte globais */}
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
          /* Usar a unidade personalizada --vh como fallback para vh em dispositivos móveis */
          min-height: calc(var(--vh, 1vh) * 100);
        }
        
        /* Prevenir overflow */
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
        
        /* Estilos consistentes para toda a aplicação */
        .app-container section {
          position: relative;
          overflow: hidden;
        }
        
        /* Variáveis CSS para cores e gradientes consistentes */
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
        
        /* Corrigir espaçamento entre seções */
        .app-container section + section {
          margin-top: 0; /* Alterado para 0 para evitar sobreposição */
        }
        
        /* Garantir que o conteúdo seja scrollável e todas as seções visíveis */
        .app-container {
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          width: 100%;
        }
        
        /* Ajustes mobile */
        @media (max-width: 768px) {
          /* Para evitar problemas com o Safari e outros navegadores móveis */
          .app-container {
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
            overflow-x: hidden;
          }
          
          /* Permitir scroll normal em dispositivos móveis */
          body {
            position: static; /* Alterar de fixed para static para permitir scroll */
            width: 100%;
            height: auto;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Fixar problemas de altura da viewport em móveis */
          .app-container section.hero-section {
            min-height: calc(var(--vh, 1vh) * 100);
            max-height: calc(var(--vh, 1vh) * 100);
          }
        }
        
        /* Correções para telas pequenas */
        @media (max-width: 360px) or (max-height: 640px) {
          html {
            font-size: 14px;
          }
        }
        
        /* Suporte para áreas seguras em dispositivos com notch */
        @supports (padding-top: env(safe-area-inset-top)) {
          body {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
      `}</style>
      
      <Hero />
      <AudienceSection />
    </main>
  );
};

export default App;