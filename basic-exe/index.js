
function fetchData(data){
    return new Promise((resolve, reject) => {
        if (data >= 0 && data <= 100){
            resolve(1);
        } else if (data > 100 && data <= 1000){
            resolve(100)
        } 
        else {
            reject(-1);
        }
        
    })
}

fetchData(1).then()

const p = new Promise((resolve, reject) => {
    // resolve(200);
    reject(-1)
})
p.then((res) => {
    console.log(res)
}).catch((rej) => {
    console.log(rej)
})

let pres = Promise.resolve('Done');
let prej = Promise.reject('Not done').catch((rej) => {
    console.log(rej)
});

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(()=>
  {
    (resolve, 100, 'foo');
})
})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]



// fetchData(111).then((res) => {
//     console.log("Resolve: ", res);
// }).catch((rej) => {
//     console.log('Reject: ', rej)
// });

// fetchData(-1).catch((rej) => {
//     console.log('rej')
//     console.log(rej);
// }).then((res) => {
//     console.log('res')
//     console.log(res);
// });














// // let person = {
// //     name: 'John',
// //     age: 30,
// //     city: 'New York',
// // };

// // // Object.entries(person).forEach(([k, v]) => {
// // //     console.log(`${k}: ${v}`);
// // // });
// // delete person.name
// // console.log(Object.entries(person))
// // console.log("values: " + Object.values(person))
// // console.log("keys: " + Object.keys(person))

// // -----------------------------------------------------
// // function compareBy(propertyName) {
// //   return function (a, b) {
// //     let x = a[propertyName],
// //       y = b[propertyName];

// //     if (x > y) {
// //       return 1;
// //     } else if (x < y) {
// //       return -1;
// //     } else {
// //       return 0;
// //     }
// //   };
// // }

// // let products = [
// //     {name: 'iPhone', price: 900},
// //     {name: 'Samsung Galaxy', price: 850},
// //     {name: 'Sony Xperia', price: 700},
// //     ];
// // console.log(products)
// // products.sort(compareBy('name'))
// // console.log(products)

// // console.log("One");

// // setTimeout(()=>{
// //     console.log("Two");
// // }, 1000);

// // console.log("Three")