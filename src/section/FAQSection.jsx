import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = forwardRef(({ noBackground = false }, ref) => {
  // State for detecting mobile
  const [isMobile, setIsMobile] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);
    
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // FAQ Data
  const faqData = [
    {
      question: "Para quem é essa formação?",
      answer: "Essa formação é para Profissionais com Experiência, Educadores Natos, Agentes de Transformação, Empreendedores Visionários que querem transformar sua expertise em uma mentoria estruturada e lucrativa. Se você tem conhecimento acumulado, experiência no seu setor e deseja impactar vidas enquanto monetiza sua jornada, essa formação é para você."
    },
    {
      question: "Preciso ter experiência como mentor para participar?",
      answer: "Não! O Método ATO foi criado para guiar tanto iniciantes quanto quem já atua ajudando pessoas. Você sairá com um passo a passo validado para aplicar imediatamente, mesmo que nunca tenha mentorado antes."
    },
    {
      question: "Qual a diferença entre essa formação e um curso online sobre mentoria?",
      answer: "Aqui você terá experiência presencial, com dinâmicas práticas, networking real e suporte direto. Diferente de um curso online, onde você aprende sozinho, aqui você terá mentoria ao vivo, aplicando o que aprende na hora e recebendo feedback individualizado."
    },
    {
      question: "O que exatamente vou sair sabendo ao final da formação?",
      answer: "Ao final dos três dias, você terá:\n• Clareza sobre seu posicionamento como mentor\n• Um método estruturado para sua mentoria\n• Um plano de monetização pronto para aplicar\n• Ferramentas para atrair e converter clientes certos\n• Confiança para conduzir mentorias com impacto"
    },
    {
      question: "Como funciona o suporte e acompanhamento depois da formação?",
      answer: "Após a formação, você terá acesso a um grupo exclusivo de mentores para troca de insights e dúvidas. Além disso, oferecemos sessões de acompanhamento para garantir que você aplique o método e obtenha resultados reais."
    }
  ];

  // Toggle question open/closed
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section ref={ref} className="relative w-full py-5 sm:py-16 md:py-20 lg:py-28 bg-[#0c1220] overflow-hidden flex items-center justify-center min-h-[auto] sm:min-h-[90vh] md:min-h-screen faq-section">
      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 relative mobile-adjust">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-4 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 sm:mb-6">
            Perguntas 
            <span className="inline-mobile text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] sm:block sm:mt-2 ml-1 sm:ml-0">
              Frequentes
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-[#c8d4e6] max-w-2xl mx-auto px-2">
            Tire suas dúvidas sobre o Método ATO e sua jornada de transformação
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-4xl mx-auto space-y-2 sm:space-y-4"
        >
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#16202d] rounded-xl border border-[#e19d24]/20 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-3 sm:p-5 text-left hover:bg-[#1c263a] transition-colors group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <HelpCircle 
                    className={`text-[#e19d24] transition-transform ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`} 
                    size={isMobile ? 18 : 24} 
                  />
                  <span className="text-sm sm:text-lg text-gray-100 font-semibold">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`text-[#c8d4e6] transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`} 
                  size={isMobile ? 18 : 24} 
                />
              </button>
              
              {openQuestion === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="p-3 sm:p-5 bg-[#1c263a] text-[#c8d4e6]"
                >
                  <p className="text-xs sm:text-base leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mt-6 sm:mt-12 md:mt-16"
        >
          <p className="text-xs sm:text-lg text-[#c8d4e6] max-w-2xl mx-auto mb-4 sm:mb-6">
            Ainda tem alguma dúvida? Nossa equipe está pronta para ajudar você a dar o próximo passo.
          </p>
          <a 
  href="https://wa.me/5511993200188"
  target="_blank"
  rel="noopener noreferrer" 
  className="inline-block"
>
  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mb-8 w-full sm:w-auto shadow-lg">
    FALAR COM NOSSA EQUIPE
  </button>
</a>
        </motion.div>
      </div>
  
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .faq-section {
            margin-top: 0;
            padding: 1rem 0;
            z-index: 30;
            min-height: auto !important;
          }
          
          .faq-section h2 {
            line-height: 1.2;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
          
          .faq-section p {
            margin-top: 0.25rem;
            font-size: 0.75rem;
          }
          
          .faq-section .space-y-2 > div {
            margin-bottom: 0.5rem;
          }
          
          .faq-section .inline-mobile {
            display: inline;
            margin-left: 0.25rem;
          }
          
          .faq-section button {
            min-height: 3rem;
          }
          
          .faq-section button span {
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;