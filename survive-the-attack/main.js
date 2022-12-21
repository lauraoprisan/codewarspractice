function hasSurvived(attackers, defenders){
  
    //damage points
    const attackerDamage = attackers.reduce((acc,c)=>acc+c, 0);
    const defenderDamage = defenders.reduce((acc,c)=>acc+c, 0);
    
    
    //adding placeholder soldiers. making the arrays the same length
      let difference = attackers.length -defenders.length;
      if(difference<0){
        for(let i=-1;i>=difference;i--){
          attackers.push(0)
        }
      } else if(difference>0){
        for(let i=1;i<=difference;i++){
          defenders.push(0)
        }
      } 
    
    //determining surviving soldiers
    let attackerSurvivers=0, defenderSurvivers=0;
    attackers.forEach((soldier, index)=>{
      if(soldier > defenders[index]){
        attackerSurvivers++
      } else if (soldier < defenders[index]){
        defenderSurvivers++
      }
    })
    
    if(attackerSurvivers>defenderSurvivers){
      return false;
    } else if(attackerSurvivers<defenderSurvivers){
      return true;
    } else{
      return attackerDamage > defenderDamage ? false :true;
    }
  }
  