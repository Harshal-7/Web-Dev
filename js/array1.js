const langs = ['js','c','python','java','cpp'];

let values = langs.forEach( (item) => {
    console.log(item);
    return item;
})
// ForEach can't return the values from array
console.log(values);    // undefined