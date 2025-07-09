import React from 'react';
import { Award, Users, Zap, Instagram, Facebook, Linkedin } from 'lucide-react';
import cristofer from './cristofer-about.png';
import back4 from './back4.png';

const CristoferLeoneSection = ({ profileImage = cristofer }) => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "20+", label: "Anos de Experiência" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Pessoas Transformadas" },
    { icon: <Zap className="w-6 h-6" />, value: "100%", label: "Método Comprovado" }
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/cristofer.leone" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/cristoferleone" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/cristofer-leone-721816123" }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={back4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0c1220]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack layout / Desktop: Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content - Mobile: Order 2 / Desktop: Order 1 */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Title */}
              <div className="mb-8">
                <p className="text-[#e19d24] text-sm sm:text-base font-medium mb-2 tracking-widest uppercase">
                  Mentor de Alta Performance
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Cristofer
                  <span className="block text-[#e19d24]">Leone</span>
                </h1>
                <div className="w-20 h-1 bg-[#e19d24] mx-auto lg:mx-0 mb-6" />
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Há mais de duas décadas transformando vidas através do 
                <span className="text-[#e19d24] font-semibold"> Método ATO</span>. 
                Especialista em desenvolvimento humano e liderança de alta performance.
              </p>

              {/* Stats - Mobile: Horizontal scroll / Desktop: Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-[#e19d24] mb-2 flex justify-center lg:justify-start">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}

{/* CTA Button */}
<a href="#pricing">
  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mb-8 w-full sm:w-auto shadow-lg">
    Comece Sua Transformação
  </button>
</a>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#e19d24] hover:border-[#e19d24] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Image - Mobile: Order 1 / Desktop: Order 2 */}
            <div className="order-1 lg:order-2 w-full flex justify-center">
              <div className="relative inline-block">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e19d24]/20 to-transparent rounded-3xl" />
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <img 
                    src={profileImage}
                    alt="Cristofer Leone" 
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-contain"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                    <h2 className="text-2xl font-bold text-white">Cristofer Leone</h2>
                    <p className="text-[#e19d24]">Mentor de Mentores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CristoferLeoneSection;