const lengthOfLastWord = (string) => {
    const arr = string.split(" ")
    return arr[arr.length - 1].length
}