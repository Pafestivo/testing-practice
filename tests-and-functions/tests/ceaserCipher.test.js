const caesarCipher = require('../functions/caesarCipher')

describe('Caesar Cipher', () => {
  test('works with short string', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde')
  })

  test('works with 0 as shift factor', () => {
    expect(caesarCipher('abcd', 0)).toBe('abcd')
  })

  test('works with no shift factor', () => {
    expect(caesarCipher('abcd')).toBe('abcd')
  })

  test('works with shift factor other than 1', () => {
    expect(caesarCipher('abcd', 4)).toBe('efgh')
  })

  test('works with multiple words', () => {
    expect(caesarCipher('ab cd', 1)).toBe('bc de')
  })

  test('wrap from z back to a', () => {
    expect(caesarCipher('wxyz', 1)).toBe('xyza')
  })

  test('wrap from z back to a', () => {
    expect(caesarCipher('wxyz', 3)).toBe('zabc')
  })

  test('wrap from z back to a', () => {
    expect(caesarCipher('YZzf', 2)).toBe('ABbh')
  })

  test('works with capital letters', () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD')
  })

  test('works with capital and lowercase combined', () => {
    expect(caesarCipher('ABCde', 1)).toBe('BCDef')
  })

  test('ignore punctuation and numbers', () => {
    expect(caesarCipher('a,b,1,4,e@! a', 1)).toBe('b,c,1,4,f@! b')
  })
})