function addBinary(a,b) {
  let decimalNum = a+b;
  let inversedBinaryArray = [];
  while(decimalNum/2!==0){
    inversedBinaryArray.push(decimalNum%2)
      decimalNum = Math.floor(decimalNum/=2)
  }
  let binaryArray = inversedBinaryArray.reverse();
  let binaryNum = binaryArray.join('');
  return binaryNum;
}