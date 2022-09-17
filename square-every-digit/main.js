function squareDigits(num){
    let str = num.toString();
    let numArr = str.split('')
    let squareNum = numArr.map(x=>Math.pow(x,2));
    let concatenatedNum = squareNum.join('');
    return Number(concatenatedNum);
  }
