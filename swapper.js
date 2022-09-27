const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");
  const values1 = Object.keys(object1);

  const saveObject1 = object1[key1];

  // console.log("key 1", key1, "key 2", key2)
  object1[key1] = object2[key2];
  object2[key2] = saveObject1;

  // Put your solution here

  console.log("object1: ", object1);
  // console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// use object.keys() to get the keys out
// store in a new variable
// reassign values

// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }
