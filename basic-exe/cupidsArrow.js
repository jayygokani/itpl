users = {
    fname: 'J',
    lname: 'G',

    getData: function getData(){
        console.log(this.fname)

    },

    getDataAnonymous: function () {
        console.log(this.fname)
    },

    getDataArrow: () => {
        console.log(this.fname)
    }
}

console.log('getData: ')
console.log(users.getData())

console.log('getDataAnonymous: ')
console.log(users.getDataAnonymous())

console.log('getDataArrow: ')
users.getDataArrow();

/*
let person = {
    id: 890,

    // have to use bind() function otherwise the value of id will be undefined
    getId: function getId(){
        setTimeout(function() {
            console.log(this.id);
        }.bind(this), 1000)
    },

    // no need to use bind since arrow function will do it anyways
    getIdArrow:  function getIdArrow() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000)
    },

    getId2: function getId2() {
        console.log(this.id)
    }
}
*/

// person.getIdArrow();

// person.getId();

// person.getId2();

// console.log('----------------')