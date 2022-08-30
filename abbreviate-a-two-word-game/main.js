function abbrevName(name){

    //separ cuvintele si iau primul caracter din ele apoi unesc caracterele cu un punct intre
  const separateNamesArr= name.split(' ')
  const firstLetter = separateNamesArr[0].charAt(0).toUpperCase()
  const secondLetter = separateNamesArr[1].charAt(0).toUpperCase()
  return firstLetter +'.'+ secondLetter
}