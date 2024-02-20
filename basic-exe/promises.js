function asyncFunction1(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log("******* DATA-1 *******");
			resolve("** SUCCESS **");
		}, 2500);
	});
};

function asyncFunction2(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log("******* DATA-2 *******");
			resolve("** SUCCESS **");
		}, 1000);
	});
};

console.log("Fetching data 1 .....");
asyncFunction1().then((res) => {
	// console.log(res);

	console.log("Fetching data 2 .....");
	asyncFunction2().then((res) => {
		// console.log(res);
	});
})



/*
// sync problem
console.log("Fetching data 1 .....");
let p1 = asyncFunction1();
p1.then((res) => {
	console.log(res);
});

console.log("Fetching data 2 .....");
let p2 = asyncFunction2();
p1.then((res) => {
	console.log(res);
});
*/











/*
const getPromise = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log("****DATA-1****");
			resolve("***SUCCESS***");
			// reject("***FAILED***")
		}, 2000);
	});
}

let p = getPromise();
p.then((res) => {
	console.log("RESOLVED: ", res);
});

p.catch((err) => {
	console.log("REJECTED: ", err);
})

*/









/*
function getData(data, getNextData){
    return new Promise((resolve,reject)=>{
    	setTimeout(() => {
    		console.log("data: " + data);
	        if(getNextData){
	            getNextData();
	        }
    	}, 1500);
    }
}
*/






/*
let p = new Promise((resolve, reject) => {
	console.log("This is a promise");
	resolve(1);
})*/
function asyncFunction1(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log("******* DATA-1 *******");
			resolve("** SUCCESS **");
		}, 2500);
	});
};

function asyncFunction2(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log("******* DATA-2 *******");
			resolve("** SUCCESS **");
		}, 1000);
	});
};

asyncFunction1().then((res) => {
	return asyncFunction2();
}).then((res) => {
	return asyncFunction1();
}).then((res) => {
	console.log(res);
})

/*
console.log("Fetching data 1 .....");
asyncFunction1().then((res) => {
	// console.log(res);

	console.log("Fetching data 2 .....");
	asyncFunction2().then((res) => {
		// console.log(res);
	});
})
*/


/*
// sync problem
console.log("Fetching data 1 .....");
let p1 = asyncFunction1();
p1.then((res) => {
	console.log(res);
});

console.log("Fetching data 2 .....");
let p2 = asyncFunction2();
p1.then((res) => {
	console.log(res);
});
*/











/*
const getPromise = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log("****DATA-1****");
			resolve("***SUCCESS***");
			// reject("***FAILED***")
		}, 2000);
	});
}

let p = getPromise();
p.then((res) => {
	console.log("RESOLVED: ", res);
});

p.catch((err) => {
	console.log("REJECTED: ", err);
})

*/









/*
function getData(data, getNextData){
    return new Promise((resolve,reject)=>{
    	setTimeout(() => {
    		console.log("data: " + data);
	        if(getNextData){
	            getNextData();
	        }
    	}, 1500);
    }
}
*/






/*
let p = new Promise((resolve, reject) => {
	console.log("This is a promise");
	resolve(1);
})*/