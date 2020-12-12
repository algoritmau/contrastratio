import React from 'react';
import { IkerLink } from './IkerLink';

export const Instructions = () => (
  <section className='instructions'>
    <h2 className='instructions__title'>How does it work?</h2>
    <p className='instructions__text'>
      <span>
        <strong>contrastrat.io</strong> allows you to check whether there is
        sufficient contrast ratio between a given foreground (text) color and a
        background color so they meet the success criterion specified by the Web
        Content Accessibility Guidelines (WCAG 2.1). Learn more about the WCAG
        standards at their{' '}
        <IkerLink to='https://www.w3.org/TR/WCAG21' text='website' />.
      </span>
      <span>
        Enter a foreground and a background color in any of the following
        formats: RGB, RGB hexadecimal, HSL, CMYK, or choose a color using the
        color picker. Use the Lightness slider to adjust the selected color.
      </span>
      <span>
        In the event of entering colors that do not meet the success criterion,
        you can quickly fix it by either changing the foreground or background
        color by clicking on the “Fix” link shown when hovering over the
        corresponding input field.
      </span>
      <span>
        You can also alternate between AA and AAA to test for level-specific
        criterion. Note that for Level AA, WCAG 2.1 requires a contrast ratio of
        at least 4.5:1 for normal text and 3:1 for large text. A contrast ratio
        of at least 3:1 is also required for graphics and user interface
        components (such as form input borders). WCAG 2.1 Level AAA, on the
        other hand, requires a contrast ratio of at least 7:1 for normal text
        and 4.5:1 for large text.
      </span>
      <span>
        Consider large text as 14 point (about 18.66px) and bold or larger, or
        18 point (about 24px) or larger.
      </span>
    </p>
  </section>
);
