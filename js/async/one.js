// const sayNeko = function() {
//     console.log("Nekoo~🐱"); 
// }

// setTimeout( sayNeko ,2000)


// const changeHeading = function(){
//     document.querySelector('h1').innerHTML = "Nyaaa~"    
// }

// const removeSet = setTimeout( changeHeading, 3000);

// document.querySelector('#stop').addEventListener('click',()=>{
//     clearTimeout(removeSet);
//     console.log("stopped");
// })
let counter = 0;
let myInterval;

let mySetInterval = function() {
    console.log("hehe",++counter);
}

document.querySelector('#start').addEventListener('click',()=>{
    myInterval = setInterval(mySetInterval,1000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(myInterval);
    console.log("stopped");
})