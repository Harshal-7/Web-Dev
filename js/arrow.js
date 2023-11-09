// const addTwo = function(a,b) {
//     console.log(a+b);
// }

// addTwo(6,9);


const addTwo = (a,b) => {
    return a+b;
}
console.log(addTwo(3,5));


const square = (a) => a*a;
console.log(square(4));


const multiTwo = (a,b) => (a*b);
console.log(multiTwo(3,5));


const retObj = () => ({user:"aech",pass:1234}); // to return obj use () 
console.log(retObj());


const nums = [1,2,3,4,5];
nums.forEach((items) => {
    console.log(items*items);
})