function capitalizeFirstLetter (str) {
  const splitStr = str.toLowerCase().trim()
  return splitStr.charAt(0).toUpperCase() + splitStr.slice(1)
}

module.exports = {
  capitalizeFirstLetter
}
