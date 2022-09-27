function XO(str) {
    let smallStrArr = str.toLowerCase().split("");
    let countO=0, countX=0;
    smallStrArr.forEach(item =>{
    if(item=="o")
      countO++;
    else if(item=="x")
      countX++;
    })
    return countO==countX ? true:false;
        
}