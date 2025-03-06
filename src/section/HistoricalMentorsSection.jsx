import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';

const HistoricalMentorsSection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Função otimizada para layout mobile
    const optimizeMobileLayout = () => {
      if (window.innerWidth < 768) {
        // Seleciona o container dos mentores
        const mentorsGrid = document.querySelector('.mentors-grid-container');
        if (mentorsGrid) {
          // Configuração para layout vertical com melhor centralização
          mentorsGrid.style.display = 'flex';
          mentorsGrid.style.flexDirection = 'column';
          mentorsGrid.style.gap = '0.8rem';
          mentorsGrid.style.width = '90%';
          mentorsGrid.style.maxWidth = '350px'; // Reduzido para ficar mais compacto
          mentorsGrid.style.margin = '0 auto';
          
          // Ajustar cada card de mentor
          const mentorCards = mentorsGrid.querySelectorAll('.mentor-card');
          mentorCards.forEach(card => {
            card.style.width = '100%';
            card.style.marginBottom = '0.5rem';
            card.style.padding = '0.65rem';
            
            // Reduzir tamanho dos textos
            const title = card.querySelector('h3');
            if (title) {
              title.style.fontSize = '0.9rem';
              title.style.marginBottom = '0.1rem';
            }
            
            const subtitle = card.querySelector('.subtitle');
            if (subtitle) subtitle.style.fontSize = '0.75rem';
            
            const description = card.querySelector('.description');
            if (description) description.style.fontSize = '0.7rem';
            
            // Ajustar ícones
            const iconContainer = card.querySelector('.icon-container');
            if (iconContainer) {
              iconContainer.style.padding = '0.3rem';
              const svg = iconContainer.querySelector('svg');
              if (svg) {
                svg.style.width = '12px';
                svg.style.height = '12px';
              }
            }
            
            // Ajustar espaçamento interno
            const contentContainer = card.querySelector('.content-container');
            if (contentContainer) {
              contentContainer.style.gap = '0.25rem';
            }
          });
        }
        
        // Ajustar o container de princípios
        const principlesContainer = document.querySelector('.principles-container');
        if (principlesContainer) {
          principlesContainer.style.display = 'flex';
          principlesContainer.style.flexDirection = 'column';
          principlesContainer.style.gap = '0.5rem';
          principlesContainer.style.width = '90%';
          principlesContainer.style.maxWidth = '350px';
          principlesContainer.style.margin = '0 auto';
          
          // Ajustar cada item de princípio
          const principles = principlesContainer.querySelectorAll('.principle-item');
          principles.forEach(principle => {
            principle.style.width = '100%';
            principle.style.marginBottom = '0.25rem';
            principle.style.padding = '0.5rem';
            principle.style.fontSize = '0.7rem';
          });
        }
        
        // Também ajustar o título e o botão da seção
        const sectionTitle = document.querySelector('.historical-mentors-section h2');
        if (sectionTitle) {
          sectionTitle.style.fontSize = '1.4rem';
          sectionTitle.style.lineHeight = '1.2';
          sectionTitle.style.marginBottom = '0.5rem';
        }
        
        const sectionSubtitle = document.querySelector('.historical-mentors-section > .container > div > p');
        if (sectionSubtitle) {
          sectionSubtitle.style.fontSize = '0.8rem';
          sectionSubtitle.style.marginBottom = '1rem';
        }
        
        const secondaryTitle = document.querySelector('.historical-mentors-section h3');
        if (secondaryTitle) {
          secondaryTitle.style.fontSize = '1.1rem';
          secondaryTitle.style.marginBottom = '0.75rem';
        }
        
        const finalText = document.querySelector('.final-text');
        if (finalText) {
          finalText.style.fontSize = '0.8rem';
          finalText.style.marginBottom = '0.75rem';
        }
        
        const button = document.querySelector('.historical-mentors-section button');
        if (button) {
          button.style.fontSize = '0.8rem';
          button.style.padding = '0.5rem 1rem';
        }
      }
    };
    
    // Fix para gaps em dispositivos móveis
    const fixMobileGaps = () => {
      if (window.innerWidth < 768) {
        const section = document.querySelector('.historical-mentors-section');
        if (section) {
          // Posicionar para se sobrepor à seção anterior
          section.style.marginTop = '-1px';
          section.style.position = 'relative';
          section.style.zIndex = '35';
          section.style.backgroundColor = '#0c1220';
          
          // Adicionar elemento no topo para cobrir qualquer gap
          if (!section.querySelector('.section-top-fix')) {
            const topFix = document.createElement('div');
            topFix.className = 'section-top-fix';
            topFix.style.position = 'absolute';
            topFix.style.top = '-2px';
            topFix.style.left = '0';
            topFix.style.right = '0';
            topFix.style.height = '4px';
            topFix.style.backgroundColor = '#0c1220';
            topFix.style.zIndex = '5';
            section.insertBefore(topFix, section.firstChild);
          }
          
          // Adicionar elemento na base para se conectar com a próxima seção
          if (!section.querySelector('.section-bottom-fix')) {
            const bottomFix = document.createElement('div');
            bottomFix.className = 'section-bottom-fix';
            bottomFix.style.position = 'absolute';
            bottomFix.style.bottom = '-2px';
            bottomFix.style.left = '0';
            bottomFix.style.right = '0';
            bottomFix.style.height = '4px';
            bottomFix.style.backgroundColor = '#0c1220';
            bottomFix.style.zIndex = '5';
            section.appendChild(bottomFix);
          }
          
          // Reduzir padding vertical da seção
          section.style.paddingTop = '1.5rem';
          section.style.paddingBottom = '1.5rem';
        }
      }
    };
    
    // Executar as funções
    checkMobile();
    fixMobileGaps();
    optimizeMobileLayout();
    
    // Event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', fixMobileGaps);
    window.addEventListener('resize', optimizeMobileLayout);
    
    // Garantir que as otimizações sejam aplicadas após a renderização completa
    setTimeout(optimizeMobileLayout, 100);
    setTimeout(optimizeMobileLayout, 500); // Nova checagem após 500ms
    setTimeout(fixMobileGaps, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', fixMobileGaps);
      window.removeEventListener('resize', optimizeMobileLayout);
    };
  }, []);

  // Historical Mentors Data
  const historicalMentors = [
    {
      name: "Sócrates",
      title: "O Poder do Autoconhecimento",
      description: "O método socrático ajudava seus discípulos a encontrarem suas próprias respostas por meio de reflexões e perguntas. Esse mesmo princípio é usado no Método ATO para você descobrir seu diferencial como mentor.",
      icon: <BookOpen className="text-white" size={isMobile ? 12 : 20} />
    },
    {
      name: "Dale Carnegie",
      title: "A Transformação do Conhecimento em Método",
      description: "Carnegie estruturou um método baseado na sua experiência, ensinando milhões de pessoas a influenciarem e se comunicarem melhor. No Método ATO, você aprenderá a transformar seu conhecimento em um método replicável.",
      icon: <Users className="text-white" size={isMobile ? 12 : 20} />
    },
    {
      name: "Napoleon Hill",
      title: "A Escala do Impacto e Monetização",
      description: "Hill estudou os grandes milionários da época e criou um sistema para alcançar sucesso e riqueza. O Método ATO segue essa lógica para que você escale sua mentoria e gere faturamento previsível.",
      icon: <Award className="text-white" size={isMobile ? 12 : 20} />
    }
  ];

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen historical-mentors-section">
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-5 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 sm:mb-6">
            O Que os 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Grandes Mentores
            </span>
            Têm em Comum
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Descubra os princípios que transformaram conhecimento em impacto ao longo da história
          </p>
        </motion.div>
  
        {/* Mentors Grid - Com classe específica para seleção via JS */}
        <div className="mentors-grid-container flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-w-md sm:max-w-6xl mx-auto">
          {historicalMentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.05 * index : 0.1 * index }}
              viewport={{ once: true, margin: "-5%" }}
              className="mentor-card group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="relative z-10">
                <div className="content-container flex items-start gap-2 sm:gap-4 md:gap-6 mb-2">
                  <div className="icon-container p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                    {mentor.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-1 md:mb-3">{mentor.name}</h3>
                    <p className="subtitle text-sm sm:text-base text-[#c8d4e6] font-medium leading-relaxed">
                      {mentor.title}
                    </p>
                  </div>
                </div>
                <p className="description text-xs sm:text-sm text-[#c8d4e6]/80 leading-relaxed">
                  {mentor.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Common Principles - Com classe específica para seleção via JS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mt-5 sm:mt-12 md:mt-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-100 mb-3">
            O que esses gigantes nos ensinam?
          </h3>
          <div className="principles-container flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 max-w-md sm:max-w-3xl mx-auto">
            {[
              "Que o autoconhecimento é a base para o sucesso",
              "Que estruturar conhecimento transforma vidas",
              "Que compartilhar esse conhecimento pode gerar liberdade financeira e impacto real"
            ].map((principle, index) => (
              <div 
                key={index}
                className="principle-item w-full sm:w-auto p-2 sm:p-4 bg-[#16202d] rounded-lg border border-[#e19d24]/20 text-[#c8d4e6] text-xs sm:text-sm text-center"
              >
                {principle}
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mt-4 sm:mt-8"
          >
            <p className="final-text text-sm sm:text-lg text-[#c8d4e6] max-w-2xl mx-auto px-2">
              Agora chegou a sua vez de aplicar esses princípios no Método ATO!
            </p>
            <button className="mt-3 sm:mt-6 px-5 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
              QUERO FAZER PARTE DESSA JORNADA
            </button>
          </motion.div>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .historical-mentors-section {
            margin-top: -1px !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
            background-color: #0c1220 !important;
            position: relative !important;
            z-index: 35 !important;
          }
          
          .historical-mentors-section::before {
            content: '';
            display: block;
            position: absolute;
            top: -2px;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 5;
          }
          
          .historical-mentors-section::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 5;
          }
          
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          .historical-mentors-section .container {
            padding: 0;
          }
          
          /* Otimizações para layout em mobile */
          .mentors-grid-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.8rem !important;
            width: 90% !important;
            max-width: 350px !important;
            margin: 0 auto !important;
          }
          
          .mentor-card {
            width: 100% !important;
            margin-bottom: 0.5rem !important;
            padding: 0.65rem !important;
          }
          
          .mentor-card h3 {
            font-size: 0.9rem !important;
            margin-bottom: 0.1rem !important;
            line-height: 1.2 !important;
          }
          
          .subtitle {
            font-size: 0.75rem !important;
            line-height: 1.2 !important;
          }
          
          .description {
            font-size: 0.7rem !important;
            line-height: 1.2 !important;
            margin-top: 0.25rem !important;
          }
          
          .icon-container {
            padding: 0.3rem !important;
          }
          
          .icon-container svg {
            width: 12px !important;
            height: 12px !important;
          }
          
          .content-container {
            gap: 0.25rem !important;
          }
          
          /* Otimizações para a seção de princípios */
          .principles-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
            width: 90% !important;
            max-width: 350px !important;
            margin: 0 auto !important;
          }
          
          .principle-item {
            width: 100% !important;
            margin-bottom: 0.25rem !important;
            padding: 0.5rem !important;
            font-size: 0.7rem !important;
          }
          
          /* Otimizações para títulos e botão */
          .historical-mentors-section h2 {
            font-size: 1.4rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
          }
          
          .historical-mentors-section > .container > div > p {
            font-size: 0.8rem !important;
            margin-bottom: 1rem !important;
          }
          
          .historical-mentors-section h3 {
            font-size: 1.1rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .final-text {
            font-size: 0.8rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          button {
            font-size: 0.8rem !important;
            padding: 0.5rem 1rem !important;
          }
        }

        /* Ajustes para dispositivos muito pequenos */
        @media (max-width: 350px) {
          .mentors-grid-container, .principles-container {
            width: 95% !important;
          }
          
          .mentor-card {
            padding: 0.5rem !important;
          }
          
          .mentor-card h3 {
            font-size: 0.85rem !important;
          }
          
          .subtitle {
            font-size: 0.7rem !important;
          }
          
          .description {
            font-size: 0.65rem !important;
          }
          
          .historical-mentors-section h2 {
            font-size: 1.3rem !important;
          }
          
          .historical-mentors-section h3 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
});

HistoricalMentorsSection.displayName = 'HistoricalMentorsSection';

export default HistoricalMentorsSection;