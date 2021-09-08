/*
 * Converte decimal para binario usando o conceito de pilha
 */

function dec2Bin(decNumber) {
  let restStack = [],
      rest,
      binaryString = ''

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / 2)
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString()
  }

  return binaryString
}

// console.log(dec2Bin(25))

/**
 * Converso de decimal para uma base escolhida (Binária, Octal, Hexadecimal)
 * Bases: 2, 8, 16
 */

function baseConverter(decNumber, base) {
  let restStack = [],
      rest,
      baseString = '',
      digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()]
  }

  return baseString
}

// console.log(baseConverter(123, 16))