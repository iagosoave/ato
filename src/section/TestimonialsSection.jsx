import React, { useEffect, useState, forwardRef, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Importações estáticas das imagens, mas sem carregá-las imediatamente
// Com importações dinâmicas, mantemos as referências às imagens
const imageImports = {
  carlos: () => import('./carlos.avif'),
  juliana: () => import('./juliana.avif'),
  ana: () => import('./ana.avif'),
  rafael: () => import('./rafael.avif')
};

const TestimonialsSection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State básicos
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageCache, setImageCache] = useState({});
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const observerRef = useRef(null);
  
  // Dados dos depoimentos
  const testimonials = [
    {
      name: "Carlos Menezes",
      role: "Executivo e Mentor de Negócios",
      quote: "Trabalhei anos em empresas e acumulei muito conhecimento, mas nunca soube como transformar isso em um ativo financeiro para mim mesmo. O Cris mostrou exatamente como estruturar meu conhecimento e criar um modelo de mentoria que faz sentido para o mercado. Hoje, já estou fechando contratos como mentor e, além da renda extra, descobri um propósito incrível ajudando outros profissionais a crescerem.",
      stars: 5,
      photoKey: 'carlos'
    },
    {
      name: "Ana Paula Souza",
      role: "Especialista em Educação e Mentora",
      quote: "Eu sempre amei ensinar, mas sentia que estava preso a um sistema que limitava meu crescimento financeiro. Com o Cris, aprendi como estruturar mentorias sem precisar depender de instituições. Consegui criar um programa próprio e atrair alunos de forma independente. Hoje, gero mais impacto, tenho liberdade e transformei meu conhecimento em um negócio lucrativo sem precisar sair da área que eu amo.",
      stars: 5,
      photoKey: 'ana'
    },
    {
      name: "Rafael Lima",
      role: "Consultor e Mentor Estratégico",
      quote: "Eu já trabalhava como consultor, mas sempre senti que poderia entregar mais para meus clientes. O problema era que eu não sabia como estruturar isso de forma escalável. Com o Cris, aprendi a diferenciar mentoria de consultoria e como criar um programa contínuo que gera transformação real para meus mentorados. Meu faturamento aumentou, meu trabalho ficou mais estratégico e meus clientes valorizam muito mais o que eu entrego.",
      stars: 5,
      photoKey: 'rafael'
    },
    {
      name: "Juliana Castro",
      role: "Mentora de Desenvolvimento Pessoal",
      quote: "Eu sempre consumi muito conteúdo sobre autoconhecimento e desenvolvimento humano, mas não sabia como monetizar esse conhecimento sem parecer apenas mais uma. Agora, tenho clareza sobre como estruturar uma mentoria real e como gerar transformação nos meus clientes, sem precisar inventar fórmulas mirabolantes.",
      stars: 5,
      photoKey: 'juliana'
    }
  ];

  // Função para carregar imagens quando necessário
  const loadImages = async () => {
    if (!isVisible) return;
    
    try {
      // Carrega apenas as imagens que ainda não estão em cache
      const imagesToLoad = testimonials
        .map(t => t.photoKey)
        .filter(key => !imageCache[key]);
      
      if (imagesToLoad.length === 0) return;
      
      // Carrega as imagens em paralelo
      const loadedImages = {};
      await Promise.all(
        imagesToLoad.map(async (key) => {
          try {
            // Importa a imagem dinâmicamente
            const imageModule = await imageImports[key]();
            loadedImages[key] = imageModule.default;
          } catch (error) {
            console.error(`Erro ao carregar imagem ${key}:`, error);
          }
        })
      );
      
      // Atualiza o cache com as novas imagens
      setImageCache(prev => ({
        ...prev,
        ...loadedImages
      }));
    } catch (error) {
      console.error("Erro ao carregar imagens:", error);
    }
  };

  // Efeito para detectar visibilidade da seção
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Desconecta após detectar
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Efeito para carregar imagens quando a seção ficar visível
  useEffect(() => {
    if (isVisible) {
      loadImages();
    }
  }, [isVisible]);
  
  // Efeito para detectar mobile e configurar o timer
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Configurar timer para rotação automática
    if (isVisible) {
      timerRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isVisible]);

  // Troca de depoimento manual
  const setTestimonial = (index) => {
    setActiveIndex(index);
  };

  // Depoimento atual
  const currentTestimonial = testimonials[activeIndex];

  return (
    <section 
      ref={(node) => {
        // Para manter ambas as referências
        sectionRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className="relative w-full py-10 bg-[#0c1220] testimonials-section"
    >
      <div className="container mx-auto px-4">
        {/* Título simples */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            O Que Dizem Sobre o
            <span className="block text-[#e19d24] mt-1">
              Método ATO
            </span>
          </h2>
          <p className="text-sm md:text-lg text-[#c8d4e6] max-w-2xl mx-auto">
            Histórias reais de profissionais que aplicaram o Método ATO
          </p>
        </div>
        
        {/* Container do depoimento */}
        <div className="max-w-4xl mx-auto bg-[#16202d] p-6 rounded-xl border border-[#e19d24]/20 mb-6 relative">
          {/* Foto circular - Centralizada */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#e19d24] flex items-center justify-center">
              {imageCache[currentTestimonial.photoKey] ? (
                <img 
                  src={imageCache[currentTestimonial.photoKey]} 
                  alt={`Foto de ${currentTestimonial.name}`} 
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: 
                      currentTestimonial.name === "Ana Paula Souza" 
                        ? "center top" 
                        : currentTestimonial.name === "Juliana Castro"
                          ? "center 30%"
                          : "center"
                  }}
                />
              ) : (
                // Placeholder enquanto a imagem não carregou
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-xs">{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Ícone de citação */}
          <div className="flex justify-center mb-4">
            <Quote className="text-[#e19d24]" size={isMobile ? 24 : 32} />
          </div>
          
          {/* Texto do depoimento - mais curto em mobile */}
          <div className={isMobile ? "max-h-[200px] overflow-y-auto" : ""}>
            <p className="text-sm md:text-base text-[#c8d4e6] mb-6 text-center italic">
              "{currentTestimonial.quote}"
            </p>
          </div>
          
          {/* Informações do autor */}
          <div className="flex flex-col items-center">
            <div className="flex mb-2">
              {Array(currentTestimonial.stars).fill(0).map((_, i) => (
                <Star key={i} className="text-[#e19d24] fill-[#e19d24]" size={isMobile ? 14 : 16} />
              ))}
            </div>
            <p className="font-semibold text-white text-base">{currentTestimonial.name}</p>
            <p className="text-xs md:text-sm text-[#c8d4e6]">{currentTestimonial.role}</p>
          </div>
        </div>
        
        {/* Indicadores simples (pontos) - maiores para facilitar toque em mobile */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonial(index)}
              className={`rounded-full ${
                activeIndex === index ? 'bg-[#e19d24]' : 'bg-[#c8d4e6]/30'
              } ${isMobile ? 'w-4 h-4' : 'w-3 h-3'}`}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA com efeito super simples */}
        <div className="text-center">
          <motion.a 
            href="https://pay.hotmart.com/D98067996F?_hi=eyJjaWQiOiIxNzM5NjU1NjQwNDExNjI4MzUzMDQ4MjMyOTUxODAwIiwiYmlkIjoiMTczOTY1NTY0MDQxMTYyODM1MzA0ODIzMjk1MTgwMCIsInNpZCI6Ijc4NjE1YWEzM2I4MDQwYWNhODg4MTZlZDNlMDY5MzhiIn0=.1741553142689&bid=1741553148353" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              QUERO ME TRANSFORMAR EM UM MENTOR ATÔMICO
            </motion.button>
          </motion.a>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;