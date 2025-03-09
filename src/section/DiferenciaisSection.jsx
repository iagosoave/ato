import React, { forwardRef, useState, useEffect } from 'react';
import { CheckCircle, XCircle, Sparkles, Zap, Users, Clock, Award, ArrowUpRight } from 'lucide-react';

const DiferenciaisSection = forwardRef(({ noBackground = false, deviceType = 'desktop' }, ref) => {
  // Adiciona classe para integração com as regras CSS mobile
  const sectionClass = "diferenciais-section";
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('diferenciais');
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Dados dos diferenciais - ATUALIZADO conforme a imagem 2
  const diferenciais = [
    {
      icon: <Award />,
      titulo: "Aprendizado 100% aplicado",
      descricao: "Você não sai apenas com teoria – sai com sua mentoria pronta para vender."
    },
    {
      icon: <Zap />,
      titulo: "Estratégia validada no mercado",
      descricao: "Método criado por quem já aplicou e teve resultados reais."
    },
    {
      icon: <Sparkles />,
      titulo: "Mentoria prática, não coaching genérico",
      descricao: "Você aprende a estruturar e vender, não apenas a inspirar."
    },
    {
      icon: <Clock />,
      titulo: "Sessão Estratégica Exclusiva",
      descricao: "Você recebe um envio personalizado para não trabalhar na implementação."
    },
    {
      icon: <Users />,
      titulo: "Comunidade exclusiva de mentores",
      descricao: "Troca de experiências, parcerias e aprendizado contínuo."
    }
  ];

  // Dados da comparação - ATUALIZADO conforme a imagem 1
  const comparacoes = [
    {
      aspecto: "Foco em Aplicação Real",
      metodoAto: "Sim, você sai com seu modelo pronto",
      outrasFormacoes: "Muitas formações ficam na teoria"
    },
    {
      aspecto: "Monetização Rápida",
      metodoAto: "Estratégia de validação rápida",
      outrasFormacoes: "Foco apenas em conhecimento, sem ação prática"
    },
    {
      aspecto: "Mentores Líderes",
      metodoAto: "Você pode se tornar um e gerar renda extra",
      outrasFormacoes: "Sem suporte pós-formação"
    },
    {
      aspecto: "Acompanhamento Pós-Formação",
      metodoAto: "Sim, suporte e networking contínuo",
      outrasFormacoes: "Você fica sozinho após o curso"
    }
  ];

  // Estilo dos cartões com gradiente
  const cardStyle = (index) => {
    const hue = 35 + (index * 2);
    return {
      backgroundImage: `linear-gradient(135deg, rgba(${hue}, ${Math.max(100, hue-20)}, 36, 0.05), rgba(${hue}, ${Math.max(100, hue-20)}, 36, 0.12))`,
      borderLeft: `3px solid #e19d24`
    };
  };

  return (
    <section 
      ref={ref} 
      className={`relative w-full py-12 md:py-20 bg-[#0c1220] ${sectionClass} overflow-hidden`}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#e19d24] opacity-[0.03] blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[250px] h-[250px] rounded-full bg-[#e19d24] opacity-[0.04] blur-[60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título principal com animação sutil */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 relative inline-block">
            Por Que Escolher o
            <span className="relative ml-2">
              <span className="relative z-10 text-[#e19d24]">Método ATO</span>
              <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#e19d24]/20 rounded-full -z-0"></span>
            </span>
          </h2>
          <p className="text-sm md:text-lg text-[#c8d4e6] mt-4">
            Descubra como nossa abordagem exclusiva é diferente de tudo o que você já viu no mercado
          </p>
        </div>

        {/* Navegação em abas */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-center border-b border-[#e19d24]/20 mb-8">
            <button 
              onClick={() => setActiveTab('diferenciais')}
              className={`px-4 py-3 text-sm md:text-base font-medium relative ${
                activeTab === 'diferenciais' 
                  ? 'text-[#e19d24]' 
                  : 'text-[#c8d4e6] hover:text-white'
              }`}
            >
              Nossos Diferenciais
              {activeTab === 'diferenciais' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e19d24]"></span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('comparacao')}
              className={`px-4 py-3 text-sm md:text-base font-medium relative ${
                activeTab === 'comparacao' 
                  ? 'text-[#e19d24]' 
                  : 'text-[#c8d4e6] hover:text-white'
              }`}
            >
              Comparativo Detalhado
              {activeTab === 'comparacao' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e19d24]"></span>
              )}
            </button>
          </div>
          
          {/* Conteúdo da aba de diferenciais */}
          {activeTab === 'diferenciais' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-[#16202d] p-5 rounded-lg border border-[#e19d24]/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e19d24]/5"
                    style={cardStyle(index)}
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-[#e19d24]">
                        {item.icon}
                      </div>
                      <h3 className="text-white font-semibold text-base md:text-lg">{item.titulo}</h3>
                    </div>
                    <p className="text-[#c8d4e6] text-sm">{item.descricao}</p>
                  </div>
                ))}
              </div>
              
              {/* Nota especial sobre a sessão estratégica */}
              <div className="max-w-3xl mx-auto bg-[#16202d] rounded-lg p-5 border border-[#e19d24]/20 mt-8">
                <div className="flex items-start">
                  <div className="text-[#e19d24] mr-4 mt-1">
                    <ArrowUpRight size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Sessão Estratégica Garantida</h4>
                    <p className="text-[#c8d4e6] text-sm">
                      Você tem direito garantido a 1 sessão estratégica com um Mentor Líder para garantir a implementação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Conteúdo da aba de comparação */}
          {activeTab === 'comparacao' && (
            <div className="overflow-hidden rounded-lg border border-[#e19d24]/10">
              {/* Versão mobile - cards empilhados */}
              <div className="md:hidden">
                {comparacoes.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 mb-4 rounded-lg ${
                      index % 2 === 0 ? 'bg-[#0c1220]' : 'bg-[#121b29]'
                    }`}
                  >
                    <div className="text-[#e19d24] font-medium text-base mb-3">{item.aspecto}</div>
                    
                    <div className="mb-3 bg-[#16202d] p-3 rounded-lg border-l-2 border-green-500">
                      <div className="text-white text-sm font-medium mb-1">Método ATO:</div>
                      <div className="text-[#c8d4e6] text-sm flex items-start">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                        <span>{item.metodoAto}</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#16202d] p-3 rounded-lg border-l-2 border-red-500">
                      <div className="text-white text-sm font-medium mb-1">Outras Formações:</div>
                      <div className="text-[#c8d4e6] text-sm flex items-start">
                        <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                        <span>{item.outrasFormacoes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Versão desktop - tabela */}
              <table className="hidden md:table w-full border-collapse">
                <thead className="bg-[#16202d]">
                  <tr>
                    <th className="text-left p-4 text-[#c8d4e6] font-medium w-1/4">Aspecto</th>
                    <th className="text-left p-4 text-[#e19d24] font-medium w-3/8">Método ATO</th>
                    <th className="text-left p-4 text-[#c8d4e6] font-medium w-3/8">Outras Formações</th>
                  </tr>
                </thead>
                <tbody>
                  {comparacoes.map((item, index) => (
                    <tr 
                      key={index}
                      className={index % 2 === 0 ? 'bg-[#0c1220]' : 'bg-[#121b29]'}
                    >
                      <td className="p-4 text-white font-medium text-sm">{item.aspecto}</td>
                      <td className="p-4">
                        <div className="text-[#c8d4e6] text-sm flex items-start">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>{item.metodoAto}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-[#c8d4e6] text-sm flex items-start">
                          <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                          <span>{item.outrasFormacoes}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#e19d24] to-[#d3891a] text-white font-bold rounded-lg hover:from-[#d3891a] hover:to-[#c27b15] transform transition-all hover:scale-105 shadow-lg shadow-[#e19d24]/10">
            QUERO ME TORNAR UM MENTOR NATO
          </button>
        </div>
      </div>
    </section>
  );
});

DiferenciaisSection.displayName = 'DiferenciaisSection';

export default DiferenciaisSection;