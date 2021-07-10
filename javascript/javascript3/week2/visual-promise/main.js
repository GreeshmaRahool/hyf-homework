//Using promise
const liArray = document.querySelectorAll('.marks >li');
const translateOneByOne =() => {
    moveElement(liArray[0], { x: 20, y: 300 }).then(() => {
        console.log("Red element has been moved");
    })
        .then(() => moveElement(liArray[1], { x: 400, y: 300 }))
        .then(() => console.log("Blue element has been moved"))
        .then(() => moveElement(liArray[2], { x: 400, y: 20 }))
        .then(() => console.log("Green element has been moved"))    
}
translateOneByOne();

//Using promiseAll
function translateAllAtOnce() {
    Promise.all([moveElement(liArray[0], { x: 20, y: 300 }), moveElement(liArray[1], { x: 400, y: 300 }), moveElement(liArray[2], { x: 400, y: 20 })]).then(() => {
        console.log('all done'); 
    });
    
}
translateAllAtOnce();