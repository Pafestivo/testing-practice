
describe('Caesar Cipher', () => {
  test('works with short string', () => {
    expect(caesarCipher('abcd')).toBe('bcde')
  })
})