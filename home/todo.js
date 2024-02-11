// let todo = {0: "APS", 1: "SDE", 2:"DevOps"}
// console.log(todo[1])
let todo = ["APS", "SDE", "DevOps"]

function getTodo(){
    for (var key in todo){
        let task = todo[key];
        console.log(`Task ${key} : ${task}`);
    }
}

function addTodo(task){
    
}

function rmTodo(index){
    delete todo[index];
    // return todo;
}

getTodo();
rmTodo(0);
getTodo();