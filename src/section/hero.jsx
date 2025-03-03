import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import cristofer from './cristofer.png';
import logo from './logo.png';

const Hero = () => {
  // Estado para detectar mobile apenas com useEffect para evitar SSR issues
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate connection nodes
  const connectionNodes = useMemo(() => {
    // Reduzir número de nós em dispositivos móveis
    const nodeCount = isMobile ? 10 : 20;
    
    return Array.from({ length: nodeCount }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      connections: Math.floor(Math.random() * 3) + 1
    }));
  }, [isMobile]);

  // Generate connections between nodes
  const connections = useMemo(() => {
    const conns = [];
    connectionNodes.forEach((node, index) => {
      const potentialTargets = connectionNodes
        .filter((_, targetIndex) => 
          targetIndex !== index && 
          Math.abs(node.x - connectionNodes[targetIndex].x) < 40 &&
          Math.abs(node.y - connectionNodes[targetIndex].y) < 40
        )
        .slice(0, node.connections);

      potentialTargets.forEach(target => {
        conns.push({
          start: node,
          end: target,
          opacity: Math.random() * 0.3 + 0.1
        });
      });
    });
    return conns;
  }, [connectionNodes]);

  return (
    <section className="relative w-full min-h-screen bg-[#1a2332] overflow-hidden flex items-center lg:items-end justify-center pt-24 lg:pt-0">
      {/* Logo for mobile only */}
      <div className="absolute top-0 left-0 w-full py-5 z-50 md:hidden flex justify-center">
        <img 
          src={logo} 
          alt="Mobile Logo" 
          className="h-12 w-auto drop-shadow-lg" 
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#182030] to-[#1d2638] opacity-90"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />

        {/* Grid de fundo - ocultado em mobile muito pequeno */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, #e19d24 1px, transparent 1px), linear-gradient(to bottom, #e19d24 1px, transparent 1px)',
            backgroundSize: isMobile ? '30px 30px' : '40px 40px'
          }} />
        </div>

        {/* Connection Network */}
        <svg className="absolute inset-0 connections-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connection Lines */}
          {connections.map((conn, index) => (
            <motion.line
              key={index}
              x1={conn.start.x}
              y1={conn.start.y}
              x2={conn.end.x}
              y2={conn.end.y}
              stroke="#e19d24"
              strokeWidth="0.3"
              strokeOpacity={conn.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* Connection Nodes */}
          {connectionNodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill="#f8c56d"
              fillOpacity="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{
                duration: 1,
                delay: node.id * 0.1,
                type: "spring",
                stiffness: 100
              }}
            />
          ))}
        </svg>

        {/* Gradientes de fundo */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,#e19d2440_0%,transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#e19d2430_0%,transparent_50%)]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 relative max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Coluna de texto */}
          <div className="w-full lg:w-5/12 xl:w-1/2 space-y-8 relative px-4" style={{ marginTop: isMobile ? '0' : '-200px' }}>
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
                className="h-20 md:h-24 w-auto filter drop-shadow-xl mx-auto lg:mx-0 mb-8 lg:mb-0" 
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
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
                className="text-base sm:text-lg md:text-xl text-[#c8d4e6] mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Domine as estratégias de mentoria de alta performance com o método comprovado de Cristofer Leone
              </motion.p>

              <motion.div
                className="mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white hover:shadow-xl transition-all duration-300 hover:gap-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar Jornada
                  <ArrowRight className="transition-all" size={isMobile ? 18 : 20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Coluna da imagem ajustada */}
          <div className="w-full lg:w-7/12 xl:w-1/2 relative mt-8 sm:mt-10 md:mt-12 lg:mt-0 lg:h-[calc(100vh-200px)]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e19d2433_0%,transparent_60%)] smoke-effect" />
              <img
                src={cristofer}
                alt="Cristofer Leone"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-top scale-[1.02] lg:scale-100 cristofer-image"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)',
                  maskImage: 'linear-gradient(to right, black 85%, transparent 98%)',
                  position: isMobile ? 'relative' : 'absolute',
                  bottom: '0'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elementos de Fundo Adicionais similares ao AudienceSection */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#e19d24]/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Base structure */
          section {
            background: #1a2332;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
          }

          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0;
            margin: 0;
          }
          
          /* Imagem do Cristofer */
          .w-full.lg\\:w-7\\/12 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 82%;
            margin-top: 0 !important;
            overflow: hidden;
            z-index: 10;
          }

          /* Adiciona gradiente suave na parte inferior para transição com o texto */
          .cristofer-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            clip-path: none !important;
            mask-image: linear-gradient(to bottom, black 90%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%) !important;
            position: absolute !important;
          }

          /* Efeito de destaque ao redor da imagem */
          .w-full.lg\\:w-7\\/12:after {
            content: '';
            position: absolute;
            bottom: 10%;
            left: 0;
            right: 0;
            height: 40%;
            background: radial-gradient(ellipse at bottom, rgba(225, 157, 36, 0.15), transparent 70%);
            z-index: 5;
            pointer-events: none;
          }

          /* Coluna de texto */
          .w-full.lg\\:w-5\\/12 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            margin-top: 0 !important;
            padding: 1.5rem 1.25rem 1.75rem;
            background: transparent;
            z-index: 20;
            text-align: center;
          }

          /* Background semitransparente atrás do texto */
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
          
          /* Efeito de borda brilhante para o componente de texto */
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
          
          /* Reduzir qualidade de blur em dispositivos móveis para melhor performance */
          .blur-3xl {
            filter: blur(15px);
          }
          
          .blur-2xl {
            filter: blur(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;