const studentList = new Map();

function addStudent(name, data) {
  if (studentList.has(name)) {
    return "oquvchi bor";
  }
  studentList.set(name, data);
  return `${name} qoshildi`;
}

function readStudent(name) {
  return studentList.get(name) || "bunaqasi yoq";
}

function updateStudent(name, data) {
  if (!studentList.has(name)) {
    return "bunaqasi yoq";
  }
  studentList.set(name, { ...studentList.get(name), ...data });
  return `${name} yangilandi`;
}

function deleteStudent(name) {
  if (!studentList.has(name)) {
    return "topilmadi";
  }
  studentList.delete(name);
  return "ochirildi";
}

///       chatgptdan test caselar oldim       ///

//TODO addstudent
console.log(addStudent("Ali", { age: 18, grade: "A" }));
// Expected Output: "Ali qo'shildi"

console.log(addStudent("Ali", { age: 20, grade: "B" }));
// Expected Output: "Xatolik, o'quvchi bor"

console.log(addStudent("Hasan", { age: 19, grade: "B" }));
// Expected Output: "Hasan qo'shildi"

//TODO readStudent

console.log(readStudent("Ali"));
// Expected Output: { age: 18, grade: "A" }

console.log(readStudent("Hasan"));
// Expected Output: { age: 19, grade: "B" }

console.log(readStudent("Bobur"));
// Expected Output: "Bunaqasi yo'q"

//TODO updateStudent

console.log(updateStudent("Ali", { age: 19 }));
// Expected Output: "Ali yangilandi"

console.log(readStudent("Ali"));
// Expected Output: { age: 19, grade: "A" } ✅ (grade remains)

console.log(updateStudent("Hasan", { grade: "A+", hobby: "Football" }));
// Expected Output: "Hasan yangilandi"

console.log(readStudent("Hasan"));
// Expected Output: { age: 19, grade: "A+", hobby: "Football" } ✅ (keeps old data, adds new)

console.log(updateStudent("Bobur", { age: 22 }));
// Expected Output: "Bunaqasi yo'q"

//TODO deleteStudent

console.log(deleteStudent("Ali"));
// Expected Output: "O'chirildi"

console.log(readStudent("Ali"));
// Expected Output: "Bunaqasi yo'q"

console.log(deleteStudent("Ali"));
// Expected Output: "Topilmadi"
