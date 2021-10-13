const aplicarDesconto = (valor, desconto) => {
  if (desconto > valor) return 0
  return valor - desconto
}

const debitarSaldo = (saldoAnterior, valor) => {
  if (saldoAnterior < 0) throw new Error("Saldo negativo") 
  if (saldoAnterior < valor) throw new Error("Saldo insuficiente") 

    return saldoAnterior - valor
  
}



module.exports = { aplicarDesconto, debitarSaldo }

