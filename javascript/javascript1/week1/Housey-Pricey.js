let width;
let depth;
let height;

let housePrice;
let volumeInMeters;
let gardenSizeInm2;
let paidPrice;
//Peter house price calculation
width=8;
depth=10;
hight=10;

gardenSizeInm2=100;
volumeInMeters=width*depth*hight;
housePrice=volumeInMeters*2.5*1000+gardenSizeInm2*300;
paidPrice=2500000;
if(housePrice<paidPrice)
    {
        console.log("The original price of Peter's house is"+" "+housePrice+" "+"but, he paid"+" "+paidPrice+" "+"It looks too much comparing the original house price.");
    }
else
    {
        console.log("The original price of Peter's house is"+" "+housePrice+" "+"but, he paid"+" "+paidPrice+" "+"It looks too less comparing the original house price.");
    }
//Julia house price calculation
width=5;
depth=11;
hight=8;

gardenSizeInm2=70;
volumeInMeters=width*depth*hight;
housePrice=volumeInMeters*2.5*1000+gardenSizeInm2*300;
paidPrice=1000000;
if(housePrice<paidPrice)
{
    console.log("The original price of Julia's house is"+" "+housePrice+" "+"but, she paid"+" "+paidPrice+" "+"It looks too much comparing the original house price.");
 
}
else
{
    console.log("The original price of Julia's house is"+" "+housePrice+" "+"but, she paid"+" "+paidPrice+" "+"It looks too less comparing the original house price.");

}
