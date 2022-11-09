function oddOrEven(array) {
    if (!array){
      return "even"
    } else{
      return array.reduce((acc,c)=>acc+c,0)%2==0 ? "even" : "odd"
    }
  }