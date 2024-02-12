// math.js

module.exports = {
    add: function(a,b ){
        return a + b;
    }
};

// app.js

const math = require('./math');
console.log(math.add(2,4));