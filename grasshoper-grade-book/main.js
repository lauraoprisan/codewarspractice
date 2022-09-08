function getGrade (s1, s2, s3) {
    let totalScore = s1+s2+s3;
    let averageScore = totalScore/3;
    if (averageScore < 60)  return "F";
      else if (averageScore < 70) return "D";
      else if (averageScore < 80) return "C";
      else if (averageScore < 90) return "B";
      else return "A";
  }