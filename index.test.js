//index.test.js
const index = require('./index')
test('Aplicar desconto', () => {
  const result = index.aplicarDesconto(10, 5)
  expect(result).toEqual(5)
})



test('debitarSaldo', () => {
  const result = index.debitarSaldo(10, 5)
  expect(result).toBeGreaterThanOrEqual(0)
  expect(result).toEqual(5)
  
})