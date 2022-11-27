function flattenAndSort(array) {
  let elementsArray =[];
    array.forEach(item=>{
      for(let i=0;i<item.length;i++){
        elementsArray.push(item[i])
      }
    })
    return elementsArray.sort((a,b)=>a-b)
  }
