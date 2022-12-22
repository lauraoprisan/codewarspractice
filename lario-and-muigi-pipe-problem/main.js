function pipeFix(numbers){
    const min= Math.min(...numbers);
    const max= Math.max(...numbers);
    let correctPipes=[];
    for(let i=min;i<=max;i++){
      correctPipes.push(i)
    }
    return correctPipes;
  }