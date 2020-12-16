import React from 'react';
import { IkerLink } from './IkerLink';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-inner'>
      <p className='footer__credits'>
        Designed and coded with 💜 by{' '}
        <IkerLink to='https://spaceinva.dev' text='spaceinvadev' />.
      </p>
      <p className='footer__legal'>
        &copy;{' '}
        {`${new Date().getFullYear()} contrastrat.io. Released under the MIT license.`}
      </p>
    </div>
  </footer>
);

export default Footer;
