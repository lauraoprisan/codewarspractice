function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,c)=>a+c,0)+arr2.reduce((a,c)=>a+c,0)
  }