const dogYearOfBirth = 2016;
const dogYearFuture = 2027;
let dogYear ;


// Year in dog year
let shouldShowResultInDogYears=true;
if(shouldShowResultInDogYears==true)
{
    dogYear = (dogYearFuture - dogYearOfBirth)*7;
    console.log("Your dog will be"+" "+dogYear+" "+" dog years old in"+ " "+dogYearFuture);
    
}
// Dog year in human year
 shouldShowResultInDogYears=false;
if(shouldShowResultInDogYears==false)
{
    dogYear = dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be"+" "+dogYear+" "+"human years old in"+" "+dogYearFuture);  
}