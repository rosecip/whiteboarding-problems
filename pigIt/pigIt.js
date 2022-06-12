const pigIt = (str) => {
  let strArr = str.split(" ")
  let finalArr = []
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(/[a-z]/i)) {
      finalArr.push(strArr[i].slice(1) + strArr[i].slice(0, 1) + "ay")
    }
  }
  return finalArr.join(" ")
}
