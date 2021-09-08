/**
 * Foi implementado o conceito de listas ligadas, onde nao existe um indice para o elemento, mas um 
 * apontamento para o proximo elemento
 */
function linkedList() {
  let Node = function (element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  this.append = function (element) {
    // adiciona um elemento no final da lista
    let node = new Node(element),
      current

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    length++
  }

  this.insert = function (position, element) {
    // adiciona um elemento em uma posiçao específica
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    // remove o elemento de uma posiçao específica
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0

      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) {
    // remove o elemento element
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function (element) {
    // retorna a posiçao do elemento
    let current = head,
        index = 0

    while(current) {
      if(element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return - 1
  }

  this.isEmpty = function () {
    // retorna se está vazia ou nao a instancia
    return length === 0
  }

  this.size = function () {
    // retorna o tamanho da instancia
    return length
  }

  this.hetHead = function() {
    return head 
  }

  this.toString = function () {
    // converte em String 
    let current = head,
      string = ''

    while (current) {
      string += current.element + ' '
      current = current.next
    }

    return string
  }

  this.print = function () {
    // imprime no console
    console.log(this.toString())
  }
}

let ll = new linkedList()
ll.append('Joao')
ll.append('Maria')
ll.append('Maria')
// ll.print()
ll.insert(0, 'Carlos')
// ll.print()