let url = 'https://fakestoreapi.com/products'
let urlCategory = 'https://fakestoreapi.com/products/categories'

let selectedCategory = 'electronics'

async function fetchCategoryProducts(selectedCategory){

    try {
        let updatedUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        let data = await getData(updatedUrl)
        console.table(data[0])
    } catch (error) {
        // throw new Error(error)
        console.log(error)
    }
}
fetchCategoryProducts(selectedCategory)


async function listCategory(url){
    let data = await getData(url);
    console.log(data)
}
listCategory(urlCategory)


// fetches data into json
async function getData(url){
    let fdata = await fetch(url)
    let jsonData = await fdata.json(); 
    
    // console.log(jsonData)
    return jsonData
}







// With Promise.then() --------------------------------------------------------------------------------

// fetch('https://fakestoreapi.com/products')
//     .then(resolve=>resolve.json())
//     .then(pData => console.log(pData))



// let catPath = 'electronics'
// fetch(`https://fakestoreapi.com/products/category/${catPath}`)
//     .then(res=>res.json())
//     .then(json=>console.log(json)).catch(rej => console.log(rej))


// fetch('https://fakestoreapi.com/products/categories')
//     .then(res=>res.json())
//     .then(json=>console.log(json))