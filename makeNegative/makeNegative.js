const makeNegative = (num) => {
  let finalNum = 0
  if (num > 0) {
    finalNum = num - num * 2
  } else {
    if (num < 0) {
      return num
    }
  } return finalNum
}