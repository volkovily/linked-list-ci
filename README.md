# Linked Lists. Unit tests. CI

## Description

This application demonstrates different operations with a typed list.
The project has two realizations:

1. [circular singly linked list](https://github.com/volkovily/linked-list-ci/blob/7dc50b0fad918bc8aa0d5193f71c1c201e0c649e/list.js) where each node points to the next node, with the last node pointing back to the first node. Useful for cyclic data.
2. [list based on built-in arrays](https://github.com/volkovily/linked-list-ci/blob/main/list.js) that implemented using a JavaScript array. A bit slower, but still allows for efficient insertion and deletion of elements.

## Variant calculation

Variant is needed to define what realizations will be used.

`variant = student's ID № % 4`

```
myVariant = 1108 % 4 = 0
```

## How to use

Make sure you have [node.js](https://nodejs.org/en/download) installed on your machine.

1. Clone repository.

2. Install all dependancies:

```bash
$ npm install
```

To run methods demonstration file:

```bash
$ node index.js
```

To run tests:

```bash
$ npm test
```

## Commits with failed CI tests

[Tests failed 1](https://github.com/volkovily/linked-list-ci/commit/0c52364ee1d0b6a8a86d33850427ebf36c26ffcb)
[Tests failed 2](https://github.com/volkovily/linked-list-ci/commit/7112eb88552f3f3405862f8de6bd54b959e6edcd)

## Conclusion

Unit-tests helped me to make sure that any changes in the code are working as expected and meet the requirements. By catching bugs and errors early, unit tests help to reduce the time and effort required for debugging and maintenance of the software.
