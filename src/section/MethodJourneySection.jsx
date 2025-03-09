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
      
      // Fix para tamanho igual dos cards apenas no mobile
      if (window.innerWidth < 768) {
        setTimeout(() => {
          const cards = document.querySelectorAll('.journey-day-card');
          if (cards.length > 0) {
            // Encontrar a altura máxima
            let maxHeight = 0;
            cards.forEach(card => {
              card.style.height = 'auto'; // Reset para medir a altura natural
              const height = card.scrollHeight;
              if (height > maxHeight) maxHeight = height;
            });
            
            // Aplicar a mesma altura a todos os cards
            cards.forEach(card => {
              card.style.height = `${maxHeight}px`;
            });
          }
        }, 300);
      }
    };
    
    fixSectionGaps();
    setTimeout(fixSectionGaps, 100);
    window.addEventListener('resize', fixSectionGaps);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', fixSectionGaps);
    };
  }, []);

  // Dados da jornada - otimizados
  const journeyDays = [
    {
      day: 1,
      title: "AUTOCONHECIMENTO",
      subtitle: "Despertando seu mentor interior",
      icon: <CheckCircle className="text-white" size={isMobile ? (isSmallMobile ? 12 : 14) : 16} />,
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
      icon: <Star className="text-white" size={isMobile ? (isSmallMobile ? 12 : 14) : 16} />,
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
      icon: <TrendingUp className="text-white" size={isMobile ? (isSmallMobile ? 12 : 14) : 16} />,
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
      className="method-journey-section relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen"
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
  
        {/* Journey Days */}
        <div className="journey-cards-container grid grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-w-md sm:max-w-6xl mx-auto">
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
              
              {/* Cabeçalho do Card */}
              <div className="card-header flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <div className="icon-container p-1.5 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="card-title-group text-left">
                  <h3 className="day-title text-base sm:text-xl md:text-2xl font-semibold text-gray-100 mb-0 sm:mb-1">
                    Dia {item.day}
                  </h3>
                  <p className="card-title text-xs sm:text-sm md:text-base text-[#e19d24] font-bold uppercase tracking-wide">
                    {item.title}
                  </p>
                  <p className="card-subtitle text-xs sm:text-xs text-[#c8d4e6] font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Lista de destaques */}
              <ul className="highlight-list space-y-0.5 sm:space-y-2 mt-2 sm:mt-0">
                {item.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex} className="highlight-item text-xs sm:text-xs md:text-sm text-[#c8d4e6]/80 flex items-start gap-1 sm:gap-2">
                    <CheckCircle className="highlight-icon text-[#e19d24] flex-shrink-0 mt-0.5" size={isMobile ? 10 : 14} />
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
    </section>
  );
});

MethodJourneySection.displayName = 'MethodJourneySection';

export default MethodJourneySection;