import React from 'react'

const WcagLevelToggle = () => (
  <fieldset className="wcagLevelToggle">
    <label
      htmlFor="wcagLevelToggle"
      className="wcagLevelToggle__label wcagLevelToggle__label--aa"
    >
      AA
    </label>
    <input
      id="wcagLevelToggle"
      className="wcagLevelToggle__switch"
      type="checkbox"
    />
    <label
      htmlFor="wcagLevelToggle"
      className="wcagLevelToggle__label wcagLevelToggle__label--aaa"
    >
      AAA
    </label>
  </fieldset>
)

export default WcagLevelToggle
