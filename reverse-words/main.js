function reverseWords(str) {
    const wordsArray = str.split(" ")
    const reverseWords =  wordsArray.map(word => word.split("").reverse().join(""))
    return reverseWords.join(" ")
  }