console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

const body = document.querySelector('body');
const ulProducts = document.createElement('ul');
body.appendChild(ulProducts); 

function renderProducts(products) 
{  
    for(let i = 0 ; i < products.length ; i++)
    {
        const liProducts = document.createElement('li');

        const productName = document.createElement('h2');
        const productPrice = document.createElement('p');
        const productrating = document.createElement('p');

        productName.innerHTML = products[i].name;
        liProducts.appendChild(productName);

        productPrice.innerHTML = `Price: ${products[i].price}`;
        liProducts.appendChild(productPrice);

        productrating.innerHTML = `Rating: ${products[i].rating}`;
        liProducts.appendChild(productrating);

        ulProducts.appendChild(liProducts);
    }
    
  }
renderProducts(products); 
