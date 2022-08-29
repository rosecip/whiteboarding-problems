const stringEndsWith = (str, ending) => {
  let wordEnd = str.slice(str.length - ending.length)
  if (wordEnd === ending) {
    return true
  } else {
    return false
  }
}