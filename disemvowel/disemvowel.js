const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

const disemvowel = (str) => {
  let word = str.split("")
  finalWord = []
  for (let i = 0; i <= word.length; i++) {
    if (!vowels.includes(word[i])) {
      finalWord.push(word[i])
    } 
  } return finalWord.join(" ")
}
