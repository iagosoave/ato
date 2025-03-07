import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';

const MethodJourneySection = forwardRef(({ deviceType = 'desktop' }, ref) => {
  // State para detecção de mobile
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 375);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Fix para gaps entre seções
    const fixSectionGaps = () => {
      if (window.innerWidth < 768) {
        const section = document.querySelector('.method-journey-section');
        if (section) {
          // Configurações de posicionamento
          section.style.position = 'relative';
          section.style.zIndex = '40';
          section.style.backgroundColor = '#0c1220';
          section.style.marginTop = '-1px';
          section.style.marginBottom = '-1px';
          
          // Adicionar elementos para evitar gaps
          if (!section.querySelector('.section-top-fix')) {
            const topFix = document.createElement('div');
            topFix.className = 'section-top-fix';
            topFix.style.position = 'absolute';
            topFix.style.top = '-2px';
            topFix.style.left = '0';
            topFix.style.width = '100%';
            topFix.style.height = '4px';
            topFix.style.backgroundColor = '#0c1220';
            topFix.style.zIndex = '5';
            section.appendChild(topFix);
          }
          
          if (!section.querySelector('.section-bottom-fix')) {
            const bottomFix = document.createElement('div');
            bottomFix.className = 'section-bottom-fix';
            bottomFix.style.position = 'absolute';
            bottomFix.style.bottom = '-2px';
            bottomFix.style.left = '0';
            bottomFix.style.width = '100%';
            bottomFix.style.height = '4px';
            bottomFix.style.backgroundColor = '#0c1220';
            bottomFix.style.zIndex = '5';
            section.appendChild(bottomFix);
          }
        }
      }
    };
    
    fixSectionGaps();
    setTimeout(fixSectionGaps, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Dados da jornada - otimizados
  const journeyDays = [
    {
      day: 1,
      title: "AUTOCONHECIMENTO",
      subtitle: "Despertando seu mentor interior",
      icon: <CheckCircle className="text-white" size={isMobile ? 12 : 16} />,
      highlights: [
        "Mapa da Essência – Exercício para definir seus pontos fortes",
        "Ressignificação de Experiências",
        "Arquetipagem do Mentor",
        "Ativação do Mentor Interior"
      ]
    },
    {
      day: 2,
      title: "TRANSFORMAÇÃO",
      subtitle: "Estruture seu método e posicionamento",
      icon: <Star className="text-white" size={isMobile ? 12 : 16} />,
      highlights: [
        "Framework do Método ATO",
        "Construção da Jornada do Mentorando",
        "Desenvolvimento do Produto de Mentoria",
        "Posicionamento Estratégico e Marca Pessoal"
      ]
    },
    {
      day: 3,
      title: "ORIENTAÇÃO",
      subtitle: "Monetize sua mentoria e escale seu impacto",
      icon: <TrendingUp className="text-white" size={isMobile ? 12 : 16} />,
      highlights: [
        "Precificação e Modelos de Monetização",
        "Construção da Oferta Irresistível",
        "Estratégias de Captação de Clientes",
        "Plano de Escala e Posicionamento Avançado"
      ]
    }
  ];

  // Animações otimizadas para mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 }
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen method-journey-section"
    >
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-1 sm:mb-3">
            A Jornada do
          </h2>
          <div className="mb-2 sm:mb-6 py-1">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              Método ATO
            </span>
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Três dias de transformação para converter seu conhecimento em uma mentoria de impacto
          </p>
        </motion.div>
  
        {/* Journey Days - Layout otimizado para mobile */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-w-md sm:max-w-6xl mx-auto">
          {journeyDays.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              variants={fadeInUp}
              transition={{ delay: isMobile ? 0.05 * index : 0.1 * index }}
              className="journey-day-card group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              
              {/* Cabeçalho do Card - Layout otimizado para mobile */}
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="p-1.5 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-100 mb-0 sm:mb-1">
                    Dia {item.day}
                  </h3>
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm md:text-base text-[#e19d24] font-bold uppercase tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-2xs sm:text-xs text-[#c8d4e6] font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Lista de destaques - Layout compacto para mobile */}
              <ul className="space-y-0.5 sm:space-y-2 mt-2 sm:mt-0">
                {item.highlights.map((highlight, hlIndex) => (
                  <li 
                    key={hlIndex} 
                    className="text-2xs sm:text-xs md:text-sm text-[#c8d4e6]/80 flex items-start gap-1 sm:gap-2"
                  >
                    <CheckCircle className="text-[#e19d24] flex-shrink-0 mt-0.5" size={isMobile ? 10 : 14} />
                    <span className="leading-tight">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Estilos responsivos otimizados */}
      <style jsx>{`
        /* Definição para tamanho de fonte extra pequeno */
        .text-2xs {
          font-size: 0.65rem;
        }
        
        @media (max-width: 768px) {
          /* Ajustes gerais para a seção */
          .method-journey-section {
            padding: 1.5rem 0 !important;
            margin-top: -1px !important;
            margin-bottom: -1px !important;
          }
          
          /* Otimização de título no mobile */
          h2 {
            font-size: 1.4rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.25rem !important;
          }
          
          /* Estilo especial para o "Método ATO" */
          h2 + div span {
            font-size: 1.9rem !important;
            font-weight: 800 !important;
            letter-spacing: -0.5px;
          }
          
          p {
            font-size: 0.8rem !important;
            margin-top: 0.75rem !important;
          }
          
          /* Redimensionamento e centralização dos cards */
          .journey-day-card {
            width: 90% !important;
            max-width: 320px !important;
            margin: 0 auto 0.75rem auto !important;
            padding: 0.75rem !important;
            text-align: center !important;
          }
          
          /* Ajuste para o layout de highlights */
          .journey-day-card ul {
            text-align: left !important;
            margin: 0.5rem auto 0 auto !important;
            max-width: 280px !important;
          }
          
          .journey-day-card ul li {
            margin-bottom: 0.25rem !important;
          }
        }
        
        /* Ajustes específicos para dispositivos muito pequenos */
        @media (max-width: 375px) {
          .method-journey-section {
            padding: 1.25rem 0 !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
          }
          
          /* Mesmo em telas muito pequenas, mantém "Método ATO" grande */
          h2 + div span {
            font-size: 1.7rem !important;
          }
          
          p {
            font-size: 0.7rem !important;
          }
          
          .journey-day-card {
            padding: 0.6rem !important;
            max-width: 280px !important;
          }
          
          .journey-day-card h3 {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
});

MethodJourneySection.displayName = 'MethodJourneySection';

export default MethodJourneySection;