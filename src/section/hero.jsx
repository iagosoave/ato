import React, { useState, useEffect } from 'react';
import banner from './cristofer.png';
import mobile from './cris2.png';
import logo from './logo.png';


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
    <div className="relative min-h-screen bg-slate-900 text-white">
      {/* Background Image Container */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={mobile}
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        
        
        {/* Extra gradient for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-6 py-8 bg-slate-900">
        <div className="w-full max-w-sm mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={logo}
              alt="Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Título e Texto */}
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold leading-tight">
              Potencialize sua <br />
              <span className="text-yellow-500">Excelência Educacional</span>
            </h1>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Para Profissionais com Experiência e Educadores Natos que buscam expandir seu impacto com o Método de Cristofer Leone
            </p>
          </div>
          
          {/* CTA Button */}
          <a href="#pricing" className="block w-full">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-4 rounded-full text-base transition-all duration-300 w-full shadow-lg">
              INICIAR TRANSFORMAÇÃO
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  // Desktop Version Component
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
            <a href="#pricing">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-7 py-3.5 rounded-full text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                INICIAR TRANSFORMAÇÃO
              </button>
            </a>
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