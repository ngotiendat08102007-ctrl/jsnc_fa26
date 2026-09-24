const name = "dattd";
const age = 19;
const info = "Tên: " + name + " Tuổi: " + age;
console.log(info);

const myName = `Tên tôi là: ${name}
- Tuổi: ${age}`;
console.log(myName);

const students = {
    id: 1,
    name: "Ngô Tiến Đạt",
    age: 19,
};

const result = `
    Mã sinh viên: ${students.id}
    Tên: ${students.name}
    Tuổi: ${students.age}
`;
//bai26
console.log(result);
const student = {
  major: "Lập trình web",
  ten: "Ngô Tiến Đạt",
  tuoi: 19,
};
const studentInfo = `
                    Chuyên ngành:${student.major}
                    Ten:${student.ten}
                    Tuoi:${student.tuoi}
                    `;
                    console.log(studentInfo);
//bai27
function add(a,b){
    return a + b;
}
//bai28
const sum= add(10,20);
const sumInfo = `Ket qua:${sum}`;
console.log(sumInfo);

//Bai25
const names = "Ngo Tien Dat";
const agee = 20;
const major = "Lập trình Web";
const thongtin = "Ten:" + names + "Tuoi:" + agee + "Chuyen nganh:" + major;
console.log(thongtin);

const Thongtin =`Ten toi la:${names}
                Tuoi:${agee}
                Chuyen Nganh:${major}`;
                console.log(Thongtin);
//bai29
const numbers = [1,2,3,4,5];

const doubled = numbers.map((n)=> n*2);
console.log(doubled);

//bai30
const sinhvien = [
  { id: 1, name: "Dat" },
  { id: 2, name: "Huyen" },
  { id: 3, name: "datbe" },
];
const Info = sinhvien.map((sinhvien)=>{
    return sinhvien.name
});
console.log(sinhvien);



