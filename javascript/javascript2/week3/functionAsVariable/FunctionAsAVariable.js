// Create funtions that are used in these different ways:

// Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.
const functionArray = [()=>{console.log('First function')} , ()=>{console.log('Second function')} , ()=>{console.log('Third function')}]
functionArray.forEach(func => func())

// Create a function as a const and try creating a function normally.Call both functions.
const anonymousFunction = () => console.log('This is assigned to a constant variable');
function normalFunction() {
    console.log('This is a normal function')
}
anonymousFunction();
normalFunction();
// Create an object that has a key whose value is a function. Try calling this function.
const functionObject = {
    firstFunc: function(string) {
        console.log(string);
    },
  
    secondFunc: function(string) {
        console.log(string);
    },
  
    thirdFunc: function(string) {
        console.log(string);
    }
}
functionObject.firstFunc('First function is called');
functionObject.secondFunc('I am second function');
functionObject.thirdFunc('Third and last function from the function list')
