const userInput = process.argv[2];
const obfuscate = (string) => {
  let userString = string.split("");
  let newPassword = "";
  for (let i = 0; i < userString.length; i++) {
    let letter = userString[i];
    letter === "a"
      ? (newPassword += "4")
      : letter === "e"
      ? (newPassword += "3")
      : letter === "o"
      ? (newPassword += "0")
      : letter === "l"
      ? (newPassword += "1")
      : (newPassword += letter);
  }
  console.log(newPassword);
  return newPassword;
};

obfuscate(userInput);
