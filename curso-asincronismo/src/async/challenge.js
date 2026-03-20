import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);  //si ok
  const data = await response.json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
    
  } catch (error){
    console.error(error);
  }
}

anotherFunction(API);

// async function runCode() { 
//    console.log("runing")
// const url = 'https://domain-api-com'; 
//   console.log(url)
//   const  response = await fetch(url);

// try { 
//     //  console.log(response)

//     } 
// catch (error) 
//   { throw new Error("API Not Found"); 

//               } 
// }


// async function runCode2() {
// const url = 'https://domain-api-com';
// try {
//   await  fetch(url)
// } catch (error) {
//   throw new Error('API Not Found');
// }
// }
// runCode2()