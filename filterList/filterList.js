const filterList = (l) => {
  let arr = []
  for (let i = 0; i <= l.length; i++) {
    if (typeof l[i] === 'number') {
      arr.push(l[i])
    }
  } return arr
}