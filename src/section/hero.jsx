import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import cristofer from './cristofer.png';
import logo from './logo.png';

const Hero = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State para detecção de viewport
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
    
  useEffect(() => {
    const updateScreenDimensions = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };
    
    updateScreenDimensions();
    window.addEventListener('resize', updateScreenDimensions);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateScreenDimensions, 200);
    });
    
    return () => {
      window.removeEventListener('resize', updateScreenDimensions);
      window.removeEventListener('orientationchange', updateScreenDimensions);
    };
  }, []);

  // Determinar se é mobile para layout
  const isMobile = deviceType === 'mobile' || deviceType === 'small';
  
  // Determinar tamanho do ícone com base no dispositivo
  const getIconSize = () => {
    if (deviceType === 'small') return 16;
    if (deviceType === 'mobile') return 18;
    if (deviceType === 'ipad-pro') return 24;
    if (deviceType === 'ipad-air' || deviceType === 'ipad-mini' || deviceType === 'tablet' || deviceType === 'surface' || deviceType === 'foldable') return 22;
    return 20; // default para desktop
  };
  
  // Ajustar posição do texto com base no dispositivo
  const getTextMarginTop = () => {
    if (deviceType === 'small' || deviceType === 'mobile') return '0';
    if (deviceType === 'ipad-pro') return '-50px';
    if (deviceType === 'ipad-air') return '-80px';
    if (deviceType === 'ipad-mini') return '-70px';
    if (deviceType === 'surface') return '-90px';
    if (deviceType === 'foldable') return '-40px';
    if (deviceType === 'tablet') return '-100px';
    return '-200px'; // default para desktop
  };

  // Ajustar a altura da imagem com base no dispositivo
  const getImageHeight = () => {
    if (deviceType === 'small' || deviceType === 'mobile') return 'auto';
    if (deviceType === 'ipad-pro') return '85vh';
    if (deviceType === 'ipad-air') return '80vh';
    if (deviceType === 'ipad-mini') return '75vh';
    if (deviceType === 'surface') return '80vh';
    if (deviceType === 'foldable') return '75vh';
    if (deviceType === 'tablet') return '85vh';
    return '700px'; // default para desktop
  };

  return (
    <section ref={ref} className={`relative w-full min-h-screen bg-transparent overflow-hidden flex items-center lg:items-end justify-center pt-24 lg:pt-0 hero-section device-type-${deviceType}`}>
      {/* Logo for mobile only */}
      <div className="absolute top-0 left-0 w-full py-5 z-50 md:hidden flex justify-center content-absolute">
        <img 
          src={logo} 
          alt="Mobile Logo" 
          className="h-12 w-auto drop-shadow-lg" 
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 relative max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Text column */}
          <div 
            className="w-full lg:w-5/12 xl:w-1/2 space-y-8 relative px-4 hero-text-column" 
            style={{ marginTop: getTextMarginTop() }}
          >
            {/* Logo for desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative text-center lg:text-left hidden md:block"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className={`h-20 md:h-24 w-auto filter drop-shadow-xl mx-auto lg:mx-0 mb-8 lg:mb-0 ${
                  deviceType === 'ipad-pro' ? 'h-28' : 
                  deviceType === 'tablet' || deviceType === 'surface' || deviceType === 'foldable' ? 'h-24' : ''
                }`}
              />
              <div className="absolute inset-0 bg-[#e19d24] blur-2xl opacity-20 -z-1" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                  deviceType === 'ipad-pro' ? 'text-5xl' : 
                  deviceType === 'ipad-air' || deviceType === 'surface' ? 'text-4xl' : 
                  deviceType === 'ipad-mini' || deviceType === 'foldable' ? 'text-3xl' : ''
                }`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block text-gray-100">Torne-se um</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
                  Mentor de Elite
                </span>
              </motion.h1>

              <motion.p
                className={`text-base sm:text-lg md:text-xl text-[#c8d4e6] mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 ${
                  deviceType === 'ipad-pro' ? 'text-2xl mt-6' : 
                  deviceType === 'ipad-air' || deviceType === 'surface' || deviceType === 'foldable' ? 'text-xl mt-5' : 
                  deviceType === 'ipad-mini' ? 'text-lg mt-4' : ''
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Domine as estratégias de mentoria de alta performance com o método comprovado de Cristofer Leone
              </motion.p>

              <motion.div
                className={`mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start ${
                  deviceType === 'ipad-pro' ? 'mt-10' : 
                  deviceType === 'ipad-air' || deviceType === 'surface' || deviceType === 'foldable' ? 'mt-8' : 
                  deviceType === 'ipad-mini' ? 'mt-7' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white hover:shadow-xl transition-all duration-300 hover:gap-4 ${
                    deviceType === 'ipad-pro' ? 'px-10 py-5 text-xl rounded-xl gap-4' : 
                    deviceType === 'ipad-air' || deviceType === 'surface' ? 'px-9 py-4 text-lg rounded-xl' : 
                    deviceType === 'ipad-mini' || deviceType === 'foldable' ? 'px-8 py-4 text-base' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar Jornada
                  <ArrowRight className="transition-all" size={getIconSize()} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image column (adjusted) */}
          <div className={`w-full lg:w-7/12 xl:w-1/2 relative mt-8 sm:mt-10 md:mt-12 lg:mt-0 ${
            deviceType === 'ipad-pro' || deviceType === 'ipad-air' || deviceType === 'ipad-mini' || 
            deviceType === 'tablet' || deviceType === 'surface' || deviceType === 'foldable' 
              ? 'lg:h-[85vh]' : 'lg:h-[calc(100vh-200px)]'
          }`}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full cristofer-image-container content-absolute"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e19d2433_0%,transparent_60%)] smoke-effect content-absolute" />
              <img
                src={cristofer}
                alt="Cristofer Leone"
                className={`w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-top scale-[1.02] lg:scale-100 cristofer-image ${
                  deviceType === 'ipad-pro' ? 'lg:h-[85vh]' : 
                  deviceType === 'ipad-air' ? 'lg:h-[80vh]' : 
                  deviceType === 'ipad-mini' ? 'lg:h-[75vh]' : 
                  deviceType === 'surface' ? 'lg:h-[80vh]' : 
                  deviceType === 'foldable' ? 'lg:h-[75vh]' : 
                  deviceType === 'tablet' ? 'lg:h-[85vh]' : 'lg:h-[700px]'
                }`}
                style={{
                  clipPath: deviceType === 'foldable' || deviceType === 'tablet' || deviceType === 'ipad-mini' || 
                           deviceType === 'ipad-air' || deviceType === 'ipad-pro' || deviceType === 'surface'
                    ? 'polygon(0 0, 100% 0, 100% 92%, 97% 100%, 0 100%)'
                    : 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)',
                  maskImage: deviceType === 'foldable' || deviceType === 'tablet' || deviceType === 'ipad-mini' || 
                           deviceType === 'ipad-air' || deviceType === 'ipad-pro' || deviceType === 'surface'
                    ? 'linear-gradient(to right, black 90%, transparent 100%)'
                    : 'linear-gradient(to right, black 85%, transparent 98%)',
                  position: isMobile ? 'relative' : 'absolute',
                  bottom: '0'
                }}
              />
              
              {/* Highlight efeito para tablets */}
              {(deviceType === 'tablet' || deviceType === 'ipad-pro' || deviceType === 'ipad-air' || 
                deviceType === 'ipad-mini' || deviceType === 'surface' || deviceType === 'foldable') && (
                <div 
                  className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none" 
                  style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(225, 157, 36, 0.15), transparent 70%)',
                    zIndex: 5
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Base structure */
          section {
            background: transparent;
            min-height: auto;
            height: ${screenHeight < 700 ? '100vh' : '95vh'};
            max-height: 100vh;
            position: relative;
            overflow: visible; /* Changed to visible to allow content outside the section */
            display: flex;
            flex-direction: column;
            padding-bottom: env(safe-area-inset-bottom, 0);
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0;
            margin: 0;
            flex: 1;
          }
          
          /* Cristofer's image */
          .w-full.lg\\:w-7\\/12 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 70%; /* Reduced to avoid overlapping with other sections */
            margin-top: 0 !important;
            overflow: hidden;
            z-index: 10;
          }

          /* Add smooth gradient at the bottom for transition with text */
          .cristofer-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            clip-path: none !important;
            mask-image: linear-gradient(to bottom, black 80%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%) !important;
            position: absolute !important;
          }

          /* Highlight effect around the image */
          .w-full.lg\\:w-7\\/12:after {
            content: '';
            position: absolute;
            bottom: 10%;
            left: 0;
            right: 0;
            height: 30%; /* Adjusted */
            background: radial-gradient(ellipse at bottom, rgba(225, 157, 36, 0.15), transparent 70%);
            z-index: 5;
            pointer-events: none;
          }

          /* Text column */
          .w-full.lg\\:w-5\\/12 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            margin-top: 0 !important;
            padding: 1.25rem 1rem 1.5rem;
            background: transparent;
            z-index: 20;
            text-align: center;
          }

          /* Semi-transparent background behind text */
          .w-full.lg\\:w-5\\/12:before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to top, rgba(15, 20, 30, 0.98), rgba(15, 20, 30, 0.92) 85%);
            backdrop-filter: blur(10px);
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
            z-index: -1;
            box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.2);
          }
          
          /* Glowing border effect for text component */
          .w-full.lg\\:w-5\\/12:after {
            content: '';
            position: absolute;
            top: -2px;
            left: 10%;
            right: 10%;
            height: 2px;
            background: linear-gradient(to right, transparent, rgba(225, 157, 36, 0.7), transparent);
            border-radius: 50%;
            filter: blur(1px);
            z-index: 2;
          }

          /* Adjustments for smaller screens */
          @media (max-height: 667px) {
            section {
              height: 100vh;
              min-height: 100vh;
            }
            
            .w-full.lg\\:w-7\\/12 {
              height: 65%; /* Further reduced for small iPhones */
            }
            
            .cristofer-image {
              height: 100%;
              object-position: 50% 15%; /* Adjustment to ensure face is visible */
            }
            
            .w-full.lg\\:w-5\\/12 {
              padding: 1rem 1rem 1.25rem;
            }
          }
          
          /* Specific adjustments for very small devices */
          @media (max-height: 568px) {
            section {
              padding-top: 8px;
              height: 100vh;
            }
            
            .w-full.lg\\:w-7\\/12 {
              height: 60%;
            }
            
            .cristofer-image {
              object-position: 50% 10%;
            }
            
            .w-full.lg\\:w-5\\/12 {
              padding: 0.75rem 0.75rem 1rem;
            }
            
            h1 {
              font-size: 1.25rem;
            }
            
            p {
              font-size: 0.875rem;
              margin-top: 0.5rem !important;
            }
            
            .mt-6 {
              margin-top: 0.75rem !important;
            }
          }
        }
        
        /* Tablets e dispositivos dobráveis */
        @media (min-width: 768px) and (max-width: 1366px) {
          /* iPad Pro */
          .device-type-ipad-pro .hero-section {
            height: 100vh !important;
          }
          
          .device-type-ipad-pro .cristofer-image {
            object-position: center 5% !important;
          }
          
          /* iPad Air, iPad Mini */
          .device-type-ipad-air .hero-section,
          .device-type-ipad-mini .hero-section {
            height: 100vh !important;
          }
          
          .device-type-ipad-air .cristofer-image,
          .device-type-ipad-mini .cristofer-image {
            object-position: center 10% !important;
          }
          
          /* Surface Pro */
          .device-type-surface .hero-section {
            height: 100vh !important;
          }
          
          .device-type-surface .cristofer-image {
            object-position: center 15% !important;
          }
          
          /* Dispositivos dobráveis */
          .device-type-foldable .hero-section {
            height: 100vh !important;
          }
          
          .device-type-foldable .cristofer-image {
            object-position: center 10% !important;
          }
          
          /* Ajustes comuns para todos os tablets */
          .device-type-ipad-pro .hero-section button,
          .device-type-ipad-air .hero-section button,
          .device-type-ipad-mini .hero-section button,
          .device-type-surface .hero-section button,
          .device-type-foldable .hero-section button,
          .device-type-tablet .hero-section button {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .device-type-ipad-pro .hero-section button:after,
          .device-type-ipad-air .hero-section button:after,
          .device-type-ipad-mini .hero-section button:after,
          .device-type-surface .hero-section button:after,
          .device-type-foldable .hero-section button:after,
          .device-type-tablet .hero-section button:after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(255, 255, 255, 0) 100%
            );
            transform: rotate(30deg);
            transition: all 0.6s ease;
            opacity: 0;
          }
          
          .device-type-ipad-pro .hero-section button:hover:after,
          .device-type-ipad-air .hero-section button:hover:after,
          .device-type-ipad-mini .hero-section button:hover:after,
          .device-type-surface .hero-section button:hover:after,
          .device-type-foldable .hero-section button:hover:after,
          .device-type-tablet .hero-section button:hover:after {
            opacity: 1;
            left: 100%;
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;