const findWaldo = function (names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });
};

findWaldo(["Alice", "Boji", "Waldo", "Bob", "Winston"], function (index) {
  console.log(`Found Waldo at index ${index} !`);
});
