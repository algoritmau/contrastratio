import React, { useRef, useState } from 'react'
import ColorAnalysis from './ColorAnalysis'

import isValidColor from '../utils/colors/isValidColor'
import identifyColorNotation from '../utils/colors/identifyColorNotation'
import formatColorToHex from '../utils/colors/formatColorToHex'

export default function ContrastChecker() {
  const [foregroundColor, setForegroundColor] = useState('#F6FEFE')
  // const [foregroundColorNotation, setForegroundColorNotation] = useState('hex')
  const [backgroundColor, setBackgroundColor] = useState('#B95FE3')
  // const [backgroundColorNotation, setBackgroundColorNotation] = useState('hex')

  const foregroundColorSwatchRef = useRef()
  const backgroundColorSwatchRef = useRef()

  const handleForegroundColorChange = (e) => {
    const sanitizedColorInput = e.target.value
    let colorNotation, formattedColor

    if (isValidColor(sanitizedColorInput)) {
      colorNotation = identifyColorNotation(sanitizedColorInput)
      formattedColor = formatColorToHex(sanitizedColorInput, colorNotation)

      setForegroundColor(formattedColor)
      foregroundColorSwatchRef.current.style.backgroundColor = formattedColor
    } else {
      console.log(`${sanitizedColorInput} IS NOT a valid color!`)
    }
  }

  // TODO: Check for colors in localStorage

  return (
    <main className="app">
      <div className="app__input">
        <div className="app__colorFormatSelector">Color Format Selector</div>
        <form action="#" className="colorsSourceForm">
          <fieldset className="colorsSourceForm__colorSource">
            <label
              htmlFor="foregroundColorSourceInput"
              className="colorsSourceForm__colorSourceLabel"
            >
              Foreground Color
            </label>
            <div className="colorsSourceForm__colorSourceInputs">
              <input
                type="text"
                id="foregroundColorSourceInput"
                className="colorsSourceForm__colorSourceInput"
                placeholder={foregroundColor}
                onChange={handleForegroundColorChange}
              />
              <input
                type="color"
                className="colorsSourceForm__colorSourceSwatch colorsSourceForm__colorSourceSwatch--foreground"
                onChange={(e) => console.log(e.target.value)}
              />
              <div
                ref={foregroundColorSwatchRef}
                className="colorsSourceForm__colorSourceSwatch colorsSourceForm__colorSourceSwatch--foreground"
              ></div>
            </div>
          </fieldset>
          <fieldset className="colorsSourceForm__colorSource">
            <label
              htmlFor="backgroundColorSourceInput"
              className="colorsSourceForm__colorSourceLabel"
            >
              Background Color
            </label>
            <div className="colorsSourceForm__colorSourceInputs">
              <input
                type="text"
                id="backgroundColorSourceInput"
                className="colorsSourceForm__colorSourceInput"
                placeholder={backgroundColor}
              />
              <div
                ref={backgroundColorSwatchRef}
                className="colorsSourceForm__colorSourceSwatch colorsSourceForm__colorSourceSwatch--background"
              ></div>
            </div>
          </fieldset>
        </form>
      </div>
      <ColorAnalysis />
      <div className="app__sample">
        <p className="app__sample__text">
          Here’s a sample text of how the selected foreground and background
          colors looks against each other.
        </p>
      </div>
    </main>
  )
}
