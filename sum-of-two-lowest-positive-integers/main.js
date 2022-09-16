function sumTwoSmallestNumbers(numbers) {  
    let selectNum = numbers.filter(x=> x>0 && Number.isInteger(x));
    let sortedNum = selectNum.sort((a,b)=>a-b);
    if(selectNum){
      return sortedNum[0]+sortedNum[1];
    }else{
      return false;
    }
  }