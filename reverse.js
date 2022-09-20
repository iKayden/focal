const input = process.argv[2];

const reverse = (orignal) => {
  return orignal.split("").reverse().join("");
};
if (input) {
  console.log(reverse(input));
}
