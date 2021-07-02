const commandHistory = []
let currentUserName = ""
const todos = []

function getReply(command)
{
    const lowerCaseCommand = command.toLowerCase();
    if (lowerCaseCommand.startsWith("hello my name is")) helloMyNameIsFunction(command);
        
    else if (lowerCaseCommand.startsWith("what is my name")) whatIsMyNameFunction();
        
    else if (lowerCaseCommand.startsWith("add") &&
        lowerCaseCommand.endsWith("to my todo")) addTodDo(command);
        
    else if (lowerCaseCommand.startsWith("remove") &&
        lowerCaseCommand.endsWith("from my todo")) removeToDo(command);

    else if (lowerCaseCommand.includes("what is on my todo")) printToDo();

    else if (lowerCaseCommand.startsWith("what is")) arithmeticOperations(command);
   
    else if (lowerCaseCommand.includes("what day is today")) printDay();
    
    else if (lowerCaseCommand.startsWith("set timer for")) setTimer(lowerCaseCommand);
    
}
// save the name and respond with a message
//Checking whether the user already indtroduced 
//If user already exists print a message else save the user name and set current user
function helloMyNameIsFunction(command){
    let inputUserName = command.split(" ").pop()
    if(inputUserName === ""
      || inputUserName === "is" // if it's empty the last word could be 'is'
    )
    {
        console.log(`No name found. Enter a valid name`)
    }
   else if(currentUserName)
    {
        console.log(`Hello ${currentUserName}, we know you already`)
    } 
    else 
    {
        currentUserName = inputUserName;
        console.log(`nice to meet you ${currentUserName}`) ;
    }
}

//If asking for name, return current user
function whatIsMyNameFunction(){
    if (currentUserName.length) 
    {
        console.log(`Your name is: ${currentUserName}`);
    } 
    else 
    {
        console.log(`Sorry we don't recognize you`);
    }
}

//Add todo list items
function addTodDo(command) {
    const task = command.replace("Add ", "").replace(" to my todo", "");
    console.log("Added " + task + " to todo");
    todos.push(task);
}

//Remove todo list items 
function removeToDo(command) {
    const task = command.replace("Remove ", "").replace(" from my todo", "");
    let removed = false;
    for(item in todos) 
    {
        if(todos[item] == task) 
        {
            todos.splice(item, 1);
            console.log(`Removed ${task} to todo`);
            removed = true;
            break;
        }
    }

    if (!removed) 
    {
        console.log(`Could not find ${task} in todo`);
    }
}

//Print todo list items 
function printToDo() {
    console.log("\nItems in Todo");
    for(item in todos) 
    {
        console.log("\n - " + todos[item]);
    }
}
//Simple arithmetic calculations
function arithmeticOperations(command) {
    const calculateCommand = command.split(" ");
    const firstNumber =  parseInt(calculateCommand[2]);
    const secondNumber =  parseInt(calculateCommand[4]);
    
    const mathOperation = calculateCommand[3];
    if(mathOperation ===  '+')
    {
        console.log(firstNumber + firstNumber);
    }
   if(mathOperation === '-')
    {
        console.log(firstNumber - firstNumber);
    }
    if(mathOperation === '*')
    {
        console.log(firstNumber * firstNumber);
    }
    if(mathOperation === '/')
    {
        console.log(firstNumber / firstNumber);
    }
    if(mathOperation === '%')
    {
        console.log(firstNumber % firstNumber);
    }
}
//Print current day in a human readable format
function printDay() {
    const today = new Date().toDateString();        
    const [ weekday, month, day, year ] = today.split(" "); // this way, we assign each element in the array to a const.
    console.log(`${day}. of ${month} ${year}`);
}
//Set timer
function setTimer(lowerCaseCommand) {
    const stringCommand = lowerCaseCommand.split(" ");  
        let [ , , , readTime, timeUnit] = stringCommand;  
        let calculateTimer = 0;
        console.log(`Setting a timer for ${readTime} ${timeUnit}`)
        if(readTime > 0)
        {
            if(timeUnit.toLowerCase().startsWith('sec'))
            {
                calculateTimer = readTime * 1000;
            }
            else if(timeUnit.toLowerCase().startsWith('min'))
            {
                calculateTimer = readTime * 60 * 1000;
            }
            else if(timeUnit.toLowerCase().startsWith('hour'))
            {
                calculateTimer = readTIme * 60 * 60 * 1000;
            }  
            setTimeout(() => console.log("Timer expired"), calculateTimer)
        }
        else
        {
            console.log(`Invalid time value`)
        }
}








getReply("Hello my name is Greeshma")
getReply("Hello my name is Greeshma")
getReply("What is my name")
getReply("Hello my name is Greeshma")
getReply("What is my name")
getReply("Add fishing to my todo")
getReply("Add reading to my todo")
getReply("What is on my todo")
getReply("Remove fishing from  my todo")
getReply("What is on my todo")
getReply("Remove reading from my todo")
getReply("Remove nonexisting from my todo")
getReply("What is 3 + 3")
getReply("What is 3 - 3")
getReply("What is 12 * 2")
getReply("What day is today")
getReply("Set timer for 10 seconds")
