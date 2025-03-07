import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AudienceSection = ({ deviceType = 'desktop', id }) => {
  // Verificações simplificadas de tipo de dispositivo
  const isMobile = ['mobile', 'small'].includes(deviceType);
  const isTablet = ['tablet', 'ipad-pro', 'ipad-air', 'ipad-mini', 'surface', 'foldable'].includes(deviceType);
  
  // Dados da seção
  const targetAudience = [
    {
      title: "Profissionais com Experiência",
      description: "Que querem utilizar sua expertise para ensinar e impactar vidas"
    },
    {
      title: "Empreendedores Visionários",
      description: "Que desejam transformar seus negócios em uma mentoria estruturada"
    },
    {
      title: "Educadores Natos",
      description: "Que já compartilham conhecimento mas querem monetizar de forma estratégica"
    },
    {
      title: "Agentes de Transformação",
      description: "Que sentem o chamado para ajudar pessoas usando suas experiências pessoais"
    }
  ];

  return (
    <section 
      id={id}
      className={`relative w-full py-5 ${isTablet ? 'py-10' : 'sm:py-16 md:py-20 lg:py-28'} bg-[#0c1220] overflow-hidden flex items-center justify-center ${
        isMobile ? 'min-h-auto' : 'min-h-[auto] sm:min-h-[90vh] md:min-h-screen'
      } audience-section`}
    >
      {/* Conteúdo principal */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className={`text-center mb-4 ${isTablet ? 'mb-8' : 'sm:mb-12 md:mb-16'}`}
        >
          <h2 className={`${
            isMobile ? 'text-xl' :
            isTablet ? 'text-3xl' :
            'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
          } font-bold text-gray-100 mb-3 sm:mb-6`}>
            Para Quem é a
            <span className={`${isMobile ? 'inline-mobile ml-2' : 'sm:block sm:mt-2'} text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]`}>
              Formação Método ATO?
            </span>
          </h2>
          <p className={`${
            isMobile ? 'text-sm' :
            isTablet ? 'text-lg' :
            'text-base sm:text-lg md:text-xl'
          } text-[#c8d4e6] max-w-2xl mx-auto px-2`}>
            Descubra se você se encaixa no perfil dos profissionais que transformamos em mentores de elite
          </p>
        </motion.div>
  
        {/* Grid de benefícios/perfis */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'sm:grid-cols-2 gap-3 sm:gap-5 md:gap-8'} max-w-6xl mx-auto mobile-card-grid`}>
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.05 * index : 0.1 * index }}
              viewport={{ once: true, margin: "-5%" }}
              className="group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all mobile-card"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className={`p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0 ${isMobile ? 'p-2' : ''}`}>
                  <ArrowRight className="text-white" size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h3 className={`${
                    isMobile ? 'text-base mb-1' :
                    isTablet ? 'text-xl mb-2' :
                    'text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-2 md:mb-3'
                  }`}>{item.title}</h3>
                  <p className={`${
                    isMobile ? 'text-xs' :
                    isTablet ? 'text-base' :
                    'text-sm sm:text-base'
                  } text-[#c8d4e6] leading-relaxed`}>{item.description}</p>
                </div>
              </div>
              
              {/* Efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Estilos específicos para dispositivos móveis */}
      {isMobile && (
        <style jsx>{`
          .audience-section {
            margin-top: 0;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            z-index: 40;
            min-height: auto !important;
            position: relative;
          }
          
          .audience-section:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(to bottom, rgba(12, 18, 32, 0.98), transparent);
            z-index: 5;
          }
          
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          .mobile-card-grid {
            gap: 0.75rem !important;
            max-width: 90% !important;
            margin: 0 auto !important;
          }
          
          .mobile-card {
            padding: 0.75rem !important;
          }
          
          .mobile-card h3 {
            font-size: 0.95rem !important;
            margin-bottom: 0.25rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card p {
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card .p-2 {
            padding: 0.4rem !important;
          }
          
          .mobile-card .p-2 svg {
            width: 14px !important;
            height: 14px !important;
          }
          
          .mobile-card .flex.items-start {
            gap: 0.5rem !important;
          }
        `}</style>
      )}
      
      {/* Estilos específicos para tablets */}
      {isTablet && (
        <style jsx>{`
          .audience-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .mobile-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
            max-width: 90% !important;
          }
          
          .mobile-card {
            padding: 1.25rem !important;
          }
          
          .mobile-card h3 {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .mobile-card p {
            font-size: 0.9rem !important;
          }
        `}</style>
      )}
    </section>
  );
};

export default AudienceSection;