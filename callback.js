var students = [
  { name: "Rehan", subject: "JavaScript" },
  {
    name: "Alishba",
    subject: "Java",
  },
];

function enrollStudent(student) {
  setTimeout(() => {
    students.push(student);
    console.log("Student pushed successfully");
  }, 1000);
}

function getstudent() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name} ${student.subject}   </li>`;

      document.getElementById("student").innerHTML = str;
      console.log("Student fetched successfully !");
    });
  }, 2000);
}

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent);
getstudent();
