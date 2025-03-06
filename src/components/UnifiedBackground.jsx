import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const UnifiedBackground = ({ currentSection }) => {
  // State for detecting mobile and screen dimensions
  const [isMobile, setIsMobile] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
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
    // Reduce number of nodes on mobile
    const nodeCount = isMobile ? 8 : 20;
    
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

  // Generate particles for audience section
  const particles = useMemo(() => {
    const particleCount = isMobile ? 6 : 20;
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.2 + Math.random() * 0.3,
      animY: -20 + Math.random() * 40,
      animX: -10 + Math.random() * 20,
      scale: 1.1 + Math.random() * 0.2,
      duration: isMobile ? 4 + Math.random() * 2 : 6 + Math.random() * 4
    }));
  }, [isMobile]);

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
          backgroundSize: isMobile ? '30px 30px' : '40px 40px'
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
              strokeWidth="0.3"
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
              r={node.size / 10}
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
            className="absolute w-1 h-1 rounded-full bg-[#e19d24]"
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

      {/* Ambient glowing orbs (present in both sections) */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#e19d24]/15 rounded-full blur-md sm:blur-2xl"
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
        className="absolute top-2/3 left-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#e19d24]/15 rounded-full blur-md sm:blur-2xl"
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

      {/* Section transition gradients (mobile only) */}
      {isMobile && (
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0c1220] to-transparent opacity-70 pointer-events-none z-20" />
      )}
      
      {/* Mobile-specific optimizations */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Optimize blur effects for better performance */
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
      `}</style>
    </div>
  );
};

export default UnifiedBackground;