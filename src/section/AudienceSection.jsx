import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AudienceSection = () => {
  // Estado para detectar mobile apenas com useEffect para evitar SSR issues
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
    
  // Dados para a seção
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

  // Número de partículas baseado no dispositivo
  const particleCount = isMobile ? 6 : 20;

  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen audience-section">
      {/* Fundo com elementos visuais */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#182030] to-[#1d2638]" />
        
        {/* Gradientes de fundo */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,#e19d2440_0%,transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#e19d2430_0%,transparent_50%)]" />
        </div>
  
        {/* Grid de fundo - ocultado em mobile muito pequeno */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, #e19d24 1px, transparent 1px), linear-gradient(to bottom, #e19d24 1px, transparent 1px)',
            backgroundSize: isMobile ? '30px 30px' : '40px 40px'
          }} />
        </div>
  
        {/* Partículas animadas com número reduzido em mobile */}
        <div className="absolute inset-0 z-1 opacity-20">
          {Array.from({ length: particleCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#e19d24]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.3,
              }}
              animate={{
                y: [0, -20 + Math.random() * 40, 0],
                x: [0, -10 + Math.random() * 20, 0],
                scale: [1, 1.1 + Math.random() * 0.2, 1],
              }}
              transition={{
                duration: isMobile ? 4 + Math.random() * 2 : 6 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>
  
      {/* Conteúdo Principal */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative">
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
  
        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 md:gap-8 max-w-6xl mx-auto">
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.05 * index : 0.1 * index }}
              viewport={{ once: true, margin: "-5%" }}
              className="group relative p-3 sm:p-5 md:p-8 bg-[#16202d] rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
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
              
              {/* Efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl md:rounded-2xl" />
            </motion.div>
          ))}
        </div>
  
        {/* Efeitos de Brilho - ajustados para mobile */}
        <div className="absolute -top-20 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#e19d24]/10 rounded-full blur-3xl -z-1" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#e19d24]/10 rounded-full blur-3xl -z-1" />
      </div>
  
      {/* Elementos de Fundo Adicionais */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#e19d24]/15 rounded-full blur-2xl"
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
      
      {/* Transição suave entre as seções em mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Reduzir qualidade de blur em dispositivos móveis para melhor performance */
          .blur-3xl {
            filter: blur(15px);
          }
          
          .blur-2xl {
            filter: blur(10px);
          }
          
          /* Adicionar transição suave no topo para conectar com o Hero */
          .audience-section {
            margin-top: 0;
            padding-top: calc(1.5rem + env(safe-area-inset-top, 0));
            z-index: 30;
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
          
          /* Correção para o espaçamento do título em mobile */
          .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          h2 {
            line-height: 1.3;
          }
          
          p {
            margin-top: 0.5rem;
          }
        }

        /* Fix para dispositivos de tamanho médio (tablets em modo vertical) */
        @media (min-width: 768px) and (max-width: 992px) {
          .audience-section {
            margin-top: -1px;
          }
        }
      `}</style>
    </section>
  );
};

export default AudienceSection;