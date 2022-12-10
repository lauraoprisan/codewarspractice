function solution(string) {
    let arrangedArr = string.split('').map(char=>{
      if(char===char.toUpperCase()){
        char=" "+ char; 
      }
      return char
    })
    return arrangedArr.join("")
}
