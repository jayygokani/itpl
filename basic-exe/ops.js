// let items = [1,2,3,4,5];



// for (let i in items){
// 	console.log("Index = " + i)
// 	console.log(items[i]);
// }

let person = {
	name: 'J'
}

let circle = {
    radius: 10
};
let coloredCircle = {
    ...circle,
    color: 'black'
};

let clonedCircle = {...circle};
// delete clonedCircle.radius;
console.log(clonedCircle);

// let t = {...circle, ...person};
console.log({...circle, ...person});



console.log(coloredCircle);
