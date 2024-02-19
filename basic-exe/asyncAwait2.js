// async function foo1(){
//     return 1;
// }

// async function foo2(){
//     return 2;
// }

function foo1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('foo1');
            resolve(200);
        }, 2000)
    })
}

function foo2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('foo2');
            resolve(500);
        }, 5000)
    })
}

function foo3(){
    return new Promise((resolve, reject) => {
        console.log('foo3');
        resolve(500);
    })
}


function greet(){
    console.log('hello');
}

async function main(){
    await foo1();
    // console.log(f1);
    await foo2();

    await foo3();

    greet();
    
    // console.log(f2);
}

main()