
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
//truy cập id dom = students
let content = '';
for (let i = 0; i < students.length; i++) {
  content += `Tên sinh viên: ${students[i].name}<br>`;
}
document.getElementById("students").innerHTML = content;
console.log(content);

//baitaptonghop

const products = [
  { id: 1, name: "iPhone 15", price: 20000000 },
  { id: 2, name: "Samsung Galaxy S24", price: 18000000 },
  { id: 3, name: "Xiaomi 14", price: 12000000 },
];

// Bước 1: In danh sách ra Console
console.log(products);

// Bước 2 + 3: Duyệt bằng for, in "Tên - Giá"
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].name} - ${products[i].price}`);
}

