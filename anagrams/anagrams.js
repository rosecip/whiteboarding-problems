const anagrams = (word, words) => {
  arr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") === word.split("").sort().join("")) {
      arr.push(words[i])
    }
  } return arr
}