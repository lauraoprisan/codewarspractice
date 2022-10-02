function solution(str, ending){
    let reversedStr = str.split('').reverse();
    let reversedEnding = ending.split('').reverse();
    let counter=0;
    for(let i = 0;i<reversedEnding.length;i++){
        if(reversedEnding[i]==reversedStr[i]){
          counter++;
        }
  }
  if(counter==reversedEnding.length){
    return true
  } else{
    return false
  }
}
