import isHexColor from './isHexColor'
import isNamedColor from './isNamedColor'

export default function isValidColor(color) {
  if (isNamedColor(color) || isHexColor(color)) {
    return true
  }

  return false
}
