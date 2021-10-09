# Ensino Node Jest TDD para Internship C2A

## Preparar
```
npm install
```

## Executar os Exemplo de Teste
```
npm test
```

## Criando novo Test com TDD
```
//index.test.js
const index = require('./index')
test('Debitar Saldo', () => {
  const anterior = index.getSaldo()
  const result = index.debitarSaldo(anterior, 5)
  expect(result).toEqual(anterior - 5)
})
```
Rode os testes e depois crie as funções necessárias para o teste passar