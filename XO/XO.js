const XO = (str) => {
  let x = 0;
  let o = 0;
  const string = str.toLowerCase();
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === "x") {
      x++;
    } else {
      if (string[i] === "o") {
        o++;
      }
    }
  }
  if (x === o) {
    return true;
  } else {
    return false;
  }
};
