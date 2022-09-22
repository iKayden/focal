const raisinAlarm = function (cookie) {
  const outputArr = [];
  for (let item of cookie) {
    if (item.includes("🍇")) {
      outputArr.push("Raisin Alert!");
    } else {
      outputArr.push("All good!");
    }
  }
  return outputArr;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
