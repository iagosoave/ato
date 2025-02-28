import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import cristofer from './cristofer.png';
import logo from './logo.png';

const Hero = () => {
  // Generate connection nodes
  const connectionNodes = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      connections: Math.floor(Math.random() * 3) + 1
    }));
  }, []);

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
    <section className="relative w-full min-h-screen bg-[#1a2332] overflow-hidden flex items-center justify-center pt-24 lg:pt-0">
      {/* Connection Network Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#1a2332] to-[#e19d24]/20 opacity-90"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />

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

        {/* Particle Overlay */}
        <div className="absolute inset-0 opacity-[0.1]">
          <div 
            className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(225,157,36,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(225,157,36,0.05)_1px,transparent_1px)]"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 relative max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Coluna de texto */}
          <div className="w-full lg:w-5/12 xl:w-1/2 space-y-8 relative px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative text-center lg:text-left"
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
                className="text-4xl md:text-5xl font-bold leading-tight"
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
                className="text-lg md:text-xl text-[#c8d4e6] mt-6 max-w-xl mx-auto lg:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Domine as estratégias de mentoria de alta performance com o método comprovado de Cristofer Leone
              </motion.p>

              <motion.div
                className="mt-10 flex justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] rounded-xl text-lg font-semibold text-white hover:shadow-xl transition-all duration-300 hover:gap-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar Jornada
                  <ArrowRight className="transition-all" size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Coluna da imagem ajustada */}
          <div className="w-full lg:w-7/12 xl:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative z-20 transform lg:translate-x-10">
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
                  className="w-full h-[600px] md:h-[700px] object-cover object-top scale-[1.02] lg:scale-100 cristofer-image"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)',
                    maskImage: 'linear-gradient(to right, black 85%, transparent 98%)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx global>{`
        /* Estilos para assegurar que as conexões apareçam em dispositivos móveis */
        @media (max-width: 768px) {
          .connections-bg {
            display: block !important;
            visibility: visible !important;
            opacity: 0.7 !important;
            z-index: 1 !important;
          }
          
          .smoke-effect {
            display: block !important;
            visibility: visible !important;
            opacity: 0.7 !important;
            z-index: 10 !important;
          }
          
          .cristofer-image {
            position: relative !important;
            z-index: 5 !important;
          }
        }
      `}</style>

      {/* Media queries ajustadas */}
      <style jsx>{`
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    padding-bottom: 0;
  }

  img[alt="Logo"] {
    margin-top: 0;
    height: 4.5rem;
  }

  img[alt="Cristofer Leone"] {
    height: auto !important;
    min-height: 75vh;
    margin-top: 1.5rem;
    margin-bottom: 0;
    object-position: top;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
    mask-image: none !important;
    width: 100%;
  }

  button {
    width: auto;
    max-width: 100%;
  }
  
  section {
    padding-top: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  /* Garantir que a imagem chegue até o final da section */
  section > div.container {
    margin-bottom: 0;
  }
  
  section > div.container > div {
    margin-bottom: 0;
  }
  
  /* Ajuste para a imagem ficar grudada no fundo */
  div.w-full.lg\\:w-7\\/12 {
    margin-top: 1rem;
    margin-bottom: 0;
    padding-bottom: 0;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  div.relative.z-20 {
    height: 100%;
    width: 100%;
    transform: none !important;
  }
}

@media (max-width: 640px) {
  .container {
    padding-top: 1.5rem;
  }
  
  img[alt="Logo"] {
    height: 4rem;
    margin-bottom: 1.5rem;
  }
  
  h1 {
    font-size: 2.25rem;
  }
  
  img[alt="Cristofer Leone"] {
    min-height: 65vh;
  }
}

@media (max-height: 700px) and (max-width: 768px) {
  img[alt="Cristofer Leone"] {
    min-height: 55vh;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  
  .mt-10 {
    margin-top: 1.5rem;
  }
  
  .container {
    padding-top: 1rem;
  }
  
  section {
    min-height: 100%;
  }
}
      `}</style>
    </section>
  );
};

export default Hero;