const THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/
const THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/
const SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/
const SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/

const is3DigitHexColor = (color) => color.match(THREE_DIGIT_HEX_COLOR_REGEX)
const isHashed3DigitHexColor = (color) =>
  color.match(THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX)
const is6DigitHexColor = (color) => color.match(SIX_DIGIT_HEX_COLOR_REGEX)
const isHashed6DigitHexColor = (color) =>
  color.match(SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX)

export default function formatHexColor(color) {
  let formattedColor

  if (is3DigitHexColor(color)) {
    formattedColor = `#${color}`
  }

  if (isHashed3DigitHexColor(color)) {
    formattedColor = `${color}`
  }

  if (is6DigitHexColor(color)) {
    formattedColor = `#${color}`
  }

  if (isHashed6DigitHexColor(color)) {
    formattedColor = `${color}`
  }

  return formattedColor.toUpperCase()
}
