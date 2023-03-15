const reverseString = require('../functions/reverseString')

describe('reverse string', () => {
  test('Single word', () => {
    expect(reverseString('hello')).toBe('olleh')
  })

  test('Multiple words', () => {
    expect(reverseString('hello WorlD')).toBe('DlroW olleh')
  })
  
  test('Special characters', () => {
    expect(reverseString('he!!o, WorlD!!')).toBe('!!DlroW ,o!!eh')
  })
  
  test('Is undefined', () => {
    expect(reverseString()).toBe()
  })
})