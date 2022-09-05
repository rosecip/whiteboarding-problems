const validParentheses = (parens) => {
  let parenCount = 0
  if (parens === "") {
    return true
  }
  for (let i = 0; i <= parens.length; i++) {
    if (parenCount < 0) {
      return false
    }
    if (parens[i] === "(") {
      parenCount++
    } else {
      if (parens[i] === ")")
      parenCount--
    }
  }
  if (parenCount === 0) {
    return true
  } else {
    return false
  }
};