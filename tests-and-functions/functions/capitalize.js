function capitalize(string) {
  if(string === undefined) return ""
  if(!isNaN(string)) return string
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString
}

module.exports = capitalize