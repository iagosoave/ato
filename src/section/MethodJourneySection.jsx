import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';
import back from './back3.png';

const MethodJourneySection = () => {
  const journeySteps = [
    {
      step: 1,
      title: "AUTOCONHECIMENTO",
      subtitle: "Despertando seu mentor interior",
      icon: <CheckCircle className="text-white" size={20} />,
      highlights: [
        "Mapa da Essência – Exercício para definir seus pontos fortes",
        "Ressignificação de Experiências",
        "Arquetipagem do Mentor",
        "Ativação do Mentor Interior"
      ]
    },
    {
      step: 2,
      title: "TRANSFORMAÇÃO",
      subtitle: "Estruture seu método e posicionamento",
      icon: <Star className="text-white" size={20} />,
      highlights: [
        "Framework do Método ATO",
        "Construção da Jornada do Mentorando",
        "Desenvolvimento do Produto de Mentoria",
        "Posicionamento Estratégico e Marca Pessoal"
      ]
    },
    {
      step: 3,
      title: "ORIENTAÇÃO",
      subtitle: "Monetize sua mentoria e escale seu impacto",
      icon: <TrendingUp className="text-white" size={20} />,
      highlights: [
        "Precificação e Modelos de Monetização",
        "Construção da Oferta Irresistível",
        "Estratégias de Captação de Clientes",
        "Plano de Escala e Posicionamento Avançado"
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-[#0c1220]/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-2 sm:mb-3">
            A Jornada do
          </h2>
          <div className="mb-4 sm:mb-5 md:mb-6">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              Método ATO
            </span>
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2 sm:px-4">
            Três etapas de transformação para converter seu conhecimento em uma mentoria de impacto
          </p>
        </motion.div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {journeySteps.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              variants={fadeInUp}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              <div className="relative p-5 sm:p-7 md:p-8 bg-[#16202d]/95 backdrop-blur-sm rounded-2xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all duration-300 h-full hover:transform hover:scale-[1.02]">
                {/* Subtle background effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e19d2405_0%,transparent_70%)] rounded-2xl" />
                
                {/* Card Header */}
                <div className="relative flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="p-2.5 sm:p-3 md:p-4 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-xl shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-100 mb-1">
                      Etapa {item.step}
                    </h3>
                    <p className="text-xs sm:text-base text-[#e19d24] font-bold uppercase tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#c8d4e6] font-medium mt-0.5 sm:mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Highlights List */}
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 relative">
                  {item.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                      <CheckCircle className="text-[#e19d24] flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-xs sm:text-sm text-[#c8d4e6]/90 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e19d24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodJourneySection;