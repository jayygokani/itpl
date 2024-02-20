let person = {
    name: "Jay",
    address: {
        state: "Gujarat",
        
        city: {
            dist: "Rajkot district",
            zone: 'east',
            pincode: '360002'
        }

    }

}

//normal conventional method(s)
console.log(person.address.city.pincode)

// let {pincode} = person.address.city;
// console.log(pincode);

// without dots
let { address: {city: { pincode: postalCode }} } = person;
// console.log(pincode);
// console.log(postalCode)


// alias or renaming
let {address: add} = person;
console.log(add);

let {city: c} = add;
console.log(c)

let {pincode: pc} = c;
console.log(pc)


// function
function greet(n){
    console.log(`HELLO, ${this.name=n}`)
}
greet(person)

// extract key or value
console.log(Object.entries(person))
console.log("values: " + Object.values(person))
console.log("keys: " + Object.keys(person))