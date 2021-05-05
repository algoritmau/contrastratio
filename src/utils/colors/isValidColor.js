import isNamedColor from './isNamedColor'
import isHexColor from './isHexColor'

export default function isValidColor(color) {
  if (isNamedColor(color) || isHexColor(color)) {
    return true
  }

  return false
}
