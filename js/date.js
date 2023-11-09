let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let arr = [0,1,2,3,4,5]

const arrString = arr.join();
// console.log(arr);
// console.log(arrString);

let new1 = arr.slice(1,3);
// console.log("A : ",arr);
// console.log(new1);

let new2 = arr.splice(1,3);
// console.log("B : ",arr);
// console.log(new2);

let marvel = ['thor','spiderman','ironman'];
let dc = ['flash','batman','joker'];

marvel.push(...dc);
// console.log(marvel[4]);

console.log(Array.isArray("Spidyy"));
console.log(Array.from("Spideyy"));
console.log(Array.from({name: 'rdj'}));