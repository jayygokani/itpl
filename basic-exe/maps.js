const m = new Map();

let a= ['a','b','c','d','e'] 
let n = [1,2,3,4,5];

let count = 0;
n.forEach(element => {
    m.set(a[count], element)
    count++
});


console.log(m.get('a'));