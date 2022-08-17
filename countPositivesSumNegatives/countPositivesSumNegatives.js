const countPositivesSumNegatives = (input) => {
  if (input === [] || input === null) {
    return []
  } else {
    let count = 0
    let sum = 0
    for (let i = 0; i <= input.length; i++) {
      if (input[i] > 0) {
        count++
      } else {
        if (input[i] < 0) 
          sum = sum + input[i]
      }
    }
    if (count === 0 && sum === 0) {
      return []
    } else {
      return [count, sum]
    }
  }
}