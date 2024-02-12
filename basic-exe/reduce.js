let words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let wordCount = words.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
console.log(wordCount);
// Output: { apple: 3, banana: 2, orange: 1 }


let data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'cucumber' }
];


// doubt 
let groupedData = data.reduce((accumulator, currentValue) => {
    (accumulator[currentValue.category] = accumulator[currentValue.category] || []).push(currentValue);
    return accumulator;
}, {});
console.log(groupedData);

/* Output: 
{
    fruit: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }, { category: 'fruit', name: 'orange' }],
    vegetable: [{ category: 'vegetable', name: 'carrot' }, { category: 'vegetable', name: 'cucumber' }]
}
*/
