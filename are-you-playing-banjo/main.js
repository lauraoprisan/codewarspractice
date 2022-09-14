function areYouPlayingBanjo(name) {
    let firstLetter = name.charAt(0).toLowerCase()
  //   firstLetter === 'r' ?  name + ' plays banjo' : name + ' does not play banjo' 
    if(firstLetter === 'r'){
      return name + ' plays banjo'
    } else {
      return name + ' does not play banjo'
    }
  }