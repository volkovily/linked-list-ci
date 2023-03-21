const List = require("./list");

describe("List", () => {
  test("should get items at correct index", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });
});
