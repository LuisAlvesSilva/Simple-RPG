function studentMsg(totalScores, studentScore) {
    avarage = getAverage(totalScores);
    grade = getGrade(studentScore);
    
    return 'Class average: ' + avarage + '. Your grade:' + grade + '. You failed the course.';
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));