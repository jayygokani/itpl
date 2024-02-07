function parent(x){
    function childOne(y){
        return x * y;
    }

    function childTwo(y){
        return x / y;
    }

    function childThree(y){
        return x ** y;
    }
    return {
        c1: childOne,
        c2: childTwo,
        c3: childThree
    }
}

let nfunc = parent(10);
console.log("childOne function = " + nfunc.c1(2));
console.log("childTwo function = " + nfunc.c2(2));
console.log("childThree function = " + nfunc.c3(2));
