function mergeArrays(arr1, arr2) {
    arr2.forEach(item=> arr1.push(item) )
    arr1.sort((a,b)=>a-b)
    let mergedArrays = [...new Set(arr1)]
    return mergedArrays
  }
