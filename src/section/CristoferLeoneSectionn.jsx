import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Globe, Book } from 'lucide-react';

const CristoferLeoneSectionn = forwardRef(({ noBackground = false, profileImage = null }, ref) => {
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

  // Cristofer's Credentials
  const credentials = [
    {
      icon: <Globe className="text-[#e19d24]" size={24} />,
      title: "Formações Internacionais",
      description: [
        "Coaching Skills - Imperial College London",
        "Neurociência - Harvard & UC Berkeley"
      ]
    },
    {
      icon: <Book className="text-[#e19d24]" size={24} />,
      title: "Certificações",
      description: [
        "Análise Comportamental DISC",
        "Terapia Cognitivo-Comportamental",
        "Liderança - Harvard"
      ]
    },
    {
      icon: <Star className="text-[#e19d24]" size={24} />,
      title: "Experiência",
      description: [
        "+20 anos em desenvolvimento de negócios",
        "Fundador de múltiplos negócios",
        "Mentor de mais de 500 pessoas"
      ]
    }
  ];

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen cristofer-section">
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
            Quem é 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Cristofer Leone
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            O mentor que transforma conhecimento em impacto e propósito
          </p>
        </motion.div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Cristofer Leone" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-64 sm:h-80 md:h-96 bg-[#16202d] flex items-center justify-center text-[#c8d4e6]">
                Imagem de Cristofer Leone em breve
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-100"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Cristofer Leone</h3>
              <p className="text-sm sm:text-base">Especialista em Desenvolvimento Humano</p>
            </div>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            <p className="text-sm sm:text-base text-[#c8d4e6] leading-relaxed">
              Cristofer Leone é especialista em desenvolvimento humano, gestão de equipes de alta performance e neurociência aplicada à aprendizagem. Com uma trajetória marcada por grandes transformações pessoais e profissionais, ele fundou e geriu múltiplos negócios, validando na prática a capacidade de estruturar conhecimento em modelos escaláveis.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {credentials.map((credential, index) => (
                <div 
                  key={index} 
                  className="bg-[#16202d] p-4 rounded-xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {credential.icon}
                    <h4 className="text-sm sm:text-base font-semibold text-gray-100">
                      {credential.title}
                    </h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#c8d4e6] space-y-1">
                    {credential.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e19d24] rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-[#16202d] p-6 sm:p-8 rounded-xl border border-[#e19d24]/20">
            <p className="text-base sm:text-lg text-[#c8d4e6] italic text-center mb-4">
              "O Método ATO nasceu da minha trajetória e da mentoria 'A Travessia', que já ajudou mais de 500 pessoas a transformar suas vidas. Depois de anos aplicando e refinando esse processo, organizei tudo em um método validado para que mais pessoas consigam alcançar os mesmos resultados!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <Award className="text-[#e19d24]" size={24} />
              <span className="text-sm sm:text-base text-[#c8d4e6]">
                Cristofer Leone, Fundador do Método ATO
              </span>
            </div>
          </div>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .cristofer-section {
            margin-top: 0;
            padding-top: 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .cristofer-section .grid {
            grid-template-columns: 1fr !important;
          }
          
          .cristofer-section h2 {
            line-height: 1.3;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .cristofer-section p {
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
});

CristoferLeoneSectionn.displayName = 'CristoferLeoneSectionn';

export default CristoferLeoneSectionn;