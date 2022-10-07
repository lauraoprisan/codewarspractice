function longest(s1, s2) {
    //compare the arrays with themselves and between them. and then make an ordered array
    let longStr = s1+s2;
    let uniqueValues = new Set(longStr)
    let uniqueArr = Array.from(uniqueValues)
    let orderedStr = uniqueArr.sort().join("");
    return orderedStr;
  }

  console.log(longest("sgsgsg", "egawh"))