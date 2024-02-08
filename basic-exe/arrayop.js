function arithmetic (x){
    let n = [1, 2, 3];
    
    function multiply(y){
        n.push(x * y);
        return (n);
    }

    function divide(y){
        n.push(x / y);
        return (n);
    }

    return {
        m: multiply,
        d: divide
    }

    // console.log(n)
}


let nf = arithmetic(10);

console.log("array: " + nf.m(5) + "\narray: "+ nf.d(2));
