const capitalize = require('../functions/capitalize')

describe('Capitalize', () => {
  test('First letter of string', () => {
    expect(capitalize('hello world')).toBe('Hello world')
  })

  test('Is undefined', () => {
    expect(capitalize()).toBe("")
  })

  test('Is number', () => {
    expect(capitalize(123)).toBe(123)
  })
})
