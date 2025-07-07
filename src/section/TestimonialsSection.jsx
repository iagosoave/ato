import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from './back1.png';
import carlosPhoto from './carlos.avif';
import julianaPhoto from './juliana.avif';
import anaPhoto from './ana.avif';
import rafaelPhoto from './rafael.avif';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Dados dos depoimentos
  const testimonials = [
    {
      name: "Carlos Menezes",
      role: "Executivo e Mentor de Negócios",
      quote: "Trabalhei anos em empresas e acumulei muito conhecimento, mas nunca soube como transformar isso em um ativo financeiro para mim mesmo. O Cris mostrou exatamente como estruturar meu conhecimento e criar um modelo de mentoria que faz sentido para o mercado. Hoje, já estou fechando contratos como mentor e, além da renda extra, descobri um propósito incrível ajudando outros profissionais a crescerem.",
      stars: 5,
      photo: carlosPhoto
    },
    {
      name: "Ana Paula Souza",
      role: "Especialista em Educação e Mentora",
      quote: "Eu sempre amei ensinar, mas sentia que estava presa a um sistema que limitava meu crescimento financeiro. Com o Cris, aprendi como estruturar mentorias sem precisar depender de instituições. Consegui criar um programa próprio e atrair alunos de forma independente. Hoje, gero mais impacto, tenho liberdade e transformei meu conhecimento em um negócio lucrativo sem precisar sair da área que eu amo.",
      stars: 5,
      photo: anaPhoto,
      photoPosition: "center top"
    },
    {
      name: "Rafael Lima",
      role: "Consultor e Mentor Estratégico",
      quote: "Eu já trabalhava como consultor, mas sempre senti que poderia entregar mais para meus clientes. O problema era que eu não sabia como estruturar isso de forma escalável. Com o Cris, aprendi a diferenciar mentoria de consultoria e como criar um programa contínuo que gera transformação real para meus mentorados. Meu faturamento aumentou, meu trabalho ficou mais estratégico e meus clientes valorizam muito mais o que eu entrego.",
      stars: 5,
      photo: rafaelPhoto
    },
    {
      name: "Juliana Castro",
      role: "Mentora de Desenvolvimento Pessoal",
      quote: "Eu sempre consumi muito conteúdo sobre autoconhecimento e desenvolvimento humano, mas não sabia como monetizar esse conhecimento sem parecer apenas mais uma. Agora, tenho clareza sobre como estruturar uma mentoria real e como gerar transformação nos meus clientes, sem precisar inventar fórmulas mirabolantes.",
      stars: 5,
      photo: julianaPhoto,
      photoPosition: "center 30%"
    }
  ];

  // Rotação automática dos depoimentos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section 
      className="relative w-full py-20 bg-[#0c1220] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-[#0c1220]/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            O Que Dizem Sobre o
            <span className="block text-[#e19d24] mt-2">
              Método ATO
            </span>
          </h2>
          <p className="text-lg text-[#c8d4e6] max-w-2xl mx-auto">
            Histórias reais de profissionais que aplicaram o Método ATO
          </p>
        </div>
        
        {/* Container do depoimento */}
        <div className="max-w-4xl mx-auto bg-[#16202d]/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#e19d24]/20 mb-8">
          {/* Foto circular */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-[#e19d24] shadow-lg">
              <img 
                src={currentTestimonial.photo} 
                alt={`Foto de ${currentTestimonial.name}`} 
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: currentTestimonial.photoPosition || "center"
                }}
              />
            </div>
          </div>
          
          {/* Ícone de citação */}
          <div className="flex justify-center mb-6">
            <Quote className="text-[#e19d24]" size={40} />
          </div>
          
          {/* Texto do depoimento */}
          <p className="text-base md:text-lg text-[#c8d4e6] mb-8 text-center italic leading-relaxed">
            "{currentTestimonial.quote}"
          </p>
          
          {/* Informações do autor */}
          <div className="flex flex-col items-center">
            <div className="flex mb-3">
              {Array(currentTestimonial.stars).fill(0).map((_, i) => (
                <Star key={i} className="text-[#e19d24] fill-[#e19d24]" size={20} />
              ))}
            </div>
            <p className="font-semibold text-white text-lg">{currentTestimonial.name}</p>
            <p className="text-sm text-[#c8d4e6]">{currentTestimonial.role}</p>
          </div>
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#e19d24] w-8' 
                  : 'bg-[#c8d4e6]/30 hover:bg-[#c8d4e6]/50'
              }`}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <motion.a 
            href="https://pay.hotmart.com/D98067996F?_hi=eyJjaWQiOiIxNzM5NjU1NjQwNDExNjI4MzUzMDQ4MjMyOTUxODAwIiwiYmlkIjoiMTczOTY1NTY0MDQxMTYyODM1MzA0ODIzMjk1MTgwMCIsInNpZCI6Ijc4NjE1YWEzM2I4MDQwYWNhODg4MTZlZDNlMDY5MzhiIn0=.1741553142689&bid=1741553148353" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO ME TRANSFORMAR EM UM MENTOR ATÔMICO
            </motion.button>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;