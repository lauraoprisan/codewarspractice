function consonantCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let consonants=0;
    str.toLowerCase().split('').forEach(letter =>{
        if(!vowels.includes(letter)){
            consonants++
        }
    })
   console.log(consonants)
  }

  consonantCount("helLo world")
