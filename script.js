/* eslint-disable no-plusplus */
// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
    }
    this.head = newNode;
    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.size === 1) {
      const { value } = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return value;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    this.tail = previousNode;
    this.size--;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    str += 'null';
    return str;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(2);
myLinkedList.prepend(1);

console.log(myLinkedList.at(2));
console.log(myLinkedList.contains(5));
console.log(myLinkedList.contains(3));
console.log(myLinkedList.toString());
