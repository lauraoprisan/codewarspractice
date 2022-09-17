function disemvowel(str) {

    let consanantArr = str.split('').filter(x => !['a','e','i','o','u','A','E','I','O','U'].includes(x));
    let consanantStr = consanantArr.join('');
    return consanantStr;
  }

 console.log(disemvowel('My name is LauraA')) 