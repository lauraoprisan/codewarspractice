function openOrSenior(data){
    return data.map(person=>{
      if(person[0]>=55 && person[1]>7){
        return "Senior"
      } else{
        return "Open";
      }
    })
  }