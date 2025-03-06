import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const UnifiedBackground = ({ currentSection }) => {
  // State for detecting device types and screen dimensions
  const [deviceType, setDeviceType] = useState('desktop');
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Detecção avançada de dispositivos
      setScreenDimensions({ width, height });
      
      const isIPad = /ipad/.test(userAgent) || (/macintosh/.test(userAgent) && 'ontouchend' in document);
      const isSurface = /windows nt/.test(userAgent) && (width >= 768 && width <= 1024);
      const isFoldable = aspectRatio > 0.65 && aspectRatio < 0.8 && width >= 768 && width <= 1180;
      
      if (width < 768) {
        setDeviceType('mobile');
      } else if (isIPad && width >= 1024) {
        setDeviceType('ipad-pro');
      } else if (isIPad || isSurface || isFoldable || (width <= 1024 && height >= 1000)) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    // Initial check
    handleResize();
    
    // Add listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 200);
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Generate connection nodes for hero section
  const connectionNodes = useMemo(() => {
    // Ajuste a quantidade de nós baseado no tipo de dispositivo
    let nodeCount;
    
    if (deviceType === 'mobile') {
      nodeCount = 8;
    } else if (deviceType === 'tablet' || deviceType === 'ipad-pro') {
      nodeCount = 15; // Valor ideal para tablets
    } else {
      nodeCount = 20;
    }
    
    return Array.from({ length: nodeCount }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      connections: Math.floor(Math.random() * 3) + 1
    }));
  }, [deviceType]);

  // Generate connections between nodes with melhorias para tablets
  const connections = useMemo(() => {
    const conns = [];
    connectionNodes.forEach((node, index) => {
      // Ajuste a distância de conexão para tablets
      const connectionDistance = deviceType === 'tablet' || deviceType === 'ipad-pro' ? 35 : 40;
      
      const potentialTargets = connectionNodes
        .filter((_, targetIndex) => 
          targetIndex !== index && 
          Math.abs(node.x - connectionNodes[targetIndex].x) < connectionDistance &&
          Math.abs(node.y - connectionNodes[targetIndex].y) < connectionDistance
        )
        .slice(0, node.connections);

      potentialTargets.forEach(target => {
        // Opacidade maior para tablets para melhor visibilidade
        const opacity = deviceType === 'tablet' || deviceType === 'ipad-pro' 
          ? Math.random() * 0.4 + 0.15
          : Math.random() * 0.3 + 0.1;
          
        conns.push({
          start: node,
          end: target,
          opacity
        });
      });
    });
    return conns;
  }, [connectionNodes, deviceType]);

  // Generate particles for audience section com melhorias para tablets
  const particles = useMemo(() => {
    let particleCount;
    let scaleRange;
    let durationBase;
    let durationVariation;
    
    // Ajustes específicos para diferentes dispositivos
    if (deviceType === 'mobile') {
      particleCount = 6;
      scaleRange = 0.2;
      durationBase = 4;
      durationVariation = 2;
    } else if (deviceType === 'tablet') {
      particleCount = 14;
      scaleRange = 0.3;
      durationBase = 5;
      durationVariation = 3;
    } else if (deviceType === 'ipad-pro') {
      particleCount = 18;
      scaleRange = 0.3;
      durationBase = 5;
      durationVariation = 4;
    } else {
      particleCount = 20;
      scaleRange = 0.2;
      durationBase = 6;
      durationVariation = 4;
    }
    
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.2 + Math.random() * 0.3,
      animY: -20 + Math.random() * 40,
      animX: -10 + Math.random() * 20,
      scale: 1.1 + Math.random() * scaleRange,
      duration: durationBase + Math.random() * durationVariation
    }));
  }, [deviceType]);

  // Orbe adicional para tablets e iPads
  const tabletOrbs = useMemo(() => {
    if (deviceType !== 'tablet' && deviceType !== 'ipad-pro') return [];
    
    // Criação de orbes específicos para tablets
    return Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      left: 20 + Math.random() * 60, // Distribuição mais centralizada
      top: 20 + Math.random() * 60,
      size: 150 + Math.random() * 100,
      opacity: 0.08 + Math.random() * 0.08,
      animDuration: 8 + Math.random() * 4
    }));
  }, [deviceType]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Base gradient background that changes based on section */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${
          currentSection === 'hero' 
            ? 'from-[#0c1220] via-[#182030] to-[#1d2638]' 
            : 'from-[#0c1220] via-[#182030] to-[#1d2638]'
        }`}
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, #e19d24 1px, transparent 1px), linear-gradient(to bottom, #e19d24 1px, transparent 1px)',
          backgroundSize: deviceType === 'mobile' ? '30px 30px' : 
                         (deviceType === 'tablet' || deviceType === 'ipad-pro') ? '35px 35px' : '40px 40px'
        }} />
      </div>

      {/* Common gradient overlays */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,#e19d2440_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#e19d2430_0%,transparent_50%)]" />
      </div>

      {/* Hero Section Network (conditionally visible based on section) */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${currentSection === 'hero' ? 'opacity-100' : 'opacity-0'}`}>
        <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connection Lines */}
          {connections.map((conn, index) => (
            <motion.line
              key={`conn-${index}`}
              x1={conn.start.x}
              y1={conn.start.y}
              x2={conn.end.x}
              y2={conn.end.y}
              stroke="#e19d24"
              strokeWidth={deviceType === 'tablet' || deviceType === 'ipad-pro' ? "0.4" : "0.3"}
              strokeOpacity={conn.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: currentSection === 'hero' ? 1 : 0 }}
              transition={{
                duration: 2,
                delay: index * 0.05,
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* Connection Nodes */}
          {connectionNodes.map((node) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={deviceType === 'tablet' || deviceType === 'ipad-pro' ? (node.size / 9) : (node.size / 10)}
              fill="#f8c56d"
              fillOpacity="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: currentSection === 'hero' ? 1 : 0,
                opacity: currentSection === 'hero' ? 0.7 : 0
              }}
              transition={{
                duration: 1,
                delay: node.id * 0.05,
                type: "spring",
                stiffness: 100
              }}
            />
          ))}
        </svg>
      </div>

      {/* Audience Section Particles (conditionally visible) */}
      <div className={`absolute inset-0 z-1 transition-opacity duration-500 ${currentSection === 'audience' ? 'opacity-20' : 'opacity-0'}`}>
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className={`absolute rounded-full bg-[#e19d24] ${
              deviceType === 'mobile' ? 'w-1 h-1' : 
              deviceType === 'tablet' ? 'w-1.5 h-1.5' : 
              deviceType === 'ipad-pro' ? 'w-2 h-2' : 'w-1 h-1'
            }`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, particle.animY, 0],
              x: [0, particle.animX, 0],
              scale: [1, particle.scale, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Orbes especiais para tablets e iPads */}
      {tabletOrbs.map((orb) => (
        <motion.div
          key={`tablet-orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: orb.size,
            height: orb.size,
            backgroundColor: '#e19d24',
            opacity: orb.opacity,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [orb.opacity, orb.opacity * 1.3, orb.opacity],
          }}
          transition={{
            duration: orb.animDuration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Ambient glowing orbs (present in both sections) */}
      <motion.div
        className={`absolute top-1/4 right-1/4 rounded-full blur-md sm:blur-2xl bg-[#e19d24]/15 ${
          deviceType === 'ipad-pro' ? 'w-72 h-72' : 
          deviceType === 'tablet' ? 'w-56 h-56' : 
          'w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64'
        }`}
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
      
      <motion.div
        className={`absolute top-2/3 left-1/3 rounded-full blur-md sm:blur-2xl bg-[#e19d24]/15 ${
          deviceType === 'ipad-pro' ? 'w-72 h-72' : 
          deviceType === 'tablet' ? 'w-56 h-56' : 
          'w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64'
        }`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Orbe extra para tablets e iPads - mais sutil, apenas para adicionar profundidade */}
      {(deviceType === 'tablet' || deviceType === 'ipad-pro') && (
        <motion.div
          className="absolute bottom-1/3 right-1/4 rounded-full blur-2xl bg-[#e19d24]/10"
          style={{ width: deviceType === 'ipad-pro' ? '300px' : '250px', height: deviceType === 'ipad-pro' ? '300px' : '250px' }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            delay: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Section transition gradients (mobile only) */}
      {deviceType === 'mobile' && (
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0c1220] to-transparent opacity-70 pointer-events-none z-20" />
      )}
      
      {/* Tablet-specific transition gradient (mais sutil) */}
      {(deviceType === 'tablet' || deviceType === 'ipad-pro') && (
        <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-[#0c1220] to-transparent opacity-50 pointer-events-none z-20" />
      )}
      
      {/* Device-specific optimizations */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Optimize blur effects for better performance in mobile */
          .blur-3xl {
            filter: blur(15px);
          }
          
          .blur-2xl {
            filter: blur(10px);
          }
          
          .blur-md {
            filter: blur(5px);
          }
        }
        
        /* Otimizações específicas para tablets */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Melhor desempenho de blur para iPads */
          .blur-3xl {
            filter: blur(25px);
          }
          
          .blur-2xl {
            filter: blur(20px);
          }
        }
        
        /* Otimizações para iPad Pro e outros tablets premium */
        @media (min-width: 1024px) and (max-width: 1366px) and (min-height: 1000px) {
          /* Efeitos visuais de alta qualidade */
          .blur-3xl {
            filter: blur(30px);
          }
          
          .blur-2xl {
            filter: blur(25px);
          }
        }
      `}</style>
    </div>
  );
};

export default UnifiedBackground;