// let person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
// };

// // Object.entries(person).forEach(([k, v]) => {
// //     console.log(`${k}: ${v}`);
// // });
// delete person.name
// console.log(Object.entries(person))
// console.log("values: " + Object.values(person))
// console.log("keys: " + Object.keys(person))

// -----------------------------------------------------
// function compareBy(propertyName) {
//   return function (a, b) {
//     let x = a[propertyName],
//       y = b[propertyName];

//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }

// let products = [
//     {name: 'iPhone', price: 900},
//     {name: 'Samsung Galaxy', price: 850},
//     {name: 'Sony Xperia', price: 700},
//     ];
// console.log(products)
// products.sort(compareBy('name'))
// console.log(products)

console.log("One");

setTimeout(()=>{
    console.log("Two");
}, 1000);

console.log("Three")