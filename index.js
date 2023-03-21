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

list.append("b");
list.append("c");

const clonedList = list.clone();
console.log("Cloned List length:", clonedList.length());
console.log(
  "Cloned List:",
  clonedList.get(0),
  clonedList.get(1),
  clonedList.get(2)
);

clonedList.reverse();
console.log(
  "Cloned List reversed:",
  clonedList.get(0),
  clonedList.get(1),
  clonedList.get(2)
);

const testList = new List();

testList.append("a");
testList.append("x");
testList.append("x");
testList.append("x");
console.log('Index of first "x"', testList.findFirst("x"));
console.log('Index of last "x"', testList.findLast("x"));
