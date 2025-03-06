import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';

const MethodJourneySection = forwardRef(({ noBackground = false }, ref) => {
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
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-3 sm:mb-6">
            A Jornada do 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Método ATO
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Três dias de transformação para converter seu conhecimento em uma mentoria de impacto
          </p>
        </motion.div>
  
        {/* Journey Days Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-w-6xl mx-auto mobile-card-grid">
          {journeyDays.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.05 * index : 0.1 * index }}
              viewport={{ once: true, margin: "-5%" }}
              className="group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all mobile-card"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4">
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-2 md:mb-3">
                      Dia {item.day}
                    </h3>
                    <p className="text-sm sm:text-base text-[#c8d4e6] font-medium leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
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
            margin-top: 0;
            padding-top: 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .method-journey-section:before {
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
          
          .method-journey-section .container {
            padding-top: 2rem;
          }
          
          .method-journey-section h2 {
            line-height: 1.3;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .method-journey-section p {
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
          
          .method-journey-section .mb-8 {
            margin-bottom: 1rem !important;
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
          
          .method-journey-section:after {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #0c1220;
            z-index: 15;
          }
        }

        @media (min-width: 768px) and (max-width: 992px) {
          .method-journey-section {
            margin-top: -1px;
          }
        }
        
        @media (max-width: 375px) {
          .method-journey-section .container {
            padding-top: 1.5rem;
          }
          
          .mobile-card-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            max-width: 85% !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) and (min-height: 1000px) {
          .method-journey-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .mobile-card-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
            max-width: 90% !important;
          }
          
          .mobile-card {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
});

MethodJourneySection.displayName = 'MethodJourneySection';

export default MethodJourneySection;