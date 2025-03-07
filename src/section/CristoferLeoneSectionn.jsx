import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Globe, Book } from 'lucide-react';

const CristoferLeoneSection = forwardRef(({ profileImage = null }, ref) => {
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

  // Credenciais otimizadas - textos mais curtos para mobile
  const credentials = [
    {
      icon: <Globe className="text-[#e19d24]" size={isMobile ? 12 : 20} />,
      title: "Formações",
      description: [
        "Imperial College London",
        "Harvard & UC Berkeley"
      ]
    },
    {
      icon: <Book className="text-[#e19d24]" size={isMobile ? 12 : 20} />,
      title: "Certificações",
      description: [
        "Análise DISC",
        "Terapia Cognitiva",
        "Liderança - Harvard"
      ]
    },
    {
      icon: <Star className="text-[#e19d24]" size={isMobile ? 12 : 20} />,
      title: "Experiência",
      description: [
        "+20 anos em negócios",
        "Múltiplos empreendimentos",
        "Mentor de +500 pessoas"
      ]
    }
  ];

  // Animações ultra-otimizadas para performance
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: isMobile ? 0.2 : 0.4 } }
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full py-4 sm:py-16 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-screen cristofer-section"
    >
      <div className="container mx-auto px-2 sm:px-4 z-10 relative">
        {/* Título compacto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-3 sm:mb-12"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-gray-100 mb-0 leading-tight">
            Quem é
          </h2>
          <div className="mb-1 sm:mb-6">
            <span className="text-2xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              Cristofer Leone
            </span>
          </div>
          <p className="text-xs sm:text-lg text-[#c8d4e6] max-w-xl mx-auto">
            O mentor que transforma conhecimento em impacto
          </p>
        </motion.div>

        {/* Layout otimizado */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-8 max-w-6xl mx-auto">
          {/* Imagem de perfil */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full rounded-xl overflow-hidden shadow-lg relative mb-3 md:mb-0"
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Cristofer Leone" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-40 sm:h-80 bg-[#16202d] flex items-center justify-center text-[#c8d4e6]">
                Imagem de Cristofer Leone
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="text-base sm:text-2xl font-bold">Cristofer Leone</h3>
              <p className="text-2xs sm:text-base">Especialista em Desenvolvimento Humano</p>
            </div>
          </motion.div>

          {/* Detalhes do perfil */}
          <div className="space-y-3 sm:space-y-6">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-2xs sm:text-base text-[#c8d4e6] leading-relaxed text-center md:text-left"
            >
              Especialista em desenvolvimento humano, gestão de equipes de alta performance e neurociência aplicada à aprendizagem. Com trajetória marcada por transformações e múltiplos negócios, estrutura conhecimento em modelos escaláveis.
            </motion.p>

            {/* Grid de credenciais ultra-compacto */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {credentials.map((credential, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: isMobile ? 0.05 * index : 0.1 * index }}
                  className="bg-[#16202d] p-1.5 sm:p-4 rounded-lg border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
                >
                  <div className="flex items-center gap-1 mb-1 justify-center md:justify-start">
                    {credential.icon}
                    <h4 className="text-3xs sm:text-base font-semibold text-gray-100 whitespace-nowrap">
                      {credential.title}
                    </h4>
                  </div>
                  <ul className="text-3xs sm:text-sm text-[#c8d4e6] space-y-0.5 text-center md:text-left">
                    {credential.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-1 justify-center md:justify-start">
                        <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 bg-[#e19d24] rounded-full mt-1 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Citação compacta */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-3 sm:mt-12 max-w-xs sm:max-w-3xl mx-auto"
        >
          <div className="bg-[#16202d] p-2 sm:p-8 rounded-lg border border-[#e19d24]/20">
            <p className="text-2xs sm:text-lg text-[#c8d4e6] italic text-center mb-1 sm:mb-4">
              "O Método ATO nasceu da minha trajetória e já ajudou +500 pessoas a transformar suas vidas, organizando tudo em um método validado para resultados!"
            </p>
            <div className="flex items-center justify-center gap-1 sm:gap-3">
              <Award className="text-[#e19d24]" size={isMobile ? 12 : 22} />
              <span className="text-3xs sm:text-base text-[#c8d4e6]">
                Cristofer Leone, Fundador do Método ATO
              </span>
            </div>
          </div>
        </motion.div>
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
            font-size: 1.25rem !important;
            margin-bottom: 0 !important;
          }
          
          h2 + div span {
            font-size: 1.6rem !important;
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
          .space-y-3 > * { margin-top: 0.5rem !important; }
          .rounded-xl { border-radius: 0.5rem !important; }
          .shadow-lg { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important; }
          
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
          
          ul { padding: 0 !important; margin: 0 !important; }
          li { margin-bottom: 0.1rem !important; }
        }
      `}</style>
    </section>
  );
});

CristoferLeoneSection.displayName = 'CristoferLeoneSection';

export default CristoferLeoneSection;