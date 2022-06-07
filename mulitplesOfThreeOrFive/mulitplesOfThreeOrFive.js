const mulitplesOfThreeOrFive = (number) => {
  let answer = 0
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer = answer + i
    }
  }
  return answer
}


