function points(games) {
    let total = 0;
    games.map(match=>{
      if(match[0]>match[2])
        total+=3;
      else if(match[0]==match[2])
        total+=1
      
    })
    return total
  }