const arr = [1,2,3,4,5]

// const arrSum = arr.reduce((accumulator,currentValue) => {
//     return accumulator+currentValue;
// })

const arrSum = arr.reduce((acc,curr) => acc+curr)

console.log(arrSum);

let str = "Hello, My name is Peeta Paka, Nice to meet you!!";

let strArray = str.split(' ');
let lowerCaseArray = strArray.map((val,index)=>{
    return val.charAt(0).toLowerCase() + val.substring(1,val.length);
})

console.log(lowerCaseArray.join(' '));