import React from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection';

const App = () => {
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
        @media (max-width: 768px) {
          .app-container section + section {
            margin-top: -1px; /* Evitar gaps em mobile */
          }
        }
      `}</style>
      
      <Hero />
      <AudienceSection />
    </main>
  );
};

export default App;