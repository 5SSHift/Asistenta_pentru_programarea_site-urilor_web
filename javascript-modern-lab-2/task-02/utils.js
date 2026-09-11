// utils.js - functii generice de calcul, reutilizabile in intreaga aplicatie

function calculateSum(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}

export { calculateSum, calculateAverage };
