import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Target } from 'lucide-react';

const FinalCtaSection = forwardRef(({ noBackground = false }, ref) => {
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

  // Key Benefits
  const keyBenefits = [
    {
      icon: <Target className="text-[#e19d24]" size={24} />,
      text: "Transforme seu conhecimento em uma mentoria estruturada"
    },
    {
      icon: <Zap className="text-[#e19d24]" size={24} />,
      text: "Aprenda a escalar seu impacto e gerar receita"
    },
    {
      icon: <Check className="text-[#e19d24]" size={24} />,
      text: "Método validado com mais de 500 pessoas transformadas"
    }
  ];

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen final-cta-section">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#16202d] to-[#0c1220] opacity-50 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 sm:mb-6">
            Sua Jornada de Transformação 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] mt-2">
              Começa Agora
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto mb-8 sm:mb-12">
            Não deixe sua expertise passar despercebida. Transforme seu conhecimento em um negócio de impacto que gera resultados reais.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto"
        >
          {keyBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-[#16202d] p-3 sm:p-4 rounded-xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
            >
              {benefit.icon}
              <span className="text-sm sm:text-base text-[#c8d4e6]">
                {benefit.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-[#16202d] to-[#0c1220] border border-[#e19d24]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(225,157,36,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] mb-4 sm:mb-6">
              Últimas Vagas Disponíveis
            </h3>
            
            <p className="text-base sm:text-lg text-[#c8d4e6] mb-6 sm:mb-8">
              Não perca a oportunidade de transformar sua carreira. As vagas estão se esgotando rapidamente!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GARANTIR MINHA VAGA AGORA
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#e19d24]/20 to-[#d3891a]/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .final-cta-section {
            margin-top: 0;
            padding-top: 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .final-cta-section h2 {
            line-height: 1.3;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .final-cta-section p {
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
          
          .final-cta-section .flex-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
});

FinalCtaSection.displayName = 'FinalCtaSection';

export default FinalCtaSection;