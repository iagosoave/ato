import React from 'react';

const SectionDivider = () => {
  return (
    <div className="section-divider" aria-hidden="true">
      <style jsx>{`
        .section-divider {
          height: 2px;
          background-color: #0c1220;
          width: 100%;
          position: relative;
          z-index: 50;
          margin: -1px 0;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        /* Adicionar pseudo-elementos para garantir cobertura completa */
        .section-divider::before,
        .section-divider::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #0c1220;
        }
        
        .section-divider::before {
          top: -1px;
        }
        
        .section-divider::after {
          bottom: -1px;
        }
        
        @media (max-width: 768px) {
          .section-divider {
            height: 4px; /* Ligeiramente mais espesso em mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default SectionDivider;