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
      let current = this.head;
      let i = 0;

      while (i < index - 1) {
        current = current.next;
        i++;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size++;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Error. Index out of range.");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
}
