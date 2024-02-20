// Create a new Date object representing the current date
let currentDate = new Date();
console.log(currentDate);
// Extract the year, month, and day components from the Date object
let year = currentDate.getFullYear();
console.log(year);
// Add 1 to month since getMonth() returns zero-based index (0 for January, 1 for February, etc.)
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
console.log(month);
console.log(day);
// Concatenate the components together in the 'YYYY-MM-DD' format
let formattedDate = `${year}-${month}-${day}`;

// Output the formatted date
// console.log(formattedDate); // Example: "2022-02-09"
