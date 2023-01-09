function shortcut (string) {
    return string.split('').filter(letter => {
      if(!['a','e','i','o','u'].includes(letter))
        return letter;
    }).join('')
  }