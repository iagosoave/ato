import React, { useState, useEffect } from 'react';
import banner from './cristofer.png';
import mobile from './cris2.png';
import logo from './logo.png';
import { ChevronDown } from 'lucide-react'; // Certifique-se de que lucide-react está instalado!

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Version Component
  const MobileVersion = () => (
    <div className="relative min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Background Image Container */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={mobile}
          alt="Banner"
          className="w-full h-full object-cover object-top"
        />
        {/* Extra gradient for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 py-8 bg-slate-900 flex-grow flex flex-col justify-between">
        {/* Usamos flex-grow e flex-col para o conteúdo principal ocupar o espaço disponível */}
        <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center"> {/* Removido space-y-8 daqui para controlar o espaçamento individualmente */}
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto mb-6"
          />

          {/* Título e Texto */}
          <div className="space-y-4 mb-10"> {/* Adicionei margin-bottom para empurrar o botão para baixo */}
            <h1 className="text-3xl font-bold leading-tight">
              Potencialize sua <br />
              <span className="text-yellow-500">Excelência Educacional</span>
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed">
              Para Profissionais com Experiência e Educadores Natos que buscam expandir seu impacto com o Método de Cristofer Leone
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-4 rounded-full text-base transition-all duration-300 w-full shadow-lg transform hover:scale-105"> {/* Removi o mt-10 daqui pois o mb do div acima já controla */}
            INICIAR TRANSFORMAÇÃO
          </button>
        </div>

        {/* Scroll Indicator - Usando Lucide React e posicionado ainda mais abaixo */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce mt-auto"> {/* Adicionado mt-auto para empurrar para baixo se o conteúdo acima for curto */}
          <ChevronDown size={28} color="#F59E0B" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );

  // Desktop Version Component (Sem alterações)
  const DesktopVersion = () => (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Full Background Image */}
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Container - Posicionado mais para cima */}
      <div className="relative z-10 min-h-screen flex items-start pt-24">
        <div className="container mx-auto px-12">
          <div className="max-w-xl space-y-8">
            {/* Logo */}
            <div className="flex justify-start">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Título e Texto */}
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Potencialize sua <br />
                <span className="text-yellow-500">Excelência Educacional</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Para Profissionais com Experiência e Educadores Natos que buscam expandir seu impacto com o Método de Cristofer Leone
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-7 py-3.5 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
              INICIAR TRANSFORMAÇÃO
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  );
};

export default Hero;