import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';

const MethodJourneySection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Função que otimiza os cards em dispositivos móveis
    const optimizeMobileLayout = () => {
      if (window.innerWidth < 768) {
        // Seleciona o container dos cards
        const cardContainer = document.querySelector('.journey-days-container');
        if (cardContainer) {
          // Configurar layout vertical com melhor centralização
          cardContainer.style.display = 'flex';
          cardContainer.style.flexDirection = 'column';
          cardContainer.style.gap = '1rem';
          cardContainer.style.width = '90%'; // Reduzir largura para melhor centralização
          cardContainer.style.maxWidth = '400px'; // Limitar largura máxima
          cardContainer.style.margin = '0 auto'; // Centralizar
          
          // Ajustar cada card
          const cards = cardContainer.querySelectorAll('.journey-day-card');
          cards.forEach(card => {
            card.style.width = '100%';
            card.style.marginBottom = '1rem';
            card.style.padding = '0.75rem';
            
            // Reduzir tamanho dos textos
            const title = card.querySelector('h3');
            if (title) title.style.fontSize = '1rem';
            
            const subtitle = card.querySelector('p');
            if (subtitle) subtitle.style.fontSize = '0.8rem';
            
            const items = card.querySelectorAll('li');
            items.forEach(item => {
              item.style.fontSize = '0.75rem';
            });
            
            // Ajustar ícones
            const icons = card.querySelectorAll('svg');
            icons.forEach(icon => {
              icon.style.width = '14px';
              icon.style.height = '14px';
            });
          });
        }
        
        // Também ajustar o título da seção
        const sectionTitle = document.querySelector('.method-journey-section h2');
        if (sectionTitle) {
          sectionTitle.style.fontSize = '1.5rem';
          sectionTitle.style.lineHeight = '1.3';
        }
        
        const sectionSubtitle = document.querySelector('.method-journey-section > .container > div > p');
        if (sectionSubtitle) {
          sectionSubtitle.style.fontSize = '0.9rem';
        }
      }
    };
    
    // Fix para gaps em dispositivos móveis
    const fixMobileGaps = () => {
      if (window.innerWidth < 768) {
        const section = document.querySelector('.method-journey-section');
        if (section) {
          // Posicionar para se sobrepor à seção anterior
          section.style.marginTop = '-1px';
          section.style.position = 'relative';
          section.style.zIndex = '40';
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
        }
      }
    };
    
    // Executar funções
    checkMobile();
    fixMobileGaps();
    optimizeMobileLayout();
    
    // Event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', fixMobileGaps);
    window.addEventListener('resize', optimizeMobileLayout);
    
    // Garantir que as otimizações sejam aplicadas após a renderização completa
    setTimeout(optimizeMobileLayout, 100);
    setTimeout(fixMobileGaps, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', fixMobileGaps);
      window.removeEventListener('resize', optimizeMobileLayout);
    };
  }, []);

  // Journey Days Data
  const journeyDays = [
    {
      day: 1,
      title: "AUTOCONHECIMENTO: DESPERTANDO SEU MENTOR INTERIOR",
      icon: <CheckCircle className="text-white" size={isMobile ? 16 : 20} />,
      highlights: [
        "Mapa da Essência – Exercício para definir seus pontos fortes",
        "Ressignificação de Experiências",
        "Arquetipagem do Mentor",
        "Ativação do Mentor Interior"
      ]
    },
    {
      day: 2,
      title: "TRANSFORMAÇÃO: ESTRUTURE SEU MÉTODO E POSICIONAMENTO",
      icon: <Star className="text-white" size={isMobile ? 16 : 20} />,
      highlights: [
        "Framework do Método ATO",
        "Construção da Jornada do Mentorando",
        "Desenvolvimento do Produto de Mentoria",
        "Posicionamento Estratégico e Marca Pessoal"
      ]
    },
    {
      day: 3,
      title: "ORIENTAÇÃO: MONETIZE SUA MENTORIA E ESCALE SEU IMPACTO",
      icon: <TrendingUp className="text-white" size={isMobile ? 16 : 20} />,
      highlights: [
        "Precificação e Modelos de Monetização",
        "Construção da Oferta Irresistível",
        "Estratégias de Captação de Clientes",
        "Plano de Escala e Posicionamento Avançado"
      ]
    }
  ];

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen method-journey-section">
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 sm:mb-6">
            A Jornada do 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Método ATO
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Três dias de transformação para converter seu conhecimento em uma mentoria de impacto
          </p>
        </motion.div>
  
        {/* Journey Days Container - Class name específica para seleção via JS */}
        <div className="journey-days-container flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-5 md:gap-8 max-w-md sm:max-w-6xl mx-auto">
          {journeyDays.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.05 * index : 0.1 * index }}
              viewport={{ once: true, margin: "-5%" }}
              className="journey-day-card group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-3">
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-1 md:mb-3">
                      Dia {item.day}
                    </h3>
                    <p className="text-sm sm:text-base text-[#c8d4e6] font-medium leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {item.highlights.map((highlight, hlIndex) => (
                    <li 
                      key={hlIndex} 
                      className="text-xs sm:text-sm text-[#c8d4e6]/80 flex items-start gap-2"
                    >
                      <CheckCircle className="text-[#e19d24] flex-shrink-0" size={14} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .method-journey-section {
            margin-top: -1px !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            background-color: #0c1220 !important;
            position: relative !important;
            z-index: 40 !important;
          }
          
          .method-journey-section::before {
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
          
          .method-journey-section::after {
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
          
          .method-journey-section .container {
            padding-top: 0;
          }
          
          /* Otimizações de tamanho e centralização */
          .journey-days-container {
            display: flex !important;
            flex-direction: column !important;
            width: 90% !important;
            max-width: 400px !important;
            margin: 0 auto !important;
            gap: 1rem !important;
          }
          
          .journey-day-card {
            width: 100% !important;
            margin-bottom: 0.75rem !important;
            padding: 0.75rem !important;
          }
          
          .journey-day-card h3 {
            font-size: 1rem !important;
            margin-bottom: 0.25rem !important;
            line-height: 1.3 !important;
          }
          
          .journey-day-card p {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }
          
          .journey-day-card ul {
            margin-top: 0.5rem !important;
          }
          
          .journey-day-card ul li {
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.25rem !important;
          }
          
          .journey-day-card .p-2 {
            padding: 0.35rem !important;
          }
          
          .journey-day-card .p-2 svg {
            width: 14px !important;
            height: 14px !important;
          }
          
          .journey-day-card .flex.items-start {
            gap: 0.5rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 992px) {
          .method-journey-section {
            margin-top: -1px;
          }
        }
        
        /* Ajustes para dispositivos muito pequenos */
        @media (max-width: 350px) {
          .method-journey-section .container {
            padding: 0 !important;
          }
          
          .journey-days-container {
            width: 95% !important;
            padding: 0 !important;
          }
          
          .journey-day-card h3 {
            font-size: 0.9rem !important;
          }
          
          .journey-day-card p {
            font-size: 0.75rem !important;
          }
          
          .journey-day-card ul li {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
});

MethodJourneySection.displayName = 'MethodJourneySection';

export default MethodJourneySection;