function greet(){
    console.log('Hello');
}

setTimeout(()=>{
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(greet, 1000);
        }, 1000);
    }, 1000);
}, 1000);


