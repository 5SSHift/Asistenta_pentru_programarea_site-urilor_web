const employees = [
  { id: 1, name: "Ana Popescu", department: "IT", salary: 6000, experience: 5 },
  { id: 2, name: "Ion Vasile", department: "Marketing", salary: 4500, experience: 2 },
  { id: 3, name: "Maria Dumitru", department: "IT", salary: 7000, experience: 6 },
  { id: 4, name: "Andrei Stan", department: "Vanzari", salary: 4000, experience: 1 },
  { id: 5, name: "Elena Ionescu", department: "IT", salary: 5500, experience: 4 },
  { id: 6, name: "George Marin", department: "Marketing", salary: 4800, experience: 3 },
  { id: 7, name: "Cristina Radu", department: "Vanzari", salary: 5200, experience: 7 },
];

const getEmployeesByDepartment = (department) =>
  employees.filter((employee) => employee.department === department);

const groupByDepartment = () =>
  employees.reduce((groups, employee) => {
    const { department } = employee;
    const currentGroup = groups[department] || [];
    return { ...groups, [department]: [...currentGroup, employee] };
  }, {});

const calculateAverageSalary = () => {
  const total = employees.reduce((sum, { salary }) => sum + salary, 0);
  return total / employees.length;
};

const getExperiencedEmployees = () =>
  employees.filter(({ experience }) => experience > 3);

const giveRaiseToExperienced = () =>
  employees.map((employee) =>
    employee.experience > 3
      ? { ...employee, salary: employee.salary * 1.1 }
      : { ...employee }
  );

const generateReport = () => {
  const grouped = groupByDepartment();
  let report = "=== RAPORT ANGAJATI ===\n";

  Object.keys(grouped).forEach((department) => {
    report += `\nDepartament: ${department}\n`;
    grouped[department].forEach(({ name, salary, experience }) => {
      report += `  - ${name} | Salariu: ${salary.toFixed(2)} lei | Experienta: ${experience} ani\n`;
    });
  });

  report += `\nSalariul mediu al companiei: ${calculateAverageSalary().toFixed(2)} lei\n`;
  return report;
};

export {
  employees,
  getEmployeesByDepartment,
  groupByDepartment,
  calculateAverageSalary,
  getExperiencedEmployees,
  giveRaiseToExperienced,
  generateReport,
};
