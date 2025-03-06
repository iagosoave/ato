import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventDetailsSection = forwardRef(({ noBackground = false, venueImage = null, deviceType = 'desktop' }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
  const [sectionReady, setSectionReady] = useState(false);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Função crucial para garantir que a seção respeite seu espaço
    const ensureSectionBoundaries = () => {
      if (window.innerWidth < 768) {
        const section = document.querySelector('.event-details-section');
        if (section) {
          // Forçar contenção da seção
          section.style.position = 'relative';
          section.style.zIndex = '30';
          section.style.backgroundColor = '#0c1220';
          section.style.overflow = 'hidden'; // Impede conteúdo de vazar
          section.style.marginTop = '-1px';
          section.style.paddingTop = '2rem';
          section.style.paddingBottom = '2rem';
          
          // Adicionar barreira no topo para prevenir invasão da seção anterior
          if (!section.querySelector('.section-top-barrier')) {
            const topBarrier = document.createElement('div');
            topBarrier.className = 'section-top-barrier';
            topBarrier.style.position = 'absolute';
            topBarrier.style.top = '0';
            topBarrier.style.left = '0';
            topBarrier.style.width = '100%';
            topBarrier.style.height = '4px';
            topBarrier.style.backgroundColor = '#0c1220';
            topBarrier.style.zIndex = '10';
            section.insertBefore(topBarrier, section.firstChild);
          }
          
          // Adicionar barreira na base para prevenir invasão da próxima seção
          if (!section.querySelector('.section-bottom-barrier')) {
            const bottomBarrier = document.createElement('div');
            bottomBarrier.className = 'section-bottom-barrier';
            bottomBarrier.style.position = 'absolute';
            bottomBarrier.style.bottom = '0';
            bottomBarrier.style.left = '0';
            bottomBarrier.style.width = '100%';
            bottomBarrier.style.height = '4px';
            bottomBarrier.style.backgroundColor = '#0c1220';
            bottomBarrier.style.zIndex = '10';
            section.appendChild(bottomBarrier);
          }
          
          // Otimizar layout para dispositivos móveis
          const grid = section.querySelector('.details-grid');
          if (grid) {
            grid.style.display = 'flex';
            grid.style.flexDirection = 'column';
            grid.style.width = '90%';
            grid.style.maxWidth = '350px';
            grid.style.margin = '0 auto';
            grid.style.gap = '1rem';
          }
          
          // Otimizar a imagem
          const imageContainer = section.querySelector('.venue-image');
          if (imageContainer) {
            imageContainer.style.width = '100%';
            imageContainer.style.height = 'auto';
            imageContainer.style.maxHeight = '220px';
            imageContainer.style.marginBottom = '1rem';
          }
          
          // Otimizar os cards de detalhes
          const detailCards = section.querySelectorAll('.detail-card');
          detailCards.forEach(card => {
            card.style.padding = '0.65rem';
            card.style.marginBottom = '0.5rem';
            
            // Reduzir textos
            const title = card.querySelector('h3');
            if (title) title.style.fontSize = '0.9rem';
            
            const desc = card.querySelector('p');
            if (desc) desc.style.fontSize = '0.75rem';
            
            // Reduzir ícones
            const icon = card.querySelector('svg');
            if (icon) {
              icon.style.width = '16px';
              icon.style.height = '16px';
            }
          });
          
          // Otimizar o bloco de preparação
          const prepSection = section.querySelector('.prep-section');
          if (prepSection) {
            prepSection.style.padding = '0.75rem';
            
            const title = prepSection.querySelector('h3');
            if (title) title.style.fontSize = '1rem';
            
            const desc = prepSection.querySelector('p');
            if (desc) desc.style.fontSize = '0.75rem';
            
            const button = prepSection.querySelector('button');
            if (button) {
              button.style.fontSize = '0.75rem';
              button.style.padding = '0.5rem 1rem';
            }
          }
          
          // Otimizar títulos da seção
          const sectionTitle = section.querySelector('h2');
          if (sectionTitle) {
            sectionTitle.style.fontSize = '1.4rem';
            sectionTitle.style.lineHeight = '1.2';
          }
          
          const sectionSubtitle = section.querySelector('h2 + p');
          if (sectionSubtitle) {
            sectionSubtitle.style.fontSize = '0.8rem';
          }
        }
      }
    };
    
    // Executar função
    checkMobile();
    ensureSectionBoundaries();
    
    // Adicionar event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', ensureSectionBoundaries);
    window.addEventListener('orientationchange', () => {
      setTimeout(checkMobile, 100);
      setTimeout(ensureSectionBoundaries, 200);
    });
    
    // Aplicar após tempo para garantir carregamento completo
    setTimeout(ensureSectionBoundaries, 100);
    setTimeout(ensureSectionBoundaries, 500);
    
    setSectionReady(true);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', ensureSectionBoundaries);
    };
  }, []);

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen event-details-section">
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
            Local e 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Detalhes do Evento
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Todas as informações essenciais para sua participação no Método ATO
          </p>
        </motion.div>
  
        <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-md sm:max-w-6xl mx-auto items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="venue-image w-full rounded-xl overflow-hidden shadow-lg"
          >
            {venueImage ? (
              <img 
                src={venueImage} 
                alt="Espaço Mind" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-[#16202d] flex items-center justify-center text-[#c8d4e6]">
                Imagem do Espaço Mind em breve
              </div>
            )}
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="detail-cards-container space-y-4"
          >
            {[
              {
                icon: <Calendar className="text-[#e19d24]" size={isMobile ? 16 : 24} />,
                title: "Datas",
                description: "25, 26 e 27 de abril de 2024"
              },
              {
                icon: <Clock className="text-[#e19d24]" size={isMobile ? 16 : 24} />,
                title: "Horário",
                description: "08:00 às 18:00 (horário de Brasília)"
              },
              {
                icon: <MapPin className="text-[#e19d24]" size={isMobile ? 16 : 24} />,
                title: "Endereço",
                description: "Espaço Mind - [Endereço completo a ser inserido]"
              }
            ].map((detail, index) => (
              <div 
                key={index} 
                className="detail-card flex items-center space-x-4 p-4 bg-[#16202d] rounded-xl"
              >
                <div className="p-3 bg-[#16202d] rounded-full border border-[#e19d24]/20">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-[#c8d4e6]">
                    {detail.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mt-6 sm:mt-12 md:mt-16 max-w-md sm:max-w-2xl mx-auto"
        >
          <div className="prep-section bg-[#16202d] p-6 sm:p-8 rounded-xl border border-[#e19d24]/20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-4">
              Prepare-se para a Transformação
            </h3>
            <p className="text-sm sm:text-base text-[#c8d4e6] mb-6">
              Recomendamos chegar com 30 minutos de antecedência. Traga um notebook, 
              material para anotações e muita energia para transformar sua jornada como mentor.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
              QUERO PARTICIPAR DO EVENTO
            </button>
          </div>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .event-details-section {
            margin-top: -1px !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            background-color: #0c1220 !important;
            position: relative !important;
            z-index: 30 !important;
            overflow: hidden !important; /* Impede escape de conteúdo */
          }
          
          /* Barreiras para conter a seção */
          .event-details-section::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 10;
          }
          
          .event-details-section::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 10;
          }
          
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          /* Otimização para layout em coluna */
          .details-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 90% !important;
            max-width: 350px !important;
            margin: 0 auto !important;
            gap: 1rem !important;
          }
          
          /* Imagem otimizada */
          .venue-image {
            width: 100% !important;
            height: auto !important;
            max-height: 220px !important;
            margin-bottom: 1rem !important;
          }
          
          /* Cards de detalhes otimizados */
          .detail-card {
            padding: 0.65rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .detail-card h3 {
            font-size: 0.9rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          .detail-card p {
            font-size: 0.75rem !important;
          }
          
          .detail-card svg {
            width: 16px !important;
            height: 16px !important;
          }
          
          /* Bloco de preparação otimizado */
          .prep-section {
            padding: 0.75rem !important;
          }
          
          .prep-section h3 {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .prep-section p {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .prep-section button {
            font-size: 0.75rem !important;
            padding: 0.5rem 1rem !important;
          }
          
          /* Títulos da seção otimizados */
          .event-details-section h2 {
            font-size: 1.4rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
          }
          
          .event-details-section h2 + p {
            font-size: 0.8rem !important;
            margin-bottom: 1rem !important;
          }
        }
        
        /* Ajustes ainda mais específicos para telas muito pequenas */
        @media (max-width: 350px) {
          .details-grid {
            width: 95% !important;
          }
          
          .venue-image {
            max-height: 180px !important;
          }
          
          .detail-card {
            padding: 0.5rem !important;
          }
          
          .detail-card h3 {
            font-size: 0.85rem !important;
          }
          
          .detail-card p {
            font-size: 0.7rem !important;
          }
          
          .prep-section h3 {
            font-size: 0.9rem !important;
          }
          
          .prep-section p {
            font-size: 0.7rem !important;
          }
          
          .prep-section button {
            font-size: 0.7rem !important;
            padding: 0.4rem 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
});

EventDetailsSection.displayName = 'EventDetailsSection';

export default EventDetailsSection;