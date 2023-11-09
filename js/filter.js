const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter( (num) => num > 4 ); short writing 
const newNums = nums.filter( (num) => {
    return num > 4;
} );

console.log(newNums);


// In filter the true value gets return
// so, if condition is true then that item gets returned as new array