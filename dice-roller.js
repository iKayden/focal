const diceRoller = (num = 1) => {
  let output = [];
  for (let i = 0; i < num; i++) {
    let randNumber = Math.floor(Math.random() * 6) + 1;
    output.push(randNumber);
  }
  return output.join(", ");
};
const input = process.argv.slice(2);
console.log(`Rolled ${input} dice: ${diceRoller(input)}`);
