function caesarCipher(str, shiftFactor = 0) {
  if(shiftFactor === 0) return str
  // make empty array to store the result
  let resultArray = []

  for(let i = 0; i < str.length; i++) {
    // store the current char in variable
    let currentChar = str.charAt(i)
    // get the code of the current character
    let currentCharCode = str.charCodeAt(i)
    // set the starting point of target at the current char code
    let targetCharCode = currentCharCode

    for(let j = 0; j < shiftFactor; j++) { 
      // at z or Z reset to a or A
      if (targetCharCode === 90) targetCharCode = 65
      else if(targetCharCode === 122) targetCharCode = 97
      else targetCharCode++ 
    }

    // punctuation stays the same
    if(!!currentChar.match(/[^a-zA-Z]/)) {
      targetCharCode = currentCharCode
    }

    // change the char code into letter and push it to the array
    let targetChar = String.fromCharCode(targetCharCode)
    resultArray.push(targetChar)

  }

  // const test = 'a'
  // const testResult = test.charCodeAt()
  // return testResult

  // turn the array into string and return it
  const result = resultArray.join('')
  return result
}
module.exports = caesarCipher