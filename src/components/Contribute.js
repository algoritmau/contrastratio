import React from 'react';
import { IkerLink } from './IkerLink';

export const Contribute = () => (
  <section className='contribute'>
    <h2 className='contribute__title'>Contribute</h2>
    <div className='contribute__text'>
      <p>
        You may contribute to this project by filing an issue, reporting
        something broken, or requesting a feature. Your support is kindly
        appreciated.
      </p>
      <p>
        If you like the project, you may also{' '}
        <IkerLink
          to='https://github.com/spaceinvadev/contrasratio'
          text='star it ⭐'
        />{' '}
        on GitHub or <IkerLink to='#' text='share it' /> with others so they can
        use it as well.
      </p>
    </div>
  </section>
);
