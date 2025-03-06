import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventLogisticsSection = forwardRef(({ noBackground = false, venueImage = null }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setScreenWidth(window.innerWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen event-logistics-section">
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-3 sm:mb-6">
            Local e 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Detalhes do Evento
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Todas as informações essenciais para sua participação no Método ATO
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full rounded-xl overflow-hidden shadow-lg"
          >
            {venueImage ? (
              <img 
                src={venueImage} 
                alt="Espaço Mind" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-64 sm:h-80 md:h-96 bg-[#16202d] flex items-center justify-center text-[#c8d4e6]">
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
            className="space-y-6"
          >
            {[
              {
                icon: <Calendar className="text-[#e19d24]" size={24} />,
                title: "Datas",
                description: "25, 26 e 27 de abril de 2024"
              },
              {
                icon: <Clock className="text-[#e19d24]" size={24} />,
                title: "Horário",
                description: "08:00 às 18:00 (horário de Brasília)"
              },
              {
                icon: <MapPin className="text-[#e19d24]" size={24} />,
                title: "Endereço",
                description: "Espaço Mind - [Endereço completo a ser inserido]"
              }
            ].map((detail, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 bg-[#16202d] rounded-xl"
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
          className="text-center mt-8 sm:mt-12 md:mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-[#16202d] p-6 sm:p-8 rounded-xl border border-[#e19d24]/20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-4">
              Prepare-se para a Transformação
            </h3>
            <p className="text-sm sm:text-base text-[#c8d4e6] mb-6">
              Recomendamos chegar com 30 minutos de antecedência. Traga um notebook, 
              material para anotações e muita energia para transformar sua jornada como mentor.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg hover:scale-105 transition-transform">
              QUERO PARTICIPAR DO EVENTO
            </button>
          </div>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .event-logistics-section {
            margin-top: 0;
            padding-top: 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .event-logistics-section:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(to bottom, rgba(15, 20, 30, 0.98), transparent);
            z-index: 5;
          }
          
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          .event-logistics-section .container {
            padding-top: 2rem;
          }
          
          .event-logistics-section h2 {
            line-height: 1.3;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .event-logistics-section p {
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
          
          .event-logistics-section .grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 768px) and (max-width: 992px) {
          .event-logistics-section {
            margin-top: -1px;
          }
        }
      `}</style>
    </section>
  );
});

EventLogisticsSection.displayName = 'EventLogisticsSection';

export default EventLogisticsSection;