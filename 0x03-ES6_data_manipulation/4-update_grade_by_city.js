export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const filteredStudents = listStudents.filter((student) => student.location === city);
  return filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
}
