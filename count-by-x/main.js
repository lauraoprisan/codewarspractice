function countBy(x, n) {
    let countArray =[]
    for(let i=1;i<=n;i++){
      countArray.push(x*i);
    }
    return countArray
  }