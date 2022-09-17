function highAndLow(numbers){
    let numArr = numbers.split(' ');
    let sortNum = numArr.sort((a,b) => a-b);
    return `${sortNum[sortNum.length-1]} ${sortNum[0]}`;
  }
