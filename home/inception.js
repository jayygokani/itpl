function parent(x){

    function childOne(y){
        console.log('hello')

        function childOnePointOne(){
            console.log("child one point one");

            function childOnePointOnePointOne(){
                console.log("child one point one point one");
            }
        }

    }
}

let nfunc = parent(10);
nfunc(10);
// console.log("childOne function = " + nfunc(10));
