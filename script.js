// Atividade 9

// / Multiplicação
function mult(x, y) {
    return x * y
}

// / Potência
function pot(x, y) {
    return x ** y
}

function potMath(x, y) {
    return Math.pow(x, y)
}

console.log(mult(5, 6))
console.log(pot(7, 2))
console.log(potMath(5, 3))

console.log("\n")

// Comando de decisão

// / Calculadora
function calcular(x, y, operador) {
  if (operador === "+") { return x + y }
  else if (operador === "-") { return x - y }
  else if (operador === "*") { return x * y }
  else if (operador === "/") { return x / y }
  else {
    console.log("Operador desconhecido pelo programa")
  }
}

console.log("Soma: " + calcular(50, 25, "+"))
console.log("Subtração: " + calcular(35, 30, "-"))
console.log("Multiplicação: " + calcular(6, 4, "*"))
console.log("Divisão: " + calcular(20, 5, "/"))

console.log("\n")

// / Compra
function verificarCompra(valorInicial, valorCompra) {
    if (valorCompra <= valorInicial) {
        let resultado = valorInicial - valorCompra
        
        console.log("A compra foi feita com sucesso!")
        console.log("Saldo disponível: " + resultado)
    } else {
        console.log("Saldo insuficiente")
    }
}

let valorInicial = prompt("Digite o saldo inicial: ")
let valorCompra = prompt("Digite o valor da compra: ")

verificarCompra(parseInt(valorInicial), parseInt(valorCompra))

console.log("\n")

// Estrutura de repetição
// / Media e soma
function somaMedia() {
  let soma = 0
  let quantidadeNumeros = prompt("Informe quantos números serão digitados: ")
  
  for (let i = 0; i < quantidadeNumeros; i++) {
    num = prompt("Informe o número: ")
    soma += parseInt(num)
  }

  let media = soma / quantidadeNumeros
  
  console.log("Soma: " + soma)
  console.log("Média dos números: " + media)
}

somaMedia()


console.log("\n")

// / Calcular soma dos impares
function calcularImpares(inicio, fim) {
  let numeros = []
  let soma = 0
  
  for (let i = inicio; i <= fim; i++) {
    numeros.push(i)
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      soma += numeros[i]
    }
  }

  console.log("Soma dos números impares no intervalo: " + soma)
}

calcularImpares(3, 10)
