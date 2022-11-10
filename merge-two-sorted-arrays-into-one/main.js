function mergeArrays(arr1, arr2) {
    arr2.forEach(item=> arr1.push(item) )
    console.log(arr1)
    arr1.sort((a,b)=>a-b)
    console.log(arr1)
    let unique = [...new Set(arr1)]
    console.log(unique)
  }

  mergeArrays([1,2,4],[2,3,5])