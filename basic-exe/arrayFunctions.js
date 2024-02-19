const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];


let found = nums.find((element) => element > 1);
console.log(found)






// function isDivby(array, n){
//     return array.filter((element) => element % n == 0);
// }

// function isEven(n){
//     if (n % 2 == 0){
//         return true;
//     }
//     return false;
// }

// // let even = nums.filter(isEven);
// // console.log(even)

// console.log(isDivby(nums, 5))