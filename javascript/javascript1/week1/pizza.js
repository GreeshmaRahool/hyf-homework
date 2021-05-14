console.log("I love pizza");
const favPizza = "Mozarella"
const pizzaPrice = 110;
const quantity =3;
let strFamily,totalPrice;
let familyPizza = true;
if(familyPizza == true)
{
    totalPrice = (pizzaPrice*quantity)*2;
    strFamily = "and family pizza";
    console.log("New pizza order: "+quantity+" "+strFamily+" "+favPizza+"."+"Total cost for the order is: "+totalPrice);
}
familyPizza = false;
if(familyPizza == false)
{
    totalPrice = pizzaPrice*quantity;
    strFamily = "and not a family pizza";
    console.log("New pizza order: "+quantity+" "+strFamily+" "+favPizza+"."+"Total cost for the order is:"+totalPrice);
}
