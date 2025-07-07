import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AudienceSection = ({ deviceType = 'desktop', id }) => {
  const isMobile = ['mobile', 'small'].includes(deviceType);
  
  const targetAudience = [
    {
      title: "Profissionais com Experiência",
      description: "Que querem utilizar sua expertise para ensinar e impactar vidas"
    },
    {
      title: "Educadores Natos",
      description: "Que já compartilham conhecimento mas querem monetizar de forma estratégica"
    },
    {
      title: "Empreendedores Visionários",
      description: "Que desejam transformar seus negócios em uma mentoria estruturada"
    },
    {
      title: "Agentes de Transformação",
      description: "Que sentem o chamado para ajudar pessoas usando suas experiências pessoais"
    }
  ];

  return (
    <section 
      id={id}
      className="audience-section relative w-full py-16 md:py-20 bg-[#0c1220] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-6">
            Para Quem é a
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              Formação Método ATO?
            </span>
          </h2>
          <p className="text-base md:text-xl text-[#c8d4e6] max-w-2xl mx-auto">
            Descubra se você se encaixa no perfil dos profissionais que transformamos em mentores atômicos
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative p-6 bg-[#16202d] rounded-xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg shadow-lg flex-shrink-0">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#c8d4e6]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;