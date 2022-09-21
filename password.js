const string = process.argv[2];
const obfuscate = (string) => {
  let strArray = string.split("");
  let newString = "";
  for (let i = 0; i < strArray.length; i++) {
    let str = strArray[i];
    if (str === "a") {
      newString += "4";
    } else if (str === "e") {
      newString += "3";
    } else if (str === "o") {
      newString += "0";
    } else if (str === "l") {
      newString += "1";
    } else {
      newString += str;
    }
  }
  console.log(newString);
  return newString;
};
obfuscate(string);
