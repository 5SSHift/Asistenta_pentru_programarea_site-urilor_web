// students.js - toata logica legata de elevi, separata intr-un modul propriu

import { calculateAverage } from "./utils.js";

const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Andrei", grade: 6 },
  { id: 5, name: "Elena", grade: 8 },
];

function getAllStudents() {
  return students;
}

function getStudentsAbove8() {
  return students.filter((student) => student.grade >= 8);
}

function getClassAverage() {
  const grades = students.map((student) => student.grade);
  return calculateAverage(grades);
}

function findStudentById(id) {
  const student = students.find((student) => student.id === id);
  if (!student) {
    throw new Error(`Elevul cu id-ul ${id} nu a fost gasit.`);
  }
  return student;
}

function addStudent(newStudent) {
  students.push(newStudent);
  return students;
}

export {
  students,
  getAllStudents,
  getStudentsAbove8,
  getClassAverage,
  findStudentById,
  addStudent,
};
