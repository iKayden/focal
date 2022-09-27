// eslint-disable-next-line func-style
function makeIdGenerator() {
  let id = 0;
  // The following is the closure function
  return function () {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId(), "--------End NextId--------"); // Logs: 2

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
};

console.log(rollDie()); // 1 (for example)
