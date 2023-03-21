const List = require("./list");

describe("length()", () => {
  test("should return 0 for an empty list", () => {
    const list = new List();
    expect(list.length()).toEqual(0);
  });

  test("should return the correct length for not empty list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.length()).toEqual(3);
  });
});

describe("append()", () => {
  test("should get items at correct index", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("should throw an error for invalid input type", () => {
    const list = new List();

    // case 1
    expect(() => {
      list.append(123);
    }).toThrow("Error. Invalid input value type.");
    expect(list.length()).toEqual(0);

    // case 2
    expect(() => {
      list.append("ab");
    }).toThrow("Error. Invalid input value type.");
    expect(list.length()).toEqual(0);
  });
});

describe("insert()", () => {
  test("should insert node at the beginning of the list", () => {
    const list = new List();
    list.append("b");
    list.insert("a", 0);
    expect(list.length()).toEqual(2);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
  });

  test("should insert node at the end of the list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.insert("c", 2);
    expect(list.length()).toEqual(3);
    expect(list.get(2)).toBe("c");
  });

  test("should insert node in the middle of the list", () => {
    const list = new List();
    list.append("a");
    list.append("c");
    list.insert("b", 1);
    expect(list.length()).toEqual(3);
    expect(list.get(1)).toBe("b");
  });

  test("should throw an error for invalid input type", () => {
    const list = new List();
    expect(() => {
      list.insert("abc", 0);
    }).toThrow("Error. Invalid input value type.");
    expect(list.length()).toEqual(0);
  });

  test("should throw an error for incorrect index", () => {
    const list = new List();
    expect(() => {
      list.insert("a", 1);
    }).toThrow("Error. Incorrect index.");
    expect(list.length()).toEqual(0);
  });
});

describe("delete()", () => {
  test("should delete the correct node at the given index", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.delete(1);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
    expect(list.length()).toBe(2);
  });

  test("should delete the only node in the list", () => {
    const list = new List();
    list.append("a");
    list.delete(0);
    expect(list.length()).toBe(0);
  });

  test("should delete the last node in the list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.delete(2);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("should throw an error for index out of range", () => {
    const list = new List();
    list.append("a");
    expect(() => {
      list.delete(1);
    }).toThrow("Error. Index out of range.");
    expect(list.length()).toBe(1);
  });
});

describe("deleteAll()", () => {
  test("should delete all nodes with the given value", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("d");
    list.deleteAll("a");
    expect(list.length()).toEqual(3);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("d");
  });

  test("should delete all nodes when given value is the only element", () => {
    const list = new List();
    list.append("a");
    list.deleteAll("a");
    expect(list.length()).toEqual(0);
  });

  test("should delete no nodes when given value is not present", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.deleteAll("c");
    expect(list.length()).toEqual(2);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
  });
});

describe("get()", () => {
  test("should get item at correct index", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("should throw an error for index out of range", () => {
    const list = new List();
    list.append("a");
    expect(() => {
      list.get(1);
    }).toThrow("Error. Index out of range.");
    expect(list.length()).toBe(1);
  });

  test("should throw an error for negative index", () => {
    const list = new List();
    list.append("a");
    expect(() => {
      list.get(-1);
    }).toThrow("Error. Index out of range.");
    expect(list.length()).toBe(1);
  });
});

describe("clone()", () => {
  test("should return a new list with the same values", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();
    expect(clonedList.length()).toEqual(3);
    expect(clonedList.get(0)).toBe("a");
    expect(clonedList.get(1)).toBe("b");
    expect(clonedList.get(2)).toBe("c");
  });

  test("should not modify the original list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();
    clonedList.delete(1);
    expect(list.length()).toEqual(3);
    expect(list.get(1)).toBe("b");
  });

  test("should return a new list with the same properties as the original", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();
    expect(clonedList.size).toEqual(list.size);
    expect(clonedList.head.value).toEqual(list.head.value);
    expect(clonedList.tail.value).toEqual(list.tail.value);
  });
});

describe("reverse()", () => {
  test("should do nothing if the list is empty", () => {
    const list = new List();
    list.reverse();
    expect(list.length()).toBe(0);
  });

  test("should do nothing if the list has only one node", () => {
    const list = new List();
    list.append("a");
    list.reverse();
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe("a");
  });

  test("should reverse the list with multiple nodes", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.reverse();
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("c");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("a");
  });
});

describe("findFirst()", () => {
  test("should return -1 for empty list", () => {
    const list = new List();
    expect(list.findFirst("a")).toBe(-1);
  });

  test("should return -1 if value is not found", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.findFirst("d")).toBe(-1);
  });

  test("should return the index of the first occurrence of value", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("b");
    expect(list.findFirst("b")).toBe(1);
  });
});

describe("findLast()", () => {
  test("should return -1 for empty list", () => {
    const list = new List();
    expect(list.findLast("a")).toBe(-1);
  });

  test("should return -1 if value is not found", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.findLast("d")).toBe(-1);
  });

  test("should return the index of the last occurrence of value", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("b");
    expect(list.findLast("b")).toBe(3);
  });
});

describe("clear()", () => {
  test("should clear the linked list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    list.clear();
    expect(list.size).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});

describe("extend()", () => {
  test("should add all elements from the given list to the end of the current list", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();
    list2.append("d");
    list2.append("e");
    list2.append("f");

    list1.extend(list2);

    expect(list1.length()).toEqual(6);
    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.get(2)).toEqual("c");
    expect(list1.get(3)).toEqual("d");
    expect(list1.get(4)).toEqual("e");
    expect(list1.get(5)).toEqual("f");
  });

  test("should not modify the given list", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();
    list2.append("d");
    list2.append("e");
    list2.append("f");

    list1.extend(list2);

    expect(list2.length()).toEqual(3);
    expect(list2.get(0)).toEqual("d");
    expect(list2.get(1)).toEqual("e");
    expect(list2.get(2)).toEqual("f");
  });

  test("should do nothing if the given list is empty", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();

    list1.extend(list2);

    expect(list1.length()).toEqual(3);
    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.get(2)).toEqual("c");
  });
});
