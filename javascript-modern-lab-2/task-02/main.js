// main.js - punctul de intrare al aplicatiei

import { calculateSum, calculateAverage } from "./utils.js";
import {
  getAllStudents,
  getStudentsAbove8,
  getClassAverage,
  findStudentById,
  addStudent,
} from "./students.js";

// Test rapid pentru functiile din utils.js
const numbers = [10, 20, 30, 40];
console.log("Suma numerelor:", calculateSum(numbers));
console.log("Media numerelor:", calculateAverage(numbers));

// Afisarea tuturor elevilor
console.log("\n--- Toti elevii ---");
getAllStudents().forEach(({ id, name, grade }) => {
  console.log(`ID: ${id} | Nume: ${name} | Nota: ${grade}`);
});

// Elevii cu nota >= 8
console.log("\n--- Elevi cu nota >= 8 ---");
getStudentsAbove8().forEach(({ name, grade }) => {
  console.log(`${name} - nota ${grade}`);
});

// Media clasei
console.log(`\nMedia clasei: ${getClassAverage().toFixed(2)}`);

// Cautarea unui elev existent, cu try/catch
try {
  const student = findStudentById(2);
  console.log(`\nElev gasit: ${student.name}, nota ${student.grade}`);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

// Cautarea unui elev inexistent, cu try/catch
try {
  const student = findStudentById(100);
  console.log(`Elev gasit: ${student.name}`);
} catch (error) {
  console.error(`\nEroare: ${error.message}`);
}

// Adaugarea unui elev nou
addStudent({ id: 6, name: "Georgiana", grade: 8 });
console.log("\n--- Elevi dupa adaugare ---");
getAllStudents().forEach(({ id, name, grade }) => {
  console.log(`ID: ${id} | Nume: ${name} | Nota: ${grade}`);
});
