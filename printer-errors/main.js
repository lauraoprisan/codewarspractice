function printerError(s) {
    const array = s.split('');
    const totalColors = array.length;
    let errors=0;
    array.forEach(color=>{
      if(color>"m"){
        errors++
      }
    })
  return `${errors}/${totalColors}`
}