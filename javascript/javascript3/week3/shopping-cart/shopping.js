class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
  }
  convertToCurrency(currency) {
    const p = document.createElement('h3');
    const div = document.createElement('div');
    div.appendChild(p);
    document.body.appendChild(div);
    if (currency.toLowerCase().includes('dollar')) {
      p.innerHTML = `${this.name} : ${this.price * 0.16}$`;
    } else if (currency.toLowerCase().includes('euro')) {
      p.innerHTML = `${this.name} : ${this.price * 0.13}€`
    } else if (currency.toLowerCase().includes('pound')) {
      p.innerHTML = `${this.name} : ${this.price * 0.12}£`
    } else {
      p.innerHTML = this.price
    }
  }
  }
 
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
        this.products.push(product);
    
    }
  
    removeProduct(product) {
      // Implement functionality here
        const updatedProducts = this.products.filter((item) =>
            item.name !== product.name)
        this.products = updatedProducts;
    }
  
      searchProduct(productName) {
          //Implement functionality here
         ;
        const search = document.createElement('h3')        
        const searchResult = this.products.filter((item) => {
          if (item.name === productName) {
            search.innerHTML = ` Search result : ${item.name}, Price : ${item.price}`;
          }
        })        
          document.body.appendChild(search);
       }
  
    getTotal() {
      //Implement functionality here
        let total = 0;
        this.products.forEach((item) => total = item.price + total)
        const totalPrice = document.createElement('p');
        totalPrice.innerHTML = `Total price: ${total}`;
        document.body.appendChild(totalPrice);
    }
  
    renderProducts() {
      // Implement functionality here
        const title = document.createElement('h1');
        title.innerHTML = "List of products";
       
        const ul = document.createElement('ul');
        const body = document.querySelector('body');
        body.appendChild(title);
        body.appendChild(ul);
       

        this.products.forEach(item => {
            const li = document.createElement('li');
            const h2 = document.createElement('h2')
            const p = document.createElement('p')

            h2.innerHTML = item.name;
            p.innerHTML =` , Price : ${item.name}`;
            li.appendChild(h2);
            li.appendChild(p);
           
       
            ul.appendChild(li);
        })


    }
    getUser() {
          fetch("https://jsonplaceholder.typicode.com/users/1")
              .then((res) => res.json())
              .then((data) => {
                  console.log(data)
                  const userName = document.createElement('h3');
                  userName.innerHTML = `User name : ${data.username}`;
                  document.body.appendChild(userName);
              })
      this.renderProducts();
      this.getTotal();
      }
    
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const charger = new Product("Yootech Wireless Charger", 500);
  const headphone = new Product("Bose SoundLink Headphones", 3000);
  
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(charger);  
  shoppingCart.addProduct(headphone);
  console.log(shoppingCart)
  shoppingCart.removeProduct(charger);
  console.log(shoppingCart)
  shoppingCart.getTotal();
  shoppingCart.renderProducts();
  shoppingCart.searchProduct('Bose SoundLink Headphones')
  shoppingCart.getUser();
  
  const plant = new Product("plant", 80);
  console.log(plant.convertToCurrency("dollar"))

  



  
 
