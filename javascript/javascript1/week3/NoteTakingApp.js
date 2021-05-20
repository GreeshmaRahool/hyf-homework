//Save a note
const notes = [];
function saveNote(content, id) 
{
 notes.push({content : content , id : id})
 return notes;
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);


//Get a note
function getNote(id) 
{
    if(typeof id !== "number" || typeof id === "undefined" )   
    {
        return 'Enter a valid id';
    }
    else
    {    
        for(i = 0 ; i < notes.length ; i++)
        {                         
            if(notes[i].id === id)
            {
                return notes[i];
            }         

        }  
    } 
} 
const firstNote = getNote(1);
console.log(firstNote); 

  //Log out notes
  function logOutNotesFormatted()
  {
      for(i = 0 ; i < notes.length ; i++)
      {
        console.log(`The note with Id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
      }
   
  }
  logOutNotesFormatted();

  //Unique feature : clear all notes 
function clearNotes()
{
    if(notes.length !== 0)
    {
        notes.length = 0;
        console.log(`Notes are deleted successfully!`);
    }
}
clearNotes();