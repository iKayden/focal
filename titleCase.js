const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

console.log(titleCase("test"));
console.log(titleCase("tEst Is goOd"));
console.log(titleCase("A"));
console.log(titleCase(""));
