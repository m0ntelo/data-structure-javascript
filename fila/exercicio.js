/**
 * Foi implementado uma fila sendo listada por orderm de prioridade. Utilizando o princípio de fila
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

function PriorityQueue() {
  let items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)
    let added = false

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }


  this.dequeue = function () {
    return items.shift()
  }

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].element + ' ' + items[i].priority)
    }
  }
}

let pqueue = new PriorityQueue()
pqueue.enqueue('Carlos', 2)
pqueue.enqueue('Ana', 1)
pqueue.enqueue('Lucas', 1)

// pqueue.print()


/**
 * Jogo da batata quente usando o conceito de fila
 */
function hotPotato(nameList, num) {
  let queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let elimnated = ''

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimnated = queue.dequeue()
    console.log(elimnated + ' was eliminated from the hot potato game')
  }
  return queue.dequeue();
}

let names = ['Joao', 'José', 'Maria', 'Ana', 'Lucas']
let winner = hotPotato(names, 7)
// console.log('The winner is:' + winner)
