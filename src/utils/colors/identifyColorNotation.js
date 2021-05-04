import isNamedColor from './isNamedColor'
import isHexColor from './isHexColor'

export default function identifyColorNotation(color) {
  let colorNotation

  if (isNamedColor(color)) {
    colorNotation = 'namedColor'
  }

  if (isHexColor(color)) {
    colorNotation = 'hex'
  }

  return colorNotation
}
