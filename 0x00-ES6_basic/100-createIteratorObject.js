export default function createIteratorObject(report) {
  const employees = [];
  for (const dep of Object.values(report.allEmployees)) {
    employees.push(...dep);
  }
  return employees;
}
