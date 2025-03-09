import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Tag, CreditCard, Percent, Gift, ArrowRight, Star, Shield, Zap, Clock, AlertTriangle } from 'lucide-react';

const PricingSection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // State para countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    
    // Função crucial para garantir que a seção respeite seu espaço
    const ensureSectionBoundaries = () => {
      if (window.innerWidth < 768) {
        const section = document.querySelector('.pricing-section');
        if (section) {
          // Forçar contenção da seção
          section.style.position = 'relative';
          section.style.zIndex = '25';
          section.style.backgroundColor = '#0c1220';
          section.style.overflow = 'hidden'; // Impede conteúdo de vazar
          section.style.marginTop = '-1px';
          section.style.paddingTop = '2rem';
          section.style.paddingBottom = '2rem';
          
          // Adicionar barreira no topo para prevenir invasão da seção anterior
          if (!section.querySelector('.section-top-barrier')) {
            const topBarrier = document.createElement('div');
            topBarrier.className = 'section-top-barrier';
            topBarrier.style.position = 'absolute';
            topBarrier.style.top = '0';
            topBarrier.style.left = '0';
            topBarrier.style.width = '100%';
            topBarrier.style.height = '4px';
            topBarrier.style.backgroundColor = '#0c1220';
            topBarrier.style.zIndex = '10';
            section.insertBefore(topBarrier, section.firstChild);
          }
          
          // Adicionar barreira na base para prevenir invasão da próxima seção
          if (!section.querySelector('.section-bottom-barrier')) {
            const bottomBarrier = document.createElement('div');
            bottomBarrier.className = 'section-bottom-barrier';
            bottomBarrier.style.position = 'absolute';
            bottomBarrier.style.bottom = '0';
            bottomBarrier.style.left = '0';
            bottomBarrier.style.width = '100%';
            bottomBarrier.style.height = '4px';
            bottomBarrier.style.backgroundColor = '#0c1220';
            bottomBarrier.style.zIndex = '10';
            section.appendChild(bottomBarrier);
          }
          
          // Otimizar layout para dispositivos móveis
          // Ajustar o card de preço principal
          const priceHighlight = section.querySelector('.price-highlight');
          if (priceHighlight) {
            priceHighlight.style.maxWidth = '330px';
            priceHighlight.style.margin = '0 auto 1.5rem auto';
            priceHighlight.style.padding = '1rem';
            
            // Reduzir tamanho dos textos
            const priceTexts = priceHighlight.querySelectorAll('span, h3');
            priceTexts.forEach(text => {
              if (text.classList.contains('price-amount')) {
                text.style.fontSize = '2.5rem';
              } else {
                text.style.fontSize = '0.8rem';
              }
            });
            
            // Ajustar ícones e badges
            const badges = priceHighlight.querySelectorAll('.flex.items-center');
            badges.forEach(badge => {
              badge.style.gap = '0.5rem';
              
              const svg = badge.querySelector('svg');
              if (svg) {
                svg.style.width = '15px';
                svg.style.height = '15px';
              }
              
              const text = badge.querySelector('span');
              if (text) {
                text.style.fontSize = '0.75rem';
              }
            });
            
            // Ajustar botão
            const button = priceHighlight.querySelector('button');
            if (button) {
              button.style.fontSize = '0.8rem';
              button.style.padding = '0.6rem 1rem';
              
              const iconContainer = button.querySelector('span');
              if (iconContainer) {
                iconContainer.style.gap = '0.3rem';
              }
              
              const arrow = button.querySelector('svg');
              if (arrow) {
                arrow.style.width = '15px';
                arrow.style.height = '15px';
              }
            }
          }
          
          // Ajustar o grid de opcionais
          const optionsGrid = section.querySelector('.options-grid');
          if (optionsGrid) {
            optionsGrid.style.display = 'grid';
            optionsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            optionsGrid.style.gap = '0.75rem';
            optionsGrid.style.maxWidth = '330px';
            optionsGrid.style.margin = '0 auto';
            
            // Ajustar cada card opcional
            const optionCards = optionsGrid.querySelectorAll('.option-card');
            optionCards.forEach(card => {
              card.style.padding = '0.6rem';
              card.style.borderRadius = '0.5rem';
              
              // Centralizar conteúdo
              const content = card.querySelector('.option-content');
              if (content) {
                content.style.alignItems = 'center';
                content.style.gap = '0.5rem';
              }
              
              // Reduzir tamanho de ícones
              const iconContainer = card.querySelector('.icon-container');
              if (iconContainer) {
                iconContainer.style.padding = '0.4rem';
                
                const svg = iconContainer.querySelector('svg');
                if (svg) {
                  svg.style.width = '12px';
                  svg.style.height = '12px';
                }
              }
              
              // Reduzir textos
              const title = card.querySelector('h3');
              if (title) {
                title.style.fontSize = '0.7rem';
                title.style.marginBottom = '0.1rem';
              }
              
              const desc = card.querySelector('p');
              if (desc) {
                desc.style.fontSize = '0.65rem';
              }
            });
          }
          
          // Otimizar títulos da seção
          const sectionTitle = section.querySelector('h2');
          if (sectionTitle) {
            sectionTitle.style.fontSize = '1.4rem';
            sectionTitle.style.lineHeight = '1.2';
          }
          
          const sectionSubtitle = section.querySelector('h2 + p');
          if (sectionSubtitle) {
            sectionSubtitle.style.fontSize = '0.8rem';
          }
        }
      }
    };
    
    // Executar função
    checkMobile();
    ensureSectionBoundaries();
    
    // Adicionar event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', ensureSectionBoundaries);
    window.addEventListener('orientationchange', () => {
      setTimeout(checkMobile, 100);
      setTimeout(ensureSectionBoundaries, 200);
    });
    
    // Aplicar após tempo para garantir carregamento completo
    setTimeout(ensureSectionBoundaries, 100);
    setTimeout(ensureSectionBoundaries, 500);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', ensureSectionBoundaries);
      clearInterval(timer);
    };
  }, []);

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen pricing-section">
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 sm:mb-6">
            VOCÊ JÁ TEM CONHECIMENTO.
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              AGORA É HORA DE MONETIZÁ-LO!
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Transforme sua carreira por um investimento que vai mudar sua vida
          </p>
        </motion.div>
  
        {/* Pricing Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-xs sm:max-w-3xl mx-auto mb-6 sm:mb-12 price-highlight"
        >
          <div className="bg-gradient-to-br from-[#16202d] to-[#0c1220] border border-[#e19d24]/30 rounded-xl sm:rounded-2xl p-5 sm:p-10 text-center relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(225,157,36,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none"></div>
            
            {/* Urgency Badge */}
            <div className="absolute top-0 right-0 bg-[#e19d24] text-[#0c1220] font-bold py-1 px-4 text-xs sm:text-sm md:text-base rounded-bl-xl">
              2º LOTE - TERMINA EM {formatTimeUnit(timeLeft.hours)}:{formatTimeUnit(timeLeft.minutes)}:{formatTimeUnit(timeLeft.seconds)}
            </div>
            
            {/* Price Highlight */}
            <div className="relative z-10">
              {/* Ênfase no parcelamento */}
              <div className="mb-4">
                <span className="text-sm sm:text-base text-[#c8d4e6] block mb-1 price-label">
                  Aproveite enquanto está disponível
                </span>
                <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] price-installment mb-1">
                  10x R$ 169,70
                </h3>
                <span className="text-sm sm:text-base text-[#c8d4e6] block price-amount">
                  ou R$ 1.697,00 à vista
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-[#c8d4e6] bg-[#0c1220]/80 py-1 px-3 rounded-full">
                  <AlertTriangle className="text-[#e19d24]" size={isMobile ? 15 : 20} />
                  <span className="text-sm sm:text-base">VAGAS LIMITADAS</span>
                </div>
                <div className="flex items-center gap-2 text-[#c8d4e6] bg-[#0c1220]/80 py-1 px-3 rounded-full">
                  <Shield className="text-[#e19d24]" size={isMobile ? 15 : 20} />
                  <span className="text-sm sm:text-base">Garantia Total</span>
                </div>
              </div>

              <a 
  href="https://pay.hotmart.com/D98067996F?_hi=eyJjaWQiOiIxNzM5NjU1NjQwNDExNjI4MzUzMDQ4MjMyOTUxODAwIiwiYmlkIjoiMTczOTY1NTY0MDQxMTYyODM1MzA0ODIzMjk1MTgwMCIsInNpZCI6Ijc4NjE1YWEzM2I4MDQwYWNhODg4MTZlZDNlMDY5MzhiIn0=.1741553142689&bid=1741553148353"
  target="_blank"
  rel="noopener noreferrer" 
  className="inline-block"
>
  <button className="group relative px-6 sm:px-12 py-2 sm:py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold text-sm sm:text-lg rounded-lg hover:scale-105 transition-transform shadow-xl">
    <span className="relative z-10 flex items-center justify-center gap-2">
      GARANTIR MINHA VAGA ANTES DO AUMENTO
      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={isMobile ? 15 : 20} />
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-[#e19d24]/20 to-[#d3891a]/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></span>
  </button>
</a>
            </div>
          </div>
        </motion.div>
        
        {/* Aviso de próximo lote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#16202d] py-2 px-4 rounded-full border border-[#e19d24]/20">
            <Clock className="text-[#e19d24]" size={isMobile ? 12 : 18} />
            <span className="text-xs sm:text-sm text-[#c8d4e6]">
              Próximo lote: <span className="text-[#e19d24] font-bold">R$ 2.987,00</span> (aumento de 76%)
            </span>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-8 max-w-xs sm:max-w-6xl mx-auto options-grid"
        >
          {[
            {
              icon: <CreditCard className="text-white" size={isMobile ? 12 : 20} />,
              title: "Formas de Pagamento",
              description: "Cartão, PIX e Boleto"
            },
            {
              icon: <Gift className="text-white" size={isMobile ? 12 : 20} />,
              title: "Bônus Exclusivo",
              description: "Grupo VIP pós-evento"
            },
            {
              icon: <Zap className="text-white" size={isMobile ? 12 : 20} />,
              title: "Suporte",
              description: "Suporte Vitalício"
            },
            {
              icon: <Tag className="text-white" size={isMobile ? 12 : 20} />,
              title: "Condições",
              description: "Vagas Limitadas"
            }
          ].map((detail, index) => (
            <div
              key={index}
              className="option-card group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-lg sm:rounded-xl md:rounded-2xl" />
              <div className="option-content relative z-10 flex flex-col items-center">
                <div className="icon-container p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg mb-3 sm:mb-4">
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
            margin-top: -1px !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            background-color: #0c1220 !important;
            position: relative !important;
            z-index: 25 !important;
            overflow: hidden !important; /* Impede escape de conteúdo */
          }
          
          /* Barreiras para conter a seção */
          .pricing-section::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 10;
          }
          
          .pricing-section::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: #0c1220;
            z-index: 10;
          }
          
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          /* Otimização para card de preço */
          .price-highlight {
            max-width: 330px !important;
            margin: 0 auto 1.5rem auto !important;
          }
          
          .price-highlight > div {
            padding: 1rem !important;
            padding-top: 2rem !important; /* Espaço para o badge de urgência */
          }
          
          .price-label,
          .price-amount {
            font-size: 0.8rem !important;
          }
          
          .price-installment {
            font-size: 2.5rem !important;
          }
          
          /* Estilo do badge de urgência */
          .price-highlight .absolute.top-0.right-0 {
            font-size: 0.65rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          
          /* Otimização para badges */
          .flex.items-center {
            gap: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .flex.items-center svg {
            width: 15px !important;
            height: 15px !important;
          }
          
          .flex.items-center span {
            font-size: 0.75rem !important;
          }
          
          /* Otimização para botão */
          button {
            font-size: 0.8rem !important;
            padding: 0.6rem 1rem !important;
          }
          
          button span {
            gap: 0.3rem !important;
          }
          
          button svg {
            width: 15px !important;
            height: 15px !important;
          }
          
          /* Otimização para grid de opções */
          .options-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            max-width: 330px !important;
            margin: 0 auto !important;
          }
          
          .option-card {
            padding: 0.6rem !important;
            border-radius: 0.5rem !important;
          }
          
          .option-content {
            align-items: center !important;
            gap: 0.5rem !important;
          }
          
          .icon-container {
            padding: 0.4rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .icon-container svg {
            width: 12px !important;
            height: 12px !important;
          }
          
          .option-card h3 {
            font-size: 0.7rem !important;
            margin-bottom: 0.1rem !important;
            line-height: 1.2 !important;
          }
          
          .option-card p {
            font-size: 0.65rem !important;
          }
          
          /* Otimização para títulos da seção */
          .pricing-section h2 {
            font-size: 1.4rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
          }
          
          .pricing-section h2 + p {
            font-size: 0.8rem !important;
            margin-bottom: 1rem !important;
          }
          
          /* Aviso de próximo lote */
          .inline-flex.items-center {
            padding: 0.3rem 0.6rem !important;
          }
          
          .inline-flex.items-center span {
            font-size: 0.7rem !important;
          }
        }
        
        /* Ajustes para dispositivos muito pequenos */
        @media (max-width: 350px) {
          .price-highlight {
            padding: 0.5rem !important;
          }
          
          .price-installment {
            font-size: 2.2rem !important;
          }
          
          .options-grid {
            width: 95% !important;
            gap: 0.5rem !important;
          }
          
          .option-card {
            padding: 0.5rem !important;
          }
          
          .icon-container {
            padding: 0.3rem !important;
          }
          
          .option-card h3 {
            font-size: 0.65rem !important;
          }
          
          .option-card p {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;