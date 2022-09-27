const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

const outputFrame = (output) => {
  console.log("*******************");
  console.log("*    " + output + "       *");
  console.log("*******************");
};

const biggestFollower = (dataArr) => {
  // Task Function #1
  let answer = "";
  let numberOfFollowers = 0;
  for (let person in dataArr) {
    // console.log("Name:  ", dataArr[person].name);
    // console.log("Length:  ", person.length);
    // console.log("Age:  ", dataArr[person].age);
    // console.log("Follows:  ", dataArr[person].follows);
    // console.log("-----------Next Person-------------");
    const following = dataArr[person].follows;
    const name = dataArr[person].name;
    if (numberOfFollowers < following.length) {
      numberOfFollowers = following.length;
      answer = name;
    }
  }
  return outputFrame(answer);
};
// biggestFollower(data)

//callback/helper function #1 to get the needed List of keys:values
//Use it for mostPopular function
const takeObjMakeList = (object) => {
  const outputList = {};
  for (const index in object) {
    for (const key in object[index].follows) {
      if (!outputList[key]) {
        outputList[key] = 1;
      }
      outputList[key] += 1;
    }
  }
  // console.log(outputList);
  return outputList;
};

const mostFollowedId = (objectList) => {
  //callback/helper function #2
  const outputArray = [];
  let highestNum = 0;
  for (const item in objectList) {
    if (objectList[item] >= highestNum) {
      highestNum = objectList[item];
    }
  }
  console.log("Object list ->", objectList);
  for (const item in objectList) {
    console.log("Object item ->", objectList[item]);
    if (highestNum === objectList[item]) {
      console.log("Name --->", objectList.name);
      outputArray.push(objectList.name);
    }
  }
  return outputArray;
};

const mostPopular = (data) => {
  // Task Function #2
  const objectList = takeObjMakeList(data);
  const arrayList = mostFollowedId(objectList);
  const output = arrayList.join(", ");
  console.log("most popular output-->", output, "--array list->", arrayList);
  return output;
};

console.log(takeObjMakeList(data));
//   biggestFollower(data);
mostPopular(data);
