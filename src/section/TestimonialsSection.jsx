import React, { useEffect, useState, forwardRef } from 'react';
import { Quote, Star } from 'lucide-react';
import carlos from './carlos.png';
import juliana from './juliana.png';
import ana from './ana.png';
import rafael from './rafael.png';

const TestimonialsSection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // State básicos
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Pré-carregamento das imagens para evitar bugs durante a transição
  useEffect(() => {
    // Pré-carregar todas as imagens
    const preloadImages = () => {
      const images = [carlos, juliana, ana, rafael];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);
  
  useEffect(() => {
    // Detectar mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Rotação básica de depoimentos com animação suave
    const timer = setInterval(() => {
      handleTestimonialChange((activeIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(timer);
    };
  }, [activeIndex]);

  // Dados dos depoimentos com fotos adicionadas
  const testimonials = [
    {
      name: "Carlos Menezes",
      role: "Executivo e Mentor de Negócios",
      quote: "Trabalhei anos em empresas e acumulei muito conhecimento, mas nunca soube como transformar isso em um ativo financeiro para mim mesmo. O Cris mostrou exatamente como estruturar meu conhecimento e criar um modelo de mentoria que faz sentido para o mercado. Hoje, já estou fechando contratos como mentor e, além da renda extra, descobri um propósito incrível ajudando outros profissionais a crescerem.",
      stars: 5,
      photo: carlos
    },
    {
      name: "Ana Paula Souza",
      role: "Especialista em Educação e Mentora",
      quote: "Eu sempre amei ensinar, mas sentia que estava preso a um sistema que limitava meu crescimento financeiro. Com o Cris, aprendi como estruturar mentorias sem precisar depender de instituições. Consegui criar um programa próprio e atrair alunos de forma independente. Hoje, gero mais impacto, tenho liberdade e transformei meu conhecimento em um negócio lucrativo sem precisar sair da área que eu amo.",
      stars: 5,
      photo: ana
    },
    {
      name: "Rafael Lima",
      role: "Consultor e Mentor Estratégico",
      quote: "Eu já trabalhava como consultor, mas sempre senti que poderia entregar mais para meus clientes. O problema era que eu não sabia como estruturar isso de forma escalável. Com o Cris, aprendi a diferenciar mentoria de consultoria e como criar um programa contínuo que gera transformação real para meus mentorados. Meu faturamento aumentou, meu trabalho ficou mais estratégico e meus clientes valorizam muito mais o que eu entrego.",
      stars: 5,
      photo: rafael
    },
    {
      name: "Juliana Castro",
      role: "Mentora de Desenvolvimento Pessoal",
      quote: "Eu sempre consumi muito conteúdo sobre autoconhecimento e desenvolvimento humano, mas não sabia como monetizar esse conhecimento sem parecer apenas mais uma. Agora, tenho clareza sobre como estruturar uma mentoria real e como gerar transformação nos meus clientes, sem precisar inventar fórmulas mirabolantes.",
      stars: 5,
      photo: juliana
    }
  ];

  // Função melhorada para troca de depoimento com transição
  const handleTestimonialChange = (index) => {
    if (isTransitioning || index === activeIndex) return;
    
    setIsTransitioning(true);
    
    // Aplicar a transição após um pequeno delay
    setTimeout(() => {
      setActiveIndex(index);
      
      // Remover o estado de transição após a mudança
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Duração da transição
    }, 50);
  };

  // Depoimento atual
  const currentTestimonial = testimonials[activeIndex];

  return (
    <section 
      ref={ref} 
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
        
        {/* Container do depoimento - com transição suave */}
        <div 
          className={`max-w-4xl mx-auto bg-[#16202d] p-6 rounded-xl border border-[#e19d24]/20 mb-6 relative transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Foto circular com melhor precarregamento */}
          <div className="flex items-center justify-center mb-4">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#e19d24] bg-[#0f1825]"
              style={{ position: 'relative' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
                  style={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    zIndex: activeIndex === index ? 10 : 1
                  }}
                >
                  <img 
                    src={testimonial.photo} 
                    alt={`Foto de ${testimonial.name}`} 
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: testimonial.name === "Ana Paula Souza" || testimonial.name === "Juliana Castro" 
                        ? "center 30%" 
                        : "center center" 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Ícone de citação */}
          <div className="flex justify-center mb-4">
            <Quote className="text-[#e19d24]" size={isMobile ? 24 : 32} />
          </div>
          
          {/* Texto do depoimento */}
          <p className="text-sm md:text-base text-[#c8d4e6] mb-6 text-center italic min-h-[120px] md:min-h-[100px]">
            "{currentTestimonial.quote}"
          </p>
          
          {/* Informações do autor */}
          <div className="flex flex-col items-center">
            <div className="flex mb-2">
              {Array(currentTestimonial.stars).fill(0).map((_, i) => (
                <Star key={i} className="text-[#e19d24] fill-[#e19d24]" size={16} />
              ))}
            </div>
            <p className="font-semibold text-white text-base">{currentTestimonial.name}</p>
            <p className="text-xs md:text-sm text-[#c8d4e6]">{currentTestimonial.role}</p>
          </div>
        </div>
        
        {/* Indicadores aprimorados com feedback visual */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#e19d24] scale-110' 
                  : 'bg-[#c8d4e6]/30 hover:bg-[#c8d4e6]/50'
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
              aria-label={`Ver depoimento ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
        
        {/* CTA simples */}
        <div className="text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg hover:bg-[#d3891a] transition-colors">
            QUERO ME TRANSFORMAR EM MENTOR DE ELITE
          </button>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;