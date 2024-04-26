let productObject = [];
let urlTest =
  "https://testcheftest.com/.private2/php/product.php?ids=4af5a797-54be-4dbb-aa02-5c18870014bf";
fetchTest(urlTest);

/*Please enter your code here. Don't change the existing function! */

//Product setup in html=>
/***************************************************************************/
let products = [

];

fetchTest(urlTest).then((data) => {
    productObject = data;
    updateProductsList()
  })
  .catch((error) => {
    console.error("Error fetching :", error);
  });

function updateProductsList() {
    const newProduct = {
      image: productObject[0].image[0].image,
      brand: productObject[0].brand,
      manufacture: productObject[0].manufacture,
      names: productObject[0].name,
      price: productObject[0].price.toFixed(2),
    };
    console.log(newProduct);
    products.push(newProduct); 
    loadProductsIntoDiv(products); 
  }

function productCreator(products) {
  return `
    <div class="testProduct">
      <img src="${products.image}" alt="This is a picture for: ${products.names}">
      <div><h5>${products.brand},By ${products.manufacture}</h5></div>
      <div><h4>${products.names}</h4></div>
   
     <div><p>Price:$${products.price}</p></div>
     <div>
       <i></i>
       <div>0</div>
       <i></i>
       <button>Add to Cart</button>
     </div>
   </div>
 `;
}
//upload on the web=>
/***************************************************************************/
function loadProductsIntoDiv(products) {
  let divproducts = document.getElementById("sampleProduct");
  divproducts.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productHTML = productCreator(product);

    divproducts.innerHTML += productHTML;
  }
}

window.onload = function () {
  loadProductsIntoDiv(products);
};
/***************************************************************************/

function fetchTest(url) {
  try {
    if (!url) {
      console.error("URL is undefined");
      return Promise.reject(new Error("URL is undefined"));
    }

    // Return the promise returned by fetch
    return fetch(url, { credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        productObject = data;
      
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        throw error;
      });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

