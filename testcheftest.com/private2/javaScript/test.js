let productObject = [];
let urlTest = "https://testcheftest.com/.private2/php/product.php?ids=4af5a797-54be-4dbb-aa02-5c18870014bf";
fetchTest(urlTest);

/*Please enter your code here. Don't change the existing function! */



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