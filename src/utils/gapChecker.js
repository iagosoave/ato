// Script para detectar e corrigir gaps entre seções
// Adicione no index.jsx ou App.jsx usando useEffect

function checkForGaps() {
    // Aguardar a renderização completa
    setTimeout(() => {
      const sections = document.querySelectorAll('.app-container section');
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Aplicar correções específicas para mobile
        sections.forEach((section, index) => {
          // Garantir posicionamento correto
          section.style.position = 'relative';
          section.style.zIndex = 10 + index;
          
          if (index > 0) {
            // Conectar com a seção anterior
            const prevSection = sections[index - 1];
            const prevRect = prevSection.getBoundingClientRect();
            const currRect = section.getBoundingClientRect();
            
            // Verificar se existe um gap
            if (Math.abs(prevRect.bottom - currRect.top) > 1) {
              console.log(`Gap detectado entre seção ${index-1} e ${index}: ${Math.abs(prevRect.bottom - currRect.top)}px`);
              
              // Corrigir o gap
              section.style.marginTop = `-${Math.abs(prevRect.bottom - currRect.top) + 1}px`;
              
              // Adicionar elemento visual para cobrir qualquer gap restante
              const gapFixer = document.createElement('div');
              gapFixer.className = 'gap-fixer';
              gapFixer.style.position = 'absolute';
              gapFixer.style.top = '-2px';
              gapFixer.style.left = '0';
              gapFixer.style.width = '100%';
              gapFixer.style.height = '4px';
              gapFixer.style.backgroundColor = '#0c1220';
              gapFixer.style.zIndex = '100';
              
              section.appendChild(gapFixer);
            }
          }
        });
        
        // Garantir que não haja espaços na parte inferior da página
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          const footer = document.createElement('div');
          footer.className = 'mobile-footer-fix';
          footer.style.height = '2px';
          footer.style.width = '100%';
          footer.style.backgroundColor = '#0c1220';
          footer.style.position = 'relative';
          footer.style.zIndex = '100';
          
          lastSection.appendChild(footer);
        }
      }
    }, 500); // Atraso para garantir que todo o conteúdo seja carregado
  }
  
  // Exemplo de uso no App.jsx
  // useEffect(() => {
  //   checkForGaps();
  //   window.addEventListener('resize', checkForGaps);
  //   window.addEventListener('orientationchange', () => {
  //     setTimeout(checkForGaps, 300);
  //   });
  //   
  //   return () => {
  //     window.removeEventListener('resize', checkForGaps);
  //     window.removeEventListener('orientationchange', () => {
  //       setTimeout(checkForGaps, 300);
  //     });
  //   };
  // }, []);
  
  export default checkForGaps;