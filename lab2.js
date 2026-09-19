//Bài 1

const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(names);
console.log(names[0]);
console.log(names[names.length-1]);
console.log(names[names.length]);

names.push("Nam");
console.log(names);

names.pop("An");
console.log(names);

//Bài 2
const ten = ["An", "Bình", "Nam", "Hòa", "Lan"];
for (const tenn of ten){
    console.log(tenn);
}   
//bài 3
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
console.log(student.id);
console.log(student.age);
console.log(student.name);
console.log(student.email);
student.age = 28;
console.log(student.age);
student.phone="0123456";
console.log(student.phone);
//Bài 4
const students= [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];
console.log(students);
console.log(students[0].name);
console.log(students[1].age);

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}