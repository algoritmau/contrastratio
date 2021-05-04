const hexColorRegex = /(#?|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})/gi // (?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)

export default function isHexColor(color) {
  return color.match(hexColorRegex)
}
