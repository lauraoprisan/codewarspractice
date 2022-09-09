function find_average(array) {
    if(array.length==0){
      return 0;
    } else {
      let sum = array.reduce((a,c)=> a+c,0)
      let avg = sum/array.length;
      return avg;
    }
  }