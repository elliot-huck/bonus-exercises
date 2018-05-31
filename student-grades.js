const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
};


// loops through the scores array and counts how many of each grade
for (let i = 0; i < scores.length; i++) {
  switch (Math.ceil(scores[i] / 10)) { //divides grade by 10 & rounds up then compares it to each case to increment the corresponding letter grade
    case 5:
    case 6:
      grades.F += 1;
      break;
    case 7:
      grades.D += 1;
      break;
    case 8:
      grades.C += 1;
      break;
    case 9:
      grades.B += 1;
      break;
    case 10:
      grades.A += 1;
      break;
    default:
      break;
  }
}
for (prop in grades) {
  console.log(`Number of ${prop}s: ${grades[prop]}`);
}

// Sorts the scores array and stores it in a new array
const sortedScores = scores.sort(compare = (a, b) => {return a - b});
console.log(`Lowest score: ${sortedScores[0]}`);
console.log(`Highest score: ${sortedScores[(sortedScores.length - 1)]}`);

// Gets the most common grade and console logs it
let currentGradeCount = 0;
let mostCommonGrade = ``;
for (key in grades) {
  if (grades[key] > currentGradeCount) {
    currentGradeCount = grades[key];
    mostCommonGrade = key;
  } else if (grades[key] === currentGradeCount) {
    mostCommonGrade += `, ${key}`
  }
}
console.log(`Most common grade(s): ${mostCommonGrade} (${currentGradeCount} students)`);

// Gets the least common grade and console logs it
let leastCommonGrade = ``;
for (key in grades) {
  if (grades[key] < currentGradeCount) {
    currentGradeCount = grades[key];
    leastCommonGrade = key;
  } else if (grades[key] === currentGradeCount) {
    leastCommonGrade += `, ${key}`
  }
}
console.log(`Least common grade(s): ${leastCommonGrade} (${currentGradeCount} students)`)