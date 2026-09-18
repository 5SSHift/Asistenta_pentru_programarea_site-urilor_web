// Task 01 - Prelucrarea unui array de note folosind filter(), map() si reduce()

const grades = [7, 9, 5, 10, 8, 6];

// 1. Toate notele mai mari sau egale cu 8
const highGrades = grades.filter((grade) => grade >= 8);

// 2. Media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// 3. Fiecare nota marita cu 1 punct, fara a depasi 10
const increasedGrades = grades.map((grade) => Math.min(grade + 1, 10));

console.log("Note initiale:", grades);
console.log("Note >= 8:", highGrades);
console.log("Media notelor:", average.toFixed(2));
console.log("Note marite cu 1 punct (max 10):", increasedGrades);
