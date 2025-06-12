import React, { useState, useEffect } from 'react';
import cristofer from './cristofer.png';

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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col">
        {/* Hero Image Section at top */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={cristofer}
            alt="Banner" 
            className="w-full h-full object-cover"
          />
          {/* Lighter blue overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
        </div>

        {/* Content Container */}
        <div className="px-6 py-8 -mt-16 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="h-10 w-32 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo</span>
            </div>
          </div>

          {/* Event Info Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 border border-blue-500/50 rounded-full px-4 py-2 bg-gray-900/90 backdrop-blur">
              <span className="text-xs">Lorem Ipsum 156</span>
              <span className="text-blue-400 text-xs">|</span>
              <span className="text-xs">16 e 17 DE JUNHO</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-center">
            <h1 className="text-2xl font-light leading-tight">
              Lorem ipsum dolor sit <span className="font-bold">amet consectetur adipisicing elit</span> sed do eiusmod <span className="font-bold">tempor incididunt ut labore</span>
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <span className="font-bold">quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-4 rounded-full text-base transition-all duration-300 mt-8 w-full shadow-lg shadow-blue-500/25">
            LOREM IPSUM DOLOR SIT
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative min-h-screen">
        {/* Full Background Image with overlay */}
        <img 
          src={cristofer}
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          {/* Lighter overlay for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
          
          {/* Blue gradient overlay - more subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />
        </div>

        {/* Container */}
        <div className="relative z-10 container mx-auto px-12 py-16 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12 max-w-2xl">
              {/* Logo */}
              <div>
                <div className="h-12 w-44 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-gray-400">Logo</span>
                </div>
              </div>

              {/* Event Info */}
              <div className="inline-flex items-center gap-3 border border-blue-500/50 rounded-full px-6 py-3 bg-gray-900/70 backdrop-blur">
                <span className="text-sm">Lorem Ipsum 156</span>
                <span className="text-blue-400">|</span>
                <span className="text-sm">16 e 17 DE JUNHO</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                  Lorem ipsum dolor sit <span className="font-bold">amet consectetur adipisicing elit,</span> sed do eiusmod <span className="font-bold">tempor incididunt ut labore et dolore magna</span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <span className="font-bold">quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                LOREM IPSUM DOLOR SIT
              </button>
            </div>

            {/* Right side - empty for background image to show */}
            <div />
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