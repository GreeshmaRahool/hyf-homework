// Create an input and a button in html. When the button is clicked,

//get the value of the input.This value will be the amount of time the game should run.

// Set a timeout for the time specified by the user. After that time has run out just log out a simple string.

// Create an event listener so you can call a function when any key is pressed. 
//Now grap the actual key that was pressed.Fx was it a j or an i.We are interested in s and l.Here google is your friend!


// Keep a counter for how many times l and s was pressed.
// Now put it all together! After the timeout is done figure out which of the counters is largest. Give some kind of feedback to the users indicating who won.

let sKeyCount = 0;
let lKeyCount = 0;
const inputValue = document.querySelector('#txtInputTime');
const buttonClick = document.querySelector('#startButton');
const sKey = document.querySelector('#press_S')
const lKey = document.querySelector('#press_L')

const gameTimer = () => {
  if (!inputValue.value)
  {
    alert('Enter time in seconds');
  }
  else {
    window.addEventListener('keypress', keyPress)
    setTimeout(() => {
      window.removeEventListener('keypress', keyPress);
      sKey.innerHTML = `S : ${sKeyCount}`;
      lKey.innerHTML = `L : ${lKeyCount}`;
      if (sKeyCount === lKeyCount) {
       console.log('Draw!')
      }
      else if (sKeyCount > lKeyCount) {
       console.log('S key won the game');
      }
      else if (sKeyCount < lKeyCount) {
       console.log('L key won the game');
      }
      
      alert('Time expired');
    }, inputValue.value * 1000);
   
  }
  
}
buttonClick.addEventListener('click', gameTimer);
const keyPress = (event) => {
  let keyValue = event.key;
      if (keyValue === 's') {
        return sKeyCount++;
      }
      else if (keyValue === 'l') {
        return lKeyCount++;
      }
}

  
