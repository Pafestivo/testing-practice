const calculator = {
  add: (a,b) => {
    if(isNaN(a)|| isNaN(b)) return 'Error!'
    return a + b
  },
  subtract: (a,b) => {
    if(isNaN(a)|| isNaN(b)) return 'Error!'
    return a - b
  },
  divide: (a,b) => {
    if(isNaN(a)|| isNaN(b)) return 'Error!'
    if(b === 0) return 'Error!'
    return a / b
  },
  multiply: (a,b) => {
    if(isNaN(a)|| isNaN(b)) return 'Error!'
    return a * b
  }
}

module.exports = calculator