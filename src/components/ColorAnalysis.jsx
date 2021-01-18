import React from 'react';
import ContrastRatioStatusTag from './ContrastRatioStatusTag';
import WcagLevelToggle from './WcagLevelToggle';

function ColorAnalysis() {
  return (
    <section className='colorAnalysis'>
      <div className='colorAnalysis__heading'>
        <h4 className='colorAnalysis__title'>Contrast Analysis</h4>
        <WcagLevelToggle />
      </div>
      <div className='colorAnalysis__results'>
        <div className='colorAnalysis__results__overall'>
          <p className='colorAnalysis__results__contrastRatio'>3.48:1</p>
          <span className='colorAnalysis__results__emoji'>😔</span>
        </div>
        <div className='colorAnalysis__results__status colorAnalysis__results__status--text'>
          <div className='colorAnalysis__results__normalTextStatus'>
            <p>Normal Text</p>
            <ContrastRatioStatusTag status='fail' />
          </div>
          <div className='colorAnalysis__results__largeTextStatus'>
            <p>Large Text</p>
            <ContrastRatioStatusTag status='pass' />
          </div>
        </div>
        <div className='colorAnalysis__results__status colorAnalysis__results__status--graphics'>
          <div className='colorAnalysis__results__graphicsStatus'>
            <p>Graphical Elements</p>
            <ContrastRatioStatusTag status='pass' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorAnalysis;
