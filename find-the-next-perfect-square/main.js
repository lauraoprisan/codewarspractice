function findNextSquare(sq) {
    const initialSqrt = Math.sqrt(sq)
    if(Number.isInteger(initialSqrt))
       return Math.pow(initialSqrt+1,2)
    else
      return -1
  }