function nbDig(n, d) {
    let counter=0;
        for (let i=0;i<=n;i++){
          let square=(i*i+"").split("");
          square.forEach((num)=>num==d?counter++:null)
        }return counter;
    }