/*
 * FIFO - O primeiro a entrar é o primeiro a sair
 */

function Queue() {
  let items = []

  this.enqueue = function (element) {
    // adiciona um novo item\
    items.push(element)
  }

  this.dequeue = function () {
    // remove um item
    return items.shift()
  }

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0]
  }

  this.isEmpty = function () {
    // verifica se a fila está vazia ou nao
    return items.length === 0
  }

  this.size = function () {
    // retorna o tamanho da fila
    return items.length
  }

  this.print = function () {
    // imprimir a fila no console
    console.log(items.toString())
  }
}

let fila = new Queue()
fila.enqueue(2)
fila.enqueue(4)
fila.enqueue(8)
fila.enqueue(16)

// fila.print()

fila.dequeue()

// fila.print()