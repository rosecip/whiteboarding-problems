const highAndLow = (numbers) => {
  const numArr = numbers.split(" ")
  let numArr2 = []

  for (let i = 0; i < numArr.length; i++) {
    numArr2.push(parseInt(numArr[i]))
  }
    
  let high = numArr2[0]
  let low = numArr2[0]

  for (let i = 0; i <= numArr2.length; i++) {
    if (numArr2[i] > high) {
      high = numArr2[i]
    } 
    if (numArr2[i] < low) {
      low = numArr2[i]
    }
  }
  return `${high} ${low}`
}