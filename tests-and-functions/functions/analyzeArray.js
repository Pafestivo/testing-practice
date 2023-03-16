function analyzeArray(arr) {
  if(!Array.isArray(arr) || arr.some(item => isNaN(item))) {
    return 'Not an array'
  } else if(arr.length === 0) {
    return 'Array is empty'
  }

  const sortedArr = arr.sort((a,b) => a - b)
  let middleIndex = Math.floor(sortedArr.length / 2)
  let result = {
    average: sortedArr[middleIndex],
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
    length: sortedArr.length
  }

  return result
}

module.exports = analyzeArray