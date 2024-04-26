let availableKeywords = [];
let newPosition = document.getElementById("searchResponsive");
let oldPosition = document.getElementById("searchBeforeResponsive");

// Call the fetchData function
fetchData().then(data => {
    // Handle the fetched data here
    availableKeywords = data;
});

function handleScreenChange() {
    if (window.innerWidth > 576) {
        
        oldPosition.innerHTML =
        `<div class="rowSearch">
            <input type="text" id="inputBox" placeholder="Search..." autocomplete="off">
            <button onclick="linkCreator()"><img id="searchImg" alt="Shipping"  src="header_images/search-logo.png"></button>

        </div>
        <div class="resultBox">
            
        </div>`;
       
        // Add your code for the larger screen here
    } else {
        oldPosition.innerHTML = "";
     }
    }

  // Attach the event listener to the window
  window.addEventListener('resize', handleScreenChange);

  // Call the function initially to check the screen width
  handleScreenChange();
  const resultBox = document.querySelector('.resultBox');
  const inputBox = document.getElementById("inputBox");
// Move selectedInput to the global scope
function selectedInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
    linkCreator();
}
  inputBox.onkeyup = function() {
    let result = [];
    let categories = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeywords
            .filter((keyword) => {
                return keyword.search.toLowerCase().includes(input.toLowerCase())
            })
            .slice(0, 10); // Limit the result to the first 10 items
    }

    categories = result;
    displayResult(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
}


function displayResult(result) {
    const content = result.map((list) => {
        return "<li onclick=selectedInput(this)>" + list.search + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function linkCreator(){
  
    window.location.href = urlLink() + `search=${inputBox.value}`;
}
// Add event listener for keyup event
inputBox.addEventListener("keyup", function(event) {
    // Check if the pressed key is "Enter" (keyCode 13)
    if (event.key === "Enter") {
        // Call the linkCreator function
        linkCreator();
    }
});


async function fetchData() {
    try {
        let urlSearch = urlDocument(); //from variables.js
        console.log(urlSearch);
        const response = await fetch(urlSearch, { credentials: 'include' });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // specialPrices = data; // This line is commented out and not defined anywhere, consider removing or defining specialPrices
        // console.log("Document read", specialPrices);

        // Resolve the Promise with the fetched data
        return data;
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error;
    }
}



