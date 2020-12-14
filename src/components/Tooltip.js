import React from 'react';

export const Tooltip = ({ baseText, tooltipText }) => (
  <span data-tooltip-text={tooltipText} className='tooltip'>
    {baseText}
  </span>
);
