console.log("Script loaded");
const products = getAvailableProducts();
console.log(products); 
function renderProducts(products) 
{
    const main = document.querySelector("main");
    const ul =document.createElement("ul");
    main.appendChild(ul);
    for(i = 0; i < products.length; i++)
    {
        const newLi = document.createElement("li");
        const productName = document.createElement("h1");
        productName.innerHTML = products[i].name;
        newLi.appendChild(productName);
        const productPrice = document.createElement("h3");
        productPrice.innerHTML = `price : ${products[i].price}`;
        newLi.appendChild(productPrice);
        const productRating = document.createElement("h3")
        productRating.innerHTML = `Rating : ${products[i].rating}`
        newLi.appendChild(productRating);
        ul.appendChild(newLi);
    }
}
renderProducts(products);

const searchName = document.querySelector("#txtSearchName");
const searchPrice = document.querySelector("#txtSearchPrice");
const searchRating = document.querySelector("#txtSearchRating");

searchName.addEventListener("keyup",searchNameListener);
searchPrice.addEventListener("keyup",searchPriceListener);
searchRating.addEventListener("keyup",searchRatingListener);

function clear(){
    const main = document.querySelector("main");
    main.innerHTML = " ";
}
function searchNameListener(e){
    const data = products.filter(product =>product.name.toLowerCase().includes(searchName.value.toLowerCase()));
    clear();
    renderProducts(data);
}
function searchPriceListener(e){
    if(searchPrice.value == ""){
        renderProducts(products);
        return;
    }
    
}
function searchRatingListener(e){
    if(searchRating.value == ""){
        renderProducts(products);
    }
    else{
        const data = products.filter(product =>product.rating === parseInt(searchRating.value));
        clear();
        renderProducts(data);
    }
}


