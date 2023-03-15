function reverseString(string) {
  if(string === undefined) return
  let reverseString = ""

  for(let i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i)
  }

  return reverseString
}

module.exports = reverseString