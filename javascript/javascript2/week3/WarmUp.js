//1.Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.
const callback = () => {
    setTimeout(() => {
        console.log('Called after 2.5 seconds')
    }, 2500);
}
document.addEventListener('DOMContentLoaded', callback)

//2.Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.
const printString = (delay,stringToLog) => {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
printString(3, 'This string logged after 3 seconds');
printString(4, 'This string logged after 4 seconds');

//3.Create a button in html. When clicking this button, 
//use the function you created in the previous task to
//log out the text: "Called after 5 seconds" 5 seconds after the button is clicked.
const clickMe = document.getElementById('clickMe').addEventListener('click', onclick => {
     
    printString(5, 'Called after 5 seconds')
})

//4.Create two functions and assign them to two different variables.
//One function logs out Earth, the other function logs out Saturn.
//Now create a new third function that has one parameter: planetLogFunction.
//The only thing the third function should do is call the provided parameter function.
//Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = () => {
    console.log('Earth');
}
const saturnLogger = () => {
    console.log('Saturn');
}
const planetLogFunction = (callback) => {
    return callback()
};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.Create a button with the text called "Log location". 
//When this button is clicked the location(latitude, longitude) of 
// //the user should be logged out using this browser api
const statusLatLong = document.querySelector('#statusLatLong');

function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        statusLatLong.innerHTML = `This is the lattitude ${latitude} <br /><br /> This is the longitude ${longitude}`
        getMapCoordinates(position);
    }
    function error() {
       console.log('Unable to retrieve your location');
    }
    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
      }
}
document.querySelector('#logLocation').addEventListener('click', geoFindMe);


//6.Optional Now show that location on a map using fx the Google maps api
function getMapCoordinates(position) {
    const latlongvalue = `${
        position.coords.latitude
    },${
        position.coords.longitude
    }`;
    const map_url = `https://maps.google.com/maps?q=${latlongvalue}&hl=es&z=14&amp;output=embed`;
    document.getElementById("map").innerHTML = `<iframe src="${map_url}"></iframe>`;
}

//7.Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions
const runAfterDelay = (delay, callback) => {
    setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
    console.log('Run after 4 seconds')
})

//8.Check if we have double clicked on the page.
// A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"

const checkDoubleClick = () => {
    console.log('double click!')
}
document.getElementById('doubleClick').addEventListener('dblclick', checkDoubleClick)


//9.Create a function called jokeCreator that has three parameters:
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
//If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
//And vice versa.
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if (shouldTellFunnyJoke)
    {
        logFunnyJoke();
    }
    else {
        logBadJoke();
    }
}
const logFunnyJoke = () => {
    console.log('What time is it when the clock strikes 13?Time to get a new clock.')
  
}
const logBadJoke = () => {
    console.log('What do you call a can opener that doesn’t work?A can’t opener!')
}
jokeCreator(true,logFunnyJoke,logBadJoke)