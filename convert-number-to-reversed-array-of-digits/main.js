function digitize(n) {
    let str = n.toString()
    let array = str.split('')
    let reversedArray = array.reverse()
    let numReversedArray = reversedArray.map(item => Number(item))
    return numReversedArray
  }