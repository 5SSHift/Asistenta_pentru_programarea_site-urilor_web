import {
  employees,
  getEmployeesByDepartment,
  groupByDepartment,
  calculateAverageSalary,
  getExperiencedEmployees,
  giveRaiseToExperienced,
  generateReport,
} from "./employees.js";

console.log("--- Toti angajatii ---");
employees.forEach(({ name, department }) => console.log(`${name} - ${department}`));

console.log("\n--- Angajati din departamentul IT ---");
getEmployeesByDepartment("IT").forEach(({ name }) => console.log(name));

console.log("\n--- Grupare pe departamente ---");
console.log(groupByDepartment());

console.log(`\nSalariul mediu: ${calculateAverageSalary().toFixed(2)} lei`);

console.log("\n--- Angajati cu experienta > 3 ani ---");
getExperiencedEmployees().forEach(({ name, experience }) =>
  console.log(`${name} - ${experience} ani`)
);

console.log("\n--- Salarii dupa majorarea cu 10% (experienta > 3 ani) ---");
giveRaiseToExperienced().forEach(({ name, salary }) =>
  console.log(`${name}: ${salary.toFixed(2)} lei`)
);

console.log(`\n${generateReport()}`);
