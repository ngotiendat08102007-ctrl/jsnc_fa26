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