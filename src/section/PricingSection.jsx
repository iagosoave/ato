import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react'; // Adicionei ArrowRight para o botão
import backgroundImage from './back5.png';

const CallToActionSection = ({ googleFormsLink }) => {
  return (
    <section id="cta-section" className="relative min-h-screen bg-[#0c1220] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-end px-4 py-16 lg:pr-20">
        <div className="w-full max-w-md lg:max-w-lg">
          {/* Header and CTA Text */}
          <div className="text-center lg:text-left mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#e19d24]/10 backdrop-blur-sm text-[#e19d24] px-4 py-2 rounded-full mb-4">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">OFERTA EXCLUSIVA & VAGAS LIMITADAS</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-100 leading-tight mb-4">
              Desbloqueie Seu Potencial
              <br className="hidden md:inline" /> e Conquiste Seus Objetivos!
            </h2>
            <p className="text-[#c8d4e6] text-xl font-light leading-relaxed mb-6">
              Esta é a sua chance de transformar seu conhecimento em resultados reais.
              Não perca essa oportunidade única!
            </p>
            <p className="text-[#c8d4e6] text-lg font-medium">
              **Aja agora!** Preencha o formulário e garanta sua vaga.
            </p>
          </div>

          {/* CTA Button Container */}
          <div >
            <a
              href={googleFormsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
            >
              GARANTIR MINHA VAGA AGORA!
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Privacy Notice */}
          <p className="text-center text-sm text-[#c8d4e6]/60 mt-6">
            🔒 Suas informações estão 100% seguras e protegidas conosco.
          </p>
        </div>
      </div>

      {/* Mobile optimization styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          /* Add specific mobile adjustments if needed */
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;