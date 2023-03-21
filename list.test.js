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
    expect(list.length()).toEqual(1);
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
