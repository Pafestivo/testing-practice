
describe('Caesar Cipher', () => {
  test('works with short string', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde')
  })
})