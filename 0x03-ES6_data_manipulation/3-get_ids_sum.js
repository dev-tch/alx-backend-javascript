export default function getStudentIdsSum(listStudents) {
  const initialValue = 0;
  const sum = listStudents.reduce(
    (accumulator, student) => accumulator + student.id,
    initialValue,
  );
  return sum;
}
