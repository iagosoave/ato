import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AudienceSection = forwardRef(({ noBackground = false }, ref) => {
  // Helper function to check if the device is iOS
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };
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
    
  // Data for the section
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

  // Apply iOS-specific check for safe-area-inset handling at runtime
  useEffect(() => {
    if (isMobile && isIOS() && typeof document !== 'undefined') {
      const audienceSection = document.querySelector('.audience-section');
      if (audienceSection) {
        audienceSection.style.paddingTop = 'env(safe-area-inset-top, 16px)';
      }
    }
  }, [isMobile]);

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen audience-section">
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
            Para Quem é a
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2">
              Formação Método ATO?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Descubra se você se encaixa no perfil dos profissionais que transformamos em mentores de elite
          </p>
        </motion.div>
  
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 md:gap-8 max-w-6xl mx-auto mobile-card-grid">
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
                <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                  <ArrowRight className="text-white" size={isMobile ? 16 : 20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#c8d4e6] leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Smooth transition between sections on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Add smooth transition at the top to connect with Hero */
          .audience-section {
            margin-top: 0;
            padding-top: 0; /* Reduced padding for mobile */
            z-index: 30;
            min-height: auto !important; /* Override min-height */
          }
          
          .audience-section:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(to bottom, rgba(15, 20, 30, 0.98), transparent);
            z-index: 5;
          }
          
          /* Fix for title spacing on mobile */
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          /* Adjust sizing and spacing for mobile */
          .audience-section .container {
            padding-top: 2rem; /* Bring content closer to top */
          }
          
          .audience-section h2 {
            line-height: 1.3;
            font-size: 1.5rem; /* Smaller title */
            margin-bottom: 0.5rem;
          }
          
          .audience-section p {
            margin-top: 0.5rem;
            font-size: 0.875rem; /* Smaller description text */
          }
          
          .audience-section .mb-8 {
            margin-bottom: 1rem !important; /* Reduce title bottom margin */
          }
          
          /* Make grid cards more compact */
          .mobile-card-grid {
            gap: 0.75rem !important;
            max-width: 90% !important;
            margin: 0 auto !important;
          }
          
          .mobile-card {
            padding: 0.75rem !important; /* Tighter padding in cards */
          }
          
          .mobile-card h3 {
            font-size: 0.95rem !important; /* Smaller card titles */
            margin-bottom: 0.25rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-card p {
            font-size: 0.75rem !important; /* Smaller card text */
            line-height: 1.3 !important;
          }
          
          /* Reduce icon size */
          .mobile-card .p-2 {
            padding: 0.4rem !important;
          }
          
          .mobile-card .p-2 svg {
            width: 14px !important;
            height: 14px !important;
          }
          
          /* Further reduce gap between icon and text */
          .mobile-card .flex.items-start {
            gap: 0.5rem !important;
          }
          
          /* Fix section transition for small devices */
          .audience-section:after {
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

        /* Fix for medium sized devices (tablets in portrait mode) */
        @media (min-width: 768px) and (max-width: 992px) {
          .audience-section {
            margin-top: -1px;
          }
        }
        
        /* Extra small devices */
        @media (max-width: 375px) {
          .audience-section .container {
            padding-top: 1.5rem;
          }
          
          .mobile-card-grid {
            grid-template-columns: minmax(0, 1fr) !important; /* Force single column on very small screens */
            max-width: 85% !important;
          }
        }
        
        /* Target tablet sizes around 853x1280 to use desktop layout */
        @media (min-width: 768px) and (max-width: 1024px) and (min-height: 1000px) {
          .audience-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          /* Keep 2-column layout but with adjusted spacing */
          .mobile-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
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

AudienceSection.displayName = 'AudienceSection';

export default AudienceSection;