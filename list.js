class List {
  constructor() {
    this.array = [];
  }

  length() {
    return this.array.length;
  }

  append(value) {
    const isSingleChar = typeof value === "string" && value.length === 1;
    if (!isSingleChar) {
      throw new Error("Error. Invalid input value type.");
    }
    this.array.push(value);
  }

  insert(value, index) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new Error("Error. Invalid input value type.");
    }
    if (index < 0 || index > this.array.length) {
      throw new Error("Error. Incorrect index.");
    }
    this.array.splice(index, 0, value);
  }

  delete(index) {
    if (index < 0 || index >= this.array.length) {
      throw new Error("Error. Index out of range.");
    }
    return this.array.splice(index, 1)[0];
  }

  deleteAll(value) {
    for (let i = this.array.length - 1; i >= 0; i--) {
      if (this.array[i] === value) {
        this.array.splice(i, 1);
      }
    }
  }

  get(index) {
    if (index < 0 || index >= this.array.length) {
      throw new Error("Error. Index out of range.");
    }
    return this.array[index];
  }

  clone() {
    const clonedList = new List();
    clonedList.array = [...this.array];
    return clonedList;
  }

  reverse() {
    this.array.reverse();
  }

  findFirst(value) {
    return this.array.indexOf(value);
  }

  findLast(value) {
    let lastIndex = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        lastIndex = i;
      }
    }
    return lastIndex;
  }

  clear() {
    this.array = [];
  }

  extend(list) {
    this.array.push(...list.array);
  }
}

module.exports = List;
