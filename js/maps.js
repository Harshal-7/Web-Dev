const map = new Map();
map.set('In','India')
map.set('Jp','Japan')
map.set('Fr','France')

console.log(map);

for (const [key,value] of map) {
    console.log(key,":",value);
}