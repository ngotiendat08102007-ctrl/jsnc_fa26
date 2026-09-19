console.log("day la lab 1");
// PHP ; $_tenbien
// JS let, const
// var: ko dung var
let name = "hoadv";
name = "hoadv21";
let age = 36;

console.log("Ten toi la: ", name);
console.log("Tuoi cua toi la:", age);

//bai2
let agee = 20;
console.log(age); // 20

age = 21;
console.log(age); // 21

//bai3
const a = 10;
const b = 5;

console.log("Tổng: " + (a + b));   // 15
console.log("Hiệu: " + (a - b));   // 5
console.log("Tích: " + (a * b));   // 50
console.log("Thương: " + (a / b)); // 2

//bai4
function sayHello(name) {
  console.log(`Xin chào ${name}`);
}
sayHello("ĐẠT")

function sum(a, b) {
  // return a + b;
  console.log("aaa");
  if (a) {
    console.log(a);
    return;
  }
  console.log(b);
}

sum(3, 4);
// return: tra ve sau return
// return: ket thuc fuction
//baì 5
function sum(a, b){
  return a + b;
}
const result = sum(10, 20);
console.log(result);
//bai6
function tinhtong(gia, soluong){
  return gia * soluong;
}
const total = tinhtong(100000, 3);
console.log(total);
//bai7
const math = 8;
const english = 7;
const javascript = 9;
function calculateAverage(math, english, javascript){
  return (math+english+javascript) /3;
}
const avarge = calculateAverage(8,7,6);
console.log(avarge);