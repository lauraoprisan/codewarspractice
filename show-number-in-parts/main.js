function showNum(num){
    let arrayNum = num.toString().split('')
    let result='';
    arrayNum.forEach((item)=>{
        result+=item;
        console.log(result)
    })
}
showNum(100)