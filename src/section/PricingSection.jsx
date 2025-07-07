import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, CreditCard, Gift, Zap, ArrowRight, Shield, Clock, AlertTriangle } from 'lucide-react';

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
    
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  const paymentOptions = [
    {
      icon: <CreditCard className="text-white" size={20} />,
      title: "Formas de Pagamento",
      description: "Cartão, PIX e Boleto"
    },
    {
      icon: <Gift className="text-white" size={20} />,
      title: "Bônus Exclusivo",
      description: "Grupo VIP pós-evento"
    },
    {
      icon: <Zap className="text-white" size={20} />,
      title: "Suporte",
      description: "Suporte Vitalício"
    },
    {
      icon: <Tag className="text-white" size={20} />,
      title: "Condições",
      description: "Vagas Limitadas"
    }
  ];

  return (
    <section className="py-20 bg-[#0c1220]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            VOCÊ JÁ TEM CONHECIMENTO.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d]">
              AGORA É HORA DE MONETIZÁ-LO!
            </span>
          </h2>
          <p className="text-xl text-[#c8d4e6] max-w-2xl mx-auto">
            Transforme sua carreira por um investimento que vai mudar sua vida
          </p>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-[#16202d] to-[#0c1220] border border-[#e19d24]/30 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(225,157,36,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none"></div>
            
            <div className="absolute top-0 right-0 bg-[#e19d24] text-[#0c1220] font-bold py-1 px-4 text-sm rounded-bl-xl">
              2º LOTE - TERMINA EM {formatTimeUnit(timeLeft.hours)}:{formatTimeUnit(timeLeft.minutes)}:{formatTimeUnit(timeLeft.seconds)}
            </div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-base text-[#c8d4e6] block mb-1">
                  Aproveite enquanto está disponível
                </span>
                <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e19d24] to-[#f8c56d] mb-1">
                  10x R$ 169,70
                </h3>
                <span className="text-base text-[#c8d4e6] block">
                  ou R$ 1.697,00 à vista
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-[#c8d4e6] bg-[#0c1220]/80 py-1 px-3 rounded-full">
                  <AlertTriangle className="text-[#e19d24]" size={20} />
                  <span>VAGAS LIMITADAS</span>
                </div>
                <div className="flex items-center gap-2 text-[#c8d4e6] bg-[#0c1220]/80 py-1 px-3 rounded-full">
                  <Shield className="text-[#e19d24]" size={20} />
                  <span>Garantia Total</span>
                </div>
              </div>

              <a 
                href="https://pay.hotmart.com/D98067996F?_hi=eyJjaWQiOiIxNzM5NjU1NjQwNDExNjI4MzUzMDQ4MjMyOTUxODAwIiwiYmlkIjoiMTczOTY1NTY0MDQxMTYyODM1MzA0ODIzMjk1MTgwMCIsInNpZCI6Ijc4NjE1YWEzM2I4MDQwYWNhODg4MTZlZDNlMDY5MzhiIn0=.1741553142689&bid=1741553148353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative px-12 py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    GARANTIR MINHA VAGA ANTES DO AUMENTO
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#16202d] py-2 px-4 rounded-full border border-[#e19d24]/20">
            <Clock className="text-[#e19d24]" size={18} />
            <span className="text-sm text-[#c8d4e6]">
              Próximo lote: <span className="text-[#e19d24] font-bold">R$ 2.987,00</span> (aumento de 76%)
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          {paymentOptions.map((detail, index) => (
            <div
              key={index}
              className="group p-6 bg-[#16202d] rounded-xl border border-[#e19d24]/20 hover:border-[#e19d24]/40 transition-all text-center"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gradient-to-br from-[#e19d24] to-[#d3891a] rounded-lg shadow-lg mb-4">
                  {detail.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-100 mb-2">
                  {detail.title}
                </h3>
                <p className="text-sm text-[#c8d4e6]">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;