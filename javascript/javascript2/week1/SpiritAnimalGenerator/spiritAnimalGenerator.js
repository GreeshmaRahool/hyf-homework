const arrSpiritAnimals = ['The beautiful swan','The graceful peacock','The dark moon panther','The confident jaguar','The playful cayote','The creative eagle','The joyful hummingbird','The energetic horse','The innocent deer','The patient spider'];

//Create an input element, a button and a tag to display the spirit animal into.
const input = document.createElement('input');
input.setAttribute('Id','txtName');
input.setAttribute('placeholder','Enter your name');
const button = document.createElement('button');
button.setAttribute('Id','btnClick');
button.innerHTML = 'Click here!'
const para = document.createElement('p');
para.setAttribute('Id','descPara');

const body = document.querySelector('body');
body.appendChild(input);
body.appendChild(button);
body.appendChild(para);


function btnClick()
{
    getNameWithAnimal();
}

function btnMouseover()
{
    getNameWithAnimal();

}

function onSelectChange(){ 
    const selectEvent = document.getElementById('selectEvent');
    console.log(selectEvent.selectedIndex);
   
    if(selectEvent.selectedIndex == 1){
        
        button.addEventListener('click', btnClick);
        button.removeEventListener('mouseover', btnMouseover);  
    }
    else if(selectEvent.selectedIndex == 2){ 
        button.addEventListener('mouseover', btnMouseover);
        button.removeEventListener('click', btnClick);
        button.innerHTML = 'Click is disabled!'
    }
}

function getNameWithAnimal()
{
    const inputName = input.value;
    para.innerHTML = inputName ? "${inputName} - ${arrSpiritAnimals[parseInt(Math.random() * 10)]}" : "Please provide a name!";
    // if(inputName)
    // {
    //     para.innerHTML = `${inputName} - ${arrSpiritAnimals[parseInt(Math.random() * 10)]}`;
    // }
    // else
    // {
    //     para.innerHTML = `Please provide a name!`;
    // }
}