// eslint-disable-next-line func-style
function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = -1;

  return function () {
    i += 1;
    return list[i];
  };
}

const rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 1
console.log(rollLoadedDie()); // 6
