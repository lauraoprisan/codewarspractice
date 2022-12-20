function derDieDas(wort){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
    let vowelCounter=0;
       let wortSplit = wort.split('');wortSplit.forEach(letter => {
        if(vowels.includes(letter.toLowerCase())){
          vowelCounter++
        }
      })
    
      wortSplit.join('')
    return vowelCounter <2 ? `das ${wort}` : vowelCounter<4 ? `die ${wort}` : `der ${wort}`;
  }