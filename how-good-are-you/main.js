function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = classPoints.reduce((a,c)=> a+c,0) + yourPoints;
    let averagePoints = totalPoints/(classPoints.length+1);
    return averagePoints<yourPoints;
  }