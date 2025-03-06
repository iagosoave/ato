import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Tag, CreditCard, Percent, Gift, ArrowRight, Star, Shield, Zap } from 'lucide-react';

const PricingSection = forwardRef(({ noBackground = false }, ref) => {
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
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen pricing-section">
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
            Investimento 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Método ATO
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Transforme sua carreira por um investimento que vai mudar sua vida
          </p>
        </motion.div>
  
        {/* Pricing Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-br from-[#16202d] to-[#0c1220] border border-[#e19d24]/30 rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(225,157,36,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none"></div>
            
            {/* Price Highlight */}
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-sm sm:text-base text-[#c8d4e6] block mb-2">
                  Investimento Total
                </span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
                  R$ 1.697,00
                </h3>
                <span className="text-sm sm:text-base text-[#c8d4e6] block mt-2">
                  ou 10x de R$ 169,70 sem juros
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#c8d4e6]">
                  <Star className="text-[#e19d24]" size={20} />
                  <span className="text-sm sm:text-base">2º Lote</span>
                </div>
                <div className="flex items-center gap-2 text-[#c8d4e6]">
                  <Shield className="text-[#e19d24]" size={20} />
                  <span className="text-sm sm:text-base">Garantia Total</span>
                </div>
              </div>

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

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-8 max-w-6xl mx-auto mobile-card-grid"
        >
          {[
            {
              icon: <CreditCard className="text-white" size={20} />,
              title: "Formas de Pagamento",
              description: "Cartão, PIX e Boleto"
            },
            {
              icon: <Gift className="text-white" size={20} />,
              title: "Bônus Exclusivo",
              description: "Grupo VIP pós-evento"
            },
            {
              icon: <Zap className="text-white" size={20} />,
              title: "Suporte",
              description: "Suporte Vitalício"
            },
            {
              icon: <Tag className="text-white" size={20} />,
              title: "Condições",
              description: "Vagas Limitadas"
            }
          ].map((detail, index) => (
            <div
              key={index}
              className="group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all mobile-card text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg mb-3 sm:mb-4">
                  {detail.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100 mb-2">
                  {detail.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c8d4e6] font-medium">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-section {
            margin-top: 0;
            padding-top: 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .pricing-section h2 {
            line-height: 1.3;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .pricing-section .container {
            padding-top: 2rem;
          }
          
          .mobile-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            max-width: 90% !important;
            margin: 0 auto !important;
          }
          
          .mobile-card {
            padding: 0.75rem !important;
          }
          
          .mobile-card h3 {
            font-size: 0.8rem !important;
            margin-bottom: 0.25rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card p {
            font-size: 0.7rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card .p-2 {
            padding: 0.4rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .mobile-card .p-2 svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
      `}</style>
    </section>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;