import React from 'react';

const SectionDivider = () => {
  return (
    <div className="section-divider">
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
      `}</style>
    </div>
  );
};

export default SectionDivider;