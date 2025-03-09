import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import cristofer from './cristofer.png';
import logo from './logo.png';

const Hero = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
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

  const isMobile = deviceType === 'mobile' || deviceType === 'small';
  
  const getIconSize = () => {
    if (deviceType === 'small') return 16;
    if (deviceType === 'mobile') return 18;
    if (deviceType === 'ipad-pro') return 24;
    if (deviceType === 'ipad-air' || deviceType === 'ipad-mini' || deviceType === 'tablet' || deviceType === 'surface' || deviceType === 'foldable') return 22;
    return 20;
  };
  
  const getTextMarginTop = () => {
    if (deviceType === 'small' || deviceType === 'mobile') return '0';
    if (deviceType === 'ipad-pro') return '-50px';
    if (deviceType === 'ipad-air') return '-80px';
    if (deviceType === 'ipad-mini') return '-70px';
    if (deviceType === 'surface') return '-90px';
    if (deviceType === 'foldable') return '-40px';
    if (deviceType === 'tablet') return '-100px';
    return '-200px';
  };

  const getImageHeight = () => {
    if (deviceType === 'small' || deviceType === 'mobile') return 'auto';
    if (deviceType === 'ipad-pro') return '85vh';
    if (deviceType === 'ipad-air') return '80vh';
    if (deviceType === 'ipad-mini') return '75vh';
    if (deviceType === 'surface') return '80vh';
    if (deviceType === 'foldable') return '75vh';
    if (deviceType === 'tablet') return '85vh';
    return '700px';
  };

  return (
    <section ref={ref} className={`relative w-full min-h-screen overflow-hidden flex items-center lg:items-end justify-center pt-24 lg:pt-0 hero-section device-type-${deviceType}`}>
      <div className="absolute inset-0 bg-gradient-radial from-[#0a1428] via-[#0a1428] to-[#0d1b33] z-0"></div>
      
      <div className="absolute inset-0 z-0 bg-blend-overlay opacity-40">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,#e19d2425_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-[radial-gradient(ellipse_at_top,#e19d2415_0%,transparent_80%)] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,#e19d2420_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_left,#e19d2418_0%,transparent_80%)] blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_right,#e19d2418_0%,transparent_80%)] blur-3xl"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <div 
              key={index} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#e19d2410_0%,transparent_50%)] mist-animation"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#e19d2410_0%,transparent_50%)] mist-animation-reverse"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full py-5 z-50 md:hidden flex justify-center content-absolute">
        <img 
          src={logo} 
          alt="Mobile Logo" 
          className="h-12 w-auto drop-shadow-lg" 
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <div 
            className="w-full lg:w-5/12 xl:w-1/2 space-y-8 relative px-4 hero-text-column" 
            style={{ marginTop: getTextMarginTop() }}
          >
            {/* Logo modificado - sem fundo */}
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
                <span className="block text-gray-100">Potencialize sua</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
                  Excelência Educacional
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
                Para Profissionais com Experiência e Educadores Natos que buscam expandir seu impacto com o Método de Cristofer Leone
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
                <motion.a
                  href="https://pay.hotmart.com/D98067996F?_hi=eyJjaWQiOiIxNzM5NjU1NjQwNDExNjI4MzUzMDQ4MjMyOTUxODAwIiwiYmlkIjoiMTczOTY1NTY0MDQxMTYyODM1MzA0ODIzMjk1MTgwMCIsInNpZCI6Ijc4NjE1YWEzM2I4MDQwYWNhODg4MTZlZDNlMDY5MzhiIn0=.1741553142689&bid=1741553148353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white hover:shadow-xl transition-all duration-300 hover:gap-4 relative overflow-hidden ${
                    deviceType === 'ipad-pro' ? 'px-10 py-5 text-xl rounded-xl gap-4' : 
                    deviceType === 'ipad-air' || deviceType === 'surface' ? 'px-9 py-4 text-lg rounded-xl' : 
                    deviceType === 'ipad-mini' || deviceType === 'foldable' ? 'px-8 py-4 text-base' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Iniciar Transformação</span>
                  <ArrowRight className="transition-all relative z-10" size={getIconSize()} />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#e19d24] to-[#d3891a] opacity-0 hover:opacity-20 transition-all duration-300 golden-shine"></div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

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
              
              <div className="absolute -left-10 top-1/4 w-20 h-20 rounded-full border border-[#e19d2430] opacity-40"></div>
              <div className="absolute -right-10 top-1/3 w-16 h-16 rounded-full border border-[#e19d2430] opacity-40"></div>
              <div className="absolute left-1/4 -bottom-10 w-24 h-24 rounded-full border border-[#e19d2430] opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          25% { opacity: 0.8; }
          50% { transform: translate(20px, -20px) rotate(180deg); opacity: 0.4; }
          75% { opacity: 0.6; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0; }
        }
        
        .particle {
          position: absolute;
          background-color: #e19d24;
          border-radius: 50%;
          animation: floatParticle linear infinite;
          opacity: 0;
          box-shadow: 0 0 10px 2px rgba(225, 157, 36, 0.3);
        }
        
        @keyframes mistAnimation {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(30px, -20px) scale(1.1); opacity: 0.5; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        }
        
        @keyframes mistAnimationReverse {
          0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(-20px, 10px) scale(1.05); opacity: 0.4; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
        }
        
        .mist-animation {
          animation: mistAnimation 20s ease-in-out infinite;
        }
        
        .mist-animation-reverse {
          animation: mistAnimationReverse 15s ease-in-out infinite;
        }
        
        @keyframes goldenShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .golden-shine:before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%);
          transform: skewX(-25deg);
          animation: goldenShine 3s infinite;
        }
        
        @media (max-width: 768px) {
          section {
            background: #0a1428 !important;
            min-height: auto;
            height: ${screenHeight < 700 ? '100vh' : '95vh'};
            max-height: 100vh;
            position: relative;
            overflow: visible;
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
          
          .w-full.lg\\:w-7\\/12 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 70%;
            margin-top: 0 !important;
            overflow: hidden;
            z-index: 10;
          }

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

          .w-full.lg\\:w-7\\/12:after {
            content: '';
            position: absolute;
            bottom: 10%;
            left: 0;
            right: 0;
            height: 30%;
            background: radial-gradient(ellipse at bottom, rgba(225, 157, 36, 0.15), transparent 70%);
            z-index: 5;
            pointer-events: none;
          }

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

          .w-full.lg\\:w-5\\/12:before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to top, 
              rgba(10, 20, 40, 0.92), 
              rgba(10, 20, 40, 0.85) 85%);
            backdrop-filter: blur(10px);
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
            z-index: -1;
            box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.2);
          }
          
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

          @media (max-height: 667px) {
            section {
              height: 100vh;
              min-height: 100vh;
            }
            
            .w-full.lg\\:w-7\\/12 {
              height: 65%;
            }
            
            .cristofer-image {
              object-position: 50% 15%;
            }
            
            .w-full.lg\\:w-5\\/12 {
              padding: 1rem 1rem 1.25rem;
            }
          }
          
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
        
        @media (min-width: 768px) and (max-width: 1366px) {
          .device-type-ipad-pro .hero-section {
            height: 100vh !important;
          }
          
          .device-type-ipad-pro .cristofer-image {
            object-position: center 5% !important;
          }
          
          .device-type-ipad-air .hero-section,
          .device-type-ipad-mini .hero-section {
            height: 100vh !important;
          }
          
          .device-type-ipad-air .cristofer-image,
          .device-type-ipad-mini .cristofer-image {
            object-position: center 10% !important;
          }
          
          .device-type-surface .hero-section {
            height: 100vh !important;
          }
          
          .device-type-surface .cristofer-image {
            object-position: center 15% !important;
          }
          
          .device-type-foldable .hero-section {
            height: 100vh !important;
          }
          
          .device-type-foldable .cristofer-image {
            object-position: center 10% !important;
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