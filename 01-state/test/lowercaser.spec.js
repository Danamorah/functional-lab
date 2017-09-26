const lowercaser = require('../lowercaser')

test('lowercaser deberia retornar un string en lowercase',
() => {
  const actual = 'LOREM IPSUM'
  const expected = 'lorem ipsum'

  expect(lowercaser(actual)).toBe(expected)
})
test('test numbers', () =>{
  const actual = 1
  // const expected = '1'
  //
  // expect(lowercaser(actual)).toBe(expected)
  expect(()=>{
    lowercase(actual)
  }).toThrow()
})
