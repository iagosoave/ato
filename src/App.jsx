import React from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection'; // Importe a nova seção

const App = () => {
  return (
    <main>
      {/* Estilos de fonte globais */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
          background-color: #051026;
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
      `}</style>
      
      <Hero />
      <AudienceSection /> {/* Adicione a nova seção aqui */}
    </main>
  );
};

export default App;