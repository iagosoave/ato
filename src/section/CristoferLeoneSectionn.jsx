import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Globe, Book, Target, TrendingUp } from 'lucide-react';
import cristofer from './cristofer-about.jpeg';

const CristoferLeoneSection = forwardRef(({ profileImage = cristofer }, ref) => {
  // State para detecção de dispositivos
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
        const section = document.querySelector('.cristofer-section');
        if (section) {
          section.style.position = 'relative';
          section.style.zIndex = '20';
          section.style.backgroundColor = '#0c1220';
          section.style.marginTop = '-1px';
          section.style.marginBottom = '-1px';
          
          if (!section.querySelector('.section-fix')) {
            const fix = document.createElement('div');
            fix.className = 'section-fix';
            fix.style.position = 'absolute';
            fix.style.top = '-2px';
            fix.style.left = '0';
            fix.style.width = '100%';
            fix.style.height = '4px';
            fix.style.backgroundColor = '#0c1220';
            fix.style.zIndex = '5';
            section.appendChild(fix.cloneNode(true));
            
            fix.style.top = 'auto';
            fix.style.bottom = '-2px';
            section.appendChild(fix);
          }
        }
      }
    };
    
    fixSectionGaps();
    setTimeout(fixSectionGaps, 100);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detalhes de Cristofer
  const cristoferDetails = [
    {
      icon: <Globe className="text-[#e19d24]" size={isMobile ? 14 : 28} />,
      title: "Formação Acadêmica",
      description: [
        "Pós-graduado em Liderança",
        "Especialista em Desenvolvimento Humano",
        "Certificações Internacionais"
      ]
    },
    {
      icon: <Target className="text-[#e19d24]" size={isMobile ? 14 : 28} />,
      title: "Método ATO",
      description: [
        "Metodologia Exclusiva",
        "Transformação Pessoal e Profissional",
        "Resultados Comprovados"
      ]
    },
    {
      icon: <TrendingUp className="text-[#e19d24]" size={isMobile ? 14 : 28} />,
      title: "Impacto",
      description: [
        "+500 Pessoas Mentoriadas",
        "Desenvolvimento de Líderes",
        "Consultoria em Alta Performance"
      ]
    }
  ];

  // Animações ultra-otimizadas para performance
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      } 
    }
  };

  // Componente de biografia minimalista
  const CristoferBioMinimalista = () => {
    return (
      <div className="w-full border-l-2 border-[#e19d24] pl-4 md:pl-6">
        <p className="text-sm md:text-xl lg:text-2xl text-white leading-relaxed">
          <span className="text-[#e19d24] font-medium">Com mais de duas décadas de experiência</span>, 
          Cristofer Leone é reconhecido como um dos 
          <span className="text-[#e19d24] font-medium"> principais mentores de desenvolvimento humano e liderança </span> 
          no Brasil.
        </p>
        
        <p className="mt-3 md:mt-4 text-sm md:text-xl text-[#c8d4e6] leading-relaxed">
          Sua metodologia única, o <span className="text-[#e19d24] font-medium">Método ATO</span>, 
          tem transformado a vida de 
          <span className="ml-1 text-white font-bold text-base md:text-2xl"> +500 </span> 
          profissionais e empreendedores.
        </p>
      </div>
    );
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full py-4 md:py-16 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] md:min-h-screen cristofer-section"
    >
      <div className="container mx-auto px-2 md:px-4 z-10 relative max-w-6xl">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">Quem é</h2>
          <div className="mb-2 md:mb-4">
            <span className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              Cristofer Leone
            </span>
          </div>
          <p className="text-xs md:text-base text-[#c8d4e6] max-w-xl mx-auto">
            Mentor de Alta Performance e Fundador do Método ATO
          </p>
        </motion.div>

        {/* Layout otimizado */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Imagem de perfil */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            <img 
              src={profileImage}
              alt="Cristofer Leone" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-base md:text-2xl font-bold">Cristofer Leone</h3>
              <p className="text-2xs md:text-base opacity-80">Mentor de Mentores</p>
            </div>
          </motion.div>

          {/* Detalhes do perfil */}
          <div className="space-y-6 md:space-y-8">
            {/* Bio minimalista - SUBSTITUÍDA PELO NOVO COMPONENTE */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <CristoferBioMinimalista />
            </motion.div>

            {/* Grid de detalhes */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {cristoferDetails.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: isMobile ? 0.05 * index : 0.1 * index }}
                  className="bg-[#16202d] p-2 md:p-4 rounded-xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    {detail.icon}
                    <h4 className="text-3xs md:text-base font-semibold text-gray-100 group-hover:text-[#e19d24] transition-colors">
                      {detail.title}
                    </h4>
                  </div>
                  <ul className="text-3xs md:text-xs text-[#c8d4e6] space-y-1 text-center md:text-left">
                    {detail.description.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="flex items-center gap-1.5 justify-center md:justify-start"
                      >
                        <span className="w-1.5 h-1.5 bg-[#e19d24] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
  
      {/* Estilos ultra-otimizados */}
      <style jsx>{`
        /* Tamanhos de fonte extras */
        .text-2xs { font-size: 0.65rem; }
        .text-3xs { font-size: 0.55rem; }
        
        @media (max-width: 768px) {
          .cristofer-section {
            padding: 1rem 0 !important;
            margin-top: -1px !important;
            margin-bottom: -1px !important;
          }
          
          h2 {
            font-size: 2rem !important; /* Increased mobile font size for "Quem é" */
            margin-bottom: 0.5rem !important;
          }
          
          h2 + div span {
            font-size: 2.5rem !important; /* Increased mobile font size for name */
            letter-spacing: -0.5px;
          }
          
          p { 
            font-size: 0.7rem !important; 
            line-height: 1.3 !important;
            margin-top: 0 !important;
          }
          
          /* Ultra otimização para mobile */
          .container { 
            padding: 0 0.5rem !important; 
            width: 98% !important;
          }
          
          /* Ajustes de dimensões e espaços */
          .mb-3 { margin-bottom: 0.5rem !important; }
          .rounded-xl { border-radius: 0.5rem !important; }
          
          /* Otimização para a grid de credenciais */
          .grid { gap: 0.4rem !important; }
          .bg-[#16202d] {
            padding: 0.4rem !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          /* Ajustes específicos para textos */
          .text-3xs { 
            line-height: 1.1 !important;
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
});

CristoferLeoneSection.displayName = 'CristoferLeoneSection';

export default CristoferLeoneSection;