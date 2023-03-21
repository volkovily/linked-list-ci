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

const list2 = new List();

list2.append("a");
list2.append("x");
list2.append("x");
list2.append("x");
console.log('Index of first "x" in list2:', list2.findFirst("x"));
console.log('Index of last "x" in list2:', list2.findLast("x"));

list2.clear();
console.log("list2 length after clear:", list2.length());

console.log("List length:", list.length());
console.log("clonedList length:", clonedList.length());
list.extend(clonedList);
console.log("List length after extend:", list.length());
