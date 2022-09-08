function fakeBin(x){
    let newArr = x.split('');
    let binaryArr = newArr.map((item) => item>=5 ? 1:0)
    let joinNum = binaryArr.join('')
    return joinNum;
    }
