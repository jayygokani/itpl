let person = {
    name: 'John',
    age: 30,
    city: 'New York',
};

// Object.entries(person).forEach(([k, v]) => {
//     console.log(`${k}: ${v}`);
// });
delete person.name
console.log(Object.entries(person))
console.log("values: " + Object.values(person))
console.log("keys: " + Object.keys(person))