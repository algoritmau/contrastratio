import React from 'react';
import { IkerLink } from './IkerLink';
import { Tooltip } from './Tooltip';

export const Instructions = () => (
  <section className='instructions'>
    <h2 className='instructions__title'>How does it work?</h2>
    <div className='instructions__text'>
      <p>
        <strong>contrastrat.io</strong> allows you to check whether there is
        sufficient contrast ratio between a given pair of foreground and
        background colors so they meet the success criterion specified by the
        Web Content Accessibility Guidelines (WCAG 2.1). Learn more about the
        WCAG standards at their{' '}
        <IkerLink to='https://www.w3.org/TR/WCAG21' text='website' />.
      </p>
      <p>
        Enter a foreground and a background color in any of the following
        notations:{' '}
        <Tooltip
          baseText='RGB hexadecimal'
          tooltipText='6- or 3-digit RGB hex value. e.g., #080808 or #777'
        />
        ,{' '}
        <Tooltip
          baseText='rgb() function (integer or percentage)'
          tooltipText='e.g., 0 0 255 or 0% 0% 100%'
        />
        ,{' '}
        <Tooltip
          baseText='hsl() function'
          tooltipText='e.g., 120deg 100% 50%'
        />
        ,{' '}
        <Tooltip
          baseText='device-cmyk() function'
          tooltipText='e.g., 0 81% 81% 30%'
        />
        ,{' '}
        <Tooltip
          baseText='a CSS color keyword'
          tooltipText='e.g., lavender, whitesmoke, goldenrod'
        />
        , or choose a color using the color picker. Use the Lightness slider to
        adjust the selected color.
      </p>
      <p>
        In the event of entering colors that do not meet the success criterion,
        you can quickly fix it by either changing the foreground or background
        color by clicking on the “Fix” link shown when hovering over the
        corresponding input field.
      </p>
      <p>
        You can also alternate between AA and AAA to test for level-specific
        criterion. Note that for Level AA, WCAG 2.1 requires a contrast ratio of
        at least 4.5:1 for normal text and 3:1 for large text. A contrast ratio
        of at least 3:1 is also required for graphics and user interface
        components (such as form input borders). WCAG 2.1 Level AAA, on the
        other hand, requires a contrast ratio of at least 7:1 for normal text
        and 4.5:1 for large text.
      </p>
      <p>
        Consider large text as 14 point (about 18.66px) and bold or larger, or
        18 point (about 24px) or larger.
      </p>
    </div>
  </section>
);
