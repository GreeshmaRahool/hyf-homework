const commandHistory = []
let curUser = ""
const todos = []

function getReply(command)
{
// save the name and respond with a message
    //Checking whether the user already indtroduced 
    let found = false;
    for(item in commandHistory) 
    {
        if(commandHistory[item] === command.toLowerCase()) 
        {
            found = true;
            break;
        }
    }
    //If user already exists print a message else save the user name and set current user
    if(command.toLowerCase().startsWith("hello my name is"))
     {
   
        curUser = command.split(" ").pop()
        if(curUser == "")
        {
            console.log(`No name found. Enter a valid name`)
        }
       else if(found)
        {
            console.log(`Hello ${curUser}, we know you already`)
        } 
        else 
        {
            commandHistory.push(command.toLowerCase()) ;
            console.log(`nice to meet you ${curUser}`) ;
        }
    } 
// If asking for name, return current user
    else if(command.toLowerCase().startsWith("what is my name")) 
    { 
        if (curUser.length) 
        {
            console.log(`Your name is: ${curUser}`);
        } 
        else 
        {
            console.log(`Sorry we don't recognize you`);
        }
    } 
//Add todo list items
    else if(command.toLowerCase().startsWith("add") &&
    command.toLowerCase().endsWith("to my todo")) 
    {

        const task = command.replace("Add ", "").replace(" to my todo", "");
        console.log("Added " + task + " to todo");
        todos.push(task);
    }
//Remove todo list items 
    else if(command.toLowerCase().startsWith("remove") &&
    command.toLowerCase().endsWith("from my todo")) 
    {
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
    else if(command.toLowerCase().includes("what is on my todo")) 
    {
        console.log("\nItems in Todo");
        for(item in todos) 
        {
            console.log(" - " + todos[item]);
        }
    }
//Simple arithmetic calculations
    else if(command.toLowerCase().startsWith("what is"))
    {
        const calculateCommand = command.split(" ");
        const firstNumber =  parseInt(calculateCommand[2]);
        const secondNumber =  parseInt(calculateCommand[4]);
        let result = 0;
        if(calculateCommand[3] ===  '+')
        {
            result=firstNumber + firstNumber;
            console.log(result);
           
        }
       if(calculateCommand[3] === '-')
        {
            result=firstNumber - firstNumber;
            console.log(result);
        }
        if(calculateCommand[3] === '*')
        {
            result=firstNumber * firstNumber;
            console.log(result);
        }
        if(calculateCommand[3] === '/')
        {
            result=firstNumber / firstNumber;
            console.log(result);
        }
        if(calculateCommand[3] === '%')
        {
            result=firstNumber % firstNumber;
            console.log(result);
        }
        
    }
//Print current day in a human readable format
    else if (command.includes("what day is today"))
    {
        const today = new Date().toDateString();
        arrDate = today.split(" ");
        console.log(`${arrDate[2]}. of ${arrDate[1]} ${arrDate[3]}`);
    }
//Set timer
    else if(command.toLowerCase().startsWith("set timer for"))
    {
         
        strCmd = command.split(" ");
        timeUnit = strCmd.pop();
        readTIme = strCmd[strCmd.length-1];
        let calculateTimer = 0;
        console.log(`Setting a timer for ${readTIme} ${timeUnit}`)
        if(readTIme > 0)
        {
            if(timeUnit.toLowerCase().startsWith('sec'))
            {
                calculateTimer = readTIme * 1000;
            }
            else if(timeUnit.toLowerCase().startsWith('min'))
            {
                calculateTimer = readTIme * 60 * 1000;
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
