import React from 'react';
import ColorAnalysis from './ColorAnalysis';

const ContrastChecker = () => {
  return (
    <main className='app'>
      <div className='app__input'>
        <div className='app__colorFormatSelector'>Color Format Selector</div>
        <form action='#' className='colorsSourceForm'>
          <fieldset className='colorsSourceForm__colorSource'>
            <label
              htmlFor='foregroundColorSourceInput'
              className='colorsSourceForm__colorSourceLabel'
            >
              Foreground Color
            </label>
            <div className='colorsSourceForm__colorSourceInputs'>
              <input
                type='text'
                id='foregroundColorSourceInput'
                className='colorsSourceForm__colorSourceInput'
                placeholder='#f6fefe'
              />
              <div className='colorsSourceForm__colorSourceSwatch colorsSourceForm__colorSourceSwatch--foreground'></div>
            </div>
          </fieldset>
          <fieldset className='colorsSourceForm__colorSource'>
            <label
              htmlFor='backgroundColorSourceInput'
              className='colorsSourceForm__colorSourceLabel'
            >
              Background Color
            </label>
            <div className='colorsSourceForm__colorSourceInputs'>
              <input
                type='text'
                id='backgroundColorSourceInput'
                className='colorsSourceForm__colorSourceInput'
                placeholder='#b95fe3'
              />
              <div className='colorsSourceForm__colorSourceSwatch colorsSourceForm__colorSourceSwatch--background'></div>
            </div>
          </fieldset>
        </form>
      </div>
      <ColorAnalysis />
      <div className='app__sample'>
        <p className='app__sample__text'>
          Here’s a sample text of how the selected foreground and background
          colors looks against each other.
        </p>
      </div>
    </main>
  );
};

export default ContrastChecker;
