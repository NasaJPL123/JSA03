const const_1 = [
    {
        name: "javascript",
        coid: 10,
        address: "a",
    },
    {
        name: "javascript",
        coid: 20,
        address: "b",
    },
    {
        name: "javascript",
        coid: 30,
        address: "c",
    }
]
const const_2 = [
    {
        name: "javascript",
        coid: 40,
        address: "d",
    },
    {
        name: "javascript",
        coid: 50,
        address: "e",
    },
    {
        name: "javascript",
        coid: 60,
        address: "f",
    }
]
//Bài 1
let result = const_1.concat(const_2)
console.log(result)
//Bài 2
const coidValues1 = [];
for (let i = 0; i < const_1.length; i++) {
  coidValues1.push(const_1[i].coid);
}
console.log(coidValues1);

const coidValues2 = [];
for (let i = 0; i < const_2.length; i++) {
  coidValues2.push(const_2[i].coid);
}
console.log(coidValues2); 