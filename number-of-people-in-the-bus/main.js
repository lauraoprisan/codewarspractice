const number = function(busStops){
    let eachStationResult
    let peopleInBusEachStation =[]
    busStops.forEach((array)=> {
        eachStationResult = array[0] - array[1]
        peopleInBusEachStation.push(eachStationResult)
    })
    let resultNum = peopleInBusEachStation.reduce((acc,c)=> acc+c,0)
    return resultNum
  }
