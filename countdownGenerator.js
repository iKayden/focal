const countdownGenerator = function (x) {
  return function () {
    if (x === 0) {
      x--;
      return "Blast Off! 🚀🚀🚀";
    } else if (x < 0) {
      x--;
      return "Rockets already gone, bub!";
    }
    x--;
    return `T-minus ${x + 1}`;
  };
};

const countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
