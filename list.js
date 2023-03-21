class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(value) {
    const isSingleChar = typeof value === "string" && value.length === 1;
    if (!isSingleChar) {
      throw new Error("Error. Invalid input value type.");
    }
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.next = this.head;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new Error("Error. Invalid input value type.");
    }
    if (index < 0 || index > this.size) {
      throw new Error("Error. Incorrect index.");
    }
    const node = new Node(value);
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
        this.tail.next = node;
      }
    } else if (index === this.size) {
      this.tail.next = node;
      node.next = this.head;
      this.tail = node;
    } else {
      let currentNode = this.head;
      let i = 0;

      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      node.next = currentNode.next;
      currentNode.next = node;
    }
    this.size++;
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Error. Index out of range.");
    }
    let deletedNode = null;
    if (this.size === 1) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      deletedNode = currentNode;

      if (index === 0) {
        this.head = this.head.next;
      } else if (index === this.size - 1) {
        this.tail = prevNode;
        prevNode.next = this.head;
      } else {
        prevNode.next = currentNode.next;
      }
    }
    this.size--;
    return deletedNode.value;
  }

  deleteAll(value) {
    let currentNode = this.head;
    let prevNode = this.tail;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        if (i === 0) {
          this.head = this.head.next;
          this.tail.next = this.head;
          prevNode = this.tail;
        } else {
          prevNode.next = currentNode.next;
          if (i === this.size - 1) this.tail = prevNode;
        }
        this.size--;
        i--;
      } else {
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Error. Index out of range.");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  clone() {
    const clonedList = new List();
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      clonedList.append(currentNode.value);
      currentNode = currentNode.next;
    }
    return clonedList;
  }

  reverse() {
    if (this.size <= 1) return;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let next;
    for (let i = 0; i < this.size; i++) {
      next = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = next;
    }
  }

  findFirst(value) {
    let currentNode = this.head;
    let firstIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        firstIndex = i;
        return firstIndex;
      }
      currentNode = currentNode.next;
    }
    return firstIndex;
  }

  findLast(value) {
    let currentNode = this.head;
    let lastIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        lastIndex = i;
      }
      currentNode = currentNode.next;
    }
    return lastIndex;
  }
}

module.exports = List;
