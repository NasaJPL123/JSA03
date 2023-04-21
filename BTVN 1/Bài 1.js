let student = [  {    name: "NVA",    age: 16,    course: ["mindX 01", "mindX 02", "mindX 03"]
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"]
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"]
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"]
  }
];

let ageToFind = prompt("Độ tuổi cần tìm?");
let foundAge = false;

for (let i = 0; i < student.length; i++) {
  if (student[i].age == ageToFind) {
    console.log(student[i].name);
    foundAge = true;
  }
}

if (!foundAge) {
  console.log("Không tìm thấy!");
}

let courseToFind = prompt("Khóa học cần tìm?");
let foundCourse = false;

for (let i = 0; i < student.length; i++) {
  if (student[i].course.includes(courseToFind)) {
    console.log(student[i].name);
    foundCourse = true;
  }
}

if (!foundCourse) {
  console.log("Chưa có lớp học này!");
}
