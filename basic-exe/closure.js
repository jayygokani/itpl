function parent(){
    function childOne(){
        console.log("parent -> childOne");
    }

    function childTwo(){
        childOne();
        console.log("parent -> childTwo");
        
    }

    childTwo();
}

parent();