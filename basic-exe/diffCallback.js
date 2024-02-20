// Asynchronous function
function asyncOperation(callback) {
    setTimeout(() => {
        // Simulating an asynchronous operation
        let result = 1;
        callback(null, result); // Call the callback function with the result
    }, 1000);
}

// Callback function
function callbackFunction(error, result) {
    if (error) {
        console.error("An error occurred:", error);
    } else {
        console.log("Result:", result); // Accessing the result passed from the asynchronous function
    }
}

// Calling the asynchronous function with the callback
asyncOperation(callbackFunction);
