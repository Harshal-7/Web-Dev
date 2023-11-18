// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Async task is completed');
//         resolve();
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log('Promise consumed');
// })


// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async 2 task");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Async 2 resolve");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:'aech',email:'aech@example.com'})    
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:'nick',password:'nick@123'})
//         }
//         else{
//             reject("ERROR! Something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("Promise is either resolve or rejected"))

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'javsscript',password:'js@123'})
        }
        else{
            reject("ERROR! JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();