let productObject = [];
let urlTest = "https://testcheftest.com/.private2/php/product.php?ids=4af5a797-54be-4dbb-aa02-5c18870014bf";
fetchTest(urlTest);

/*Please enter your code here. Don't change the existing function! */


//Product setup in html=>
/***************************************************************************/
let products = [
  {cardName:"Beverage Air - Garland Canada",
  cardBrand:"Refrigerator, Reach-In",
  cardPrice:"6024.32",
  img:"https:\/\/api.aq-fes.com\/products-api\/resources\/pictures\/ab635df2-9600-4f2f-81bd-f93abeaf6533\/picture.jpg?subscription-key=f42c52828dea4c69aefb41c9deed2184"},
  
  ]


function productCreator(products){
  return  `
    <div class="testProduct">
      <img src="${products.img}" alt="This is a picture for: ${products.cardName}">
      <div><h5>${products.cardName}</h5></div>
      <div><h4>${products.cardBrand}</h4></div>
     <div><p>Price:$${products.cardPrice}</p></div>
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

window.onload = function() {
 loadProductsIntoDiv(products);
};
/***************************************************************************/



function fetchTest(url) {
    try {
      if (!url) {
        console.error('URL is undefined');
        return Promise.reject(new Error('URL is undefined'));
      }
  
      // Return the promise returned by fetch
      return fetch(url, { credentials: 'include' })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          productObject = data;
          
        })
        .catch(error => {
          console.error('Fetch error:', error);
          throw error;
        });
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }