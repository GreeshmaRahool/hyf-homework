let boughtCandyPrices=[];
let amountToSpend = Math.random() * 100;
let amountSpent=0;
function addCandy(candyType ,weight)
{
    switch(candyType)
    {
        case 'Sweet' :  boughtCandyPrices.push(weight*0.5);
                        
        break;

        case 'Chocolate' :  boughtCandyPrices.push(weight*075);
        break;

        case 'Toffee' :  boughtCandyPrices.push(weight*1.1);
        break;

        case 'Chewing-gum' :  boughtCandyPrices.push(weight*0.03);
        break;
       
    }  
}
addCandy('Sweet', 15);
addCandy('Chocolate', 12);
addCandy('Toffee', 5);
addCandy('Chewing-gum', 10);
//new function called canBuyMoreCandy, returns a boolean indicating if the user can buy more 
//candy using the boughtCandy array.
function canBuyMoreCandy()
{  
    let i=0;
    let noOfItems=boughtCandyPrices.length;
    while(i<noOfItems)
    {
        amountSpent = amountSpent + boughtCandyPrices[i];
        i++;
    }
    console.log(`Amount spent already: ${amountSpent}`);
    console.log(amountToSpend);
    return amountToSpend > amountSpent;
}

if(canBuyMoreCandy())
{
    console.log("You can buy more, so please do!");
}
else
{
    console.log("Enough candy for you!");
}

