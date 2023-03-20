const List = require("./list");

const list = new List();

list.append("a");
list.append("b");
list.append("x");
console.log("List length:", list.length());
console.log("List:", list.get(0), list.get(1), list.get(2));

list.insert("x", 1);
console.log("List length:", list.length());
console.log("List:", list.get(0), list.get(1), list.get(2), list.get(3));

list.delete(2);
console.log("List length:", list.length());
console.log("List:", list.get(0), list.get(1), list.get(2));

list.deleteAll("x");
console.log("List length:", list.length());
console.log("List:", list.get(0));
