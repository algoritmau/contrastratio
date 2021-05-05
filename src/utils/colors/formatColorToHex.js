import namedColorToHex from './namedColorToHex'
import formatHexColor from './formatHexColor'

export default function formatColorToHex(color, format) {
  switch (format) {
    case 'namedColor':
      return namedColorToHex(color)

    case 'hex':
      return formatHexColor(color)

    default:
      break
  }
}
