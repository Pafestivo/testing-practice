const calculator = require('../functions/calculator')

describe('calculator', () => {
  describe('base cases', () => {
    test('add', () => {
      expect(calculator.add(5, 5)).toBe(10)
    })
  
    test('subtract', () => {
      expect(calculator.subtract(5, 5)).toBe(0)
    })
  
    test('divide', () => {
      expect(calculator.divide(5, 5)).toBe(1)
    })
  
    test('multiply', () => {
      expect(calculator.multiply(5, 5)).toBe(25)
    })
  })

  describe('Edge cases', () => {
    test('Divide with zero', () => {
      expect(calculator.divide(5, 0)).toBe('Error!')
    })

    test('No variables', () => {
      expect(calculator.add()).toBe('Error!')
      expect(calculator.subtract()).toBe('Error!')
      expect(calculator.divide()).toBe('Error!')
      expect(calculator.multiply()).toBe('Error!')
    })

    test('Single variables', () => {
      expect(calculator.add(1)).toBe('Error!')
      expect(calculator.subtract(1)).toBe('Error!')
      expect(calculator.divide(1)).toBe('Error!')
      expect(calculator.multiply(1)).toBe('Error!')
    })
  })
})