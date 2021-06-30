//Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json()).then((data) => {
    //1.Create an array of bad movies
        const badMoviesList = data.filter(movie => movie.rating < 5);
        console.log(badMoviesList);
    //2.Create an array of bad movies since year 2000
        const badMoviesSince2000 = badMoviesList.filter(movie => movie.year >= 2000)
        console.log(badMoviesSince2000);
    })



//Promise that resolves after set time
function getresolvePromise(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000)
    })
}
getresolvePromise(3).then(() => {
    console.log('I am called asynchronously');
});
//using async/await
async function getresolveasyncawait(delay) {
    const promise = await getresolvePromise(3);
    console.log('I am called asynchronously (async-await)')
}
getresolveasyncawait(3)


//Rewrite time
//setTimeout
function setTimeoutPromise(delay) {
   return  new Promise((resolve) => {
        setTimeout(() => {
            resolve();      
        }, delay)
    })
}
setTimeoutPromise(3000).then(() => {
    console.log('Called after 3 seconds')
});


//navigator.geolocation.getCurrentPosition
    function getGeoLocation() {
    
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);
            }, (err) => {
                reject(err)
            });
        });
    }
    getGeoLocation().then((position) => {
    console.log(position.coords.latitude, position.coords.longitude)
}).catch((err => {
    console.log(err);
}))




//Fetching and waiting
//1.Do the 3 steps below using promises and .then.
function getDataWithPromise() {   
        setTimeout(() => {
            const getData = fetch('http://api.open-notify.org/astros.json')
                .then(res => res.json())
                .then(data => console.log('Fetching data with promise after 3 seconds ',data))
                .catch((err) => console.log(err));
        }, 3000)
    
}
getDataWithPromise();
async function getDataWithAsyncAwait() {
   
        setTimeout(async () => {
            const fetchData = await fetch('http://api.open-notify.org/astros.json')
            const getData = await fetchData.json();
            console.log('Fetching data with async and await after 3 seconds', getData);
        }, 3000)   
}
getDataWithAsyncAwait();
//Which way do you prefer, the promise way or the async/await way?

//I prefer async and await because both are using for the same purpose,
//but If we consider conditions, error handling, It's hard to manage 
//with promises.We should use.then with every if and in the case of error handling,
//.then and.catch is calling every time of fetching data This will lead to callback hell.

//In the case of async and await we can use try , catch and finally block to handle the error. It is more cleaner and readable.
//No need to handle the error everytime of fetching the data. The catch block will throw an error if the code is included in the try block.

    