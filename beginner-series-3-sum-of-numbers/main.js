function getSum( a,b )
{
   let array=[a,b];
   console.log(array)
  let sum=0;
  let sortedNum = array.sort((a,b) => a-b)
  if(a==b){
    return a
  } else{
    for(sortedNum[0];sortedNum[0]<=sortedNum[1];sortedNum[0]++)
      sum+=sortedNum[0];
  }
  return sum;
}

console.log(getSum(0,5))
