const firstPalindrome = (words) => {
    let word = ""
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      word = words[i]
    } if (word !== "") {
        return word
    }
  } return word
}
