function getMiddle(s)
{ 
  let numberOfLetters = s.length;
  if(numberOfLetters%2==1){
    return s.charAt(numberOfLetters/2);
  } else{
    return s.charAt(numberOfLetters/2-1) + s.charAt(numberOfLetters/2)
  }
}

console.log(getMiddle('laura'))