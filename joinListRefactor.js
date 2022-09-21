const joinList = (words) => {
  let string = "";
  for (let i = 0; i < words.length; i++) {
    words[i] !== words[words.length - 1]
      ? (string += words[i] + ", ")
      : (string += words[i]);
  }
  return string;
};
// Test / Driver Code below...
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
