const analyzeArray = require('../functions/analyzeArray')

describe('Analyze Array', () => {
  test('Works with 4 numbers', () => {
    expect(analyzeArray([4, 5, 3, 1, 2])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5
    })
  })

  test('Works with single item array', () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1
    })
  })

  test('Works with negative numbers', () => {
    expect(analyzeArray([-1, -3, 2, 6])).toEqual({
      average: 2,
      min: -3,
      max: 6,
      length: 4
    })
  })

  test('Return error with strings in array', () => {
    expect(analyzeArray([4, 5, 3, "r", 2])).toBe('Not an array')
  })

  test('Return error with strings', () => {
    expect(analyzeArray('this is a string')).toBe('Not an array')
  })

  test('Return error with empty array', () => {
    expect(analyzeArray([])).toBe('Array is empty')
  })
}) 