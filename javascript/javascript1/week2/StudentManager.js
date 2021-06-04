const class07Students = [];
function addStudentToClass(studentName)
 {
    if(!studentName || studentName === " ")
    {
        console.log('Please provide a valid student name');
        return;
    }
    
    else if(class07Students.includes(studentName)){
        console.log(`Student ${studentName} is already in the class`);
        return;
       
    }
    else if(studentName === 'Queen' || class07Students.length < 6)
    {
        class07Students.push(studentName);
        console.log(studentName);
        return;
    }
     
   else
    {
        console.log(`Cannot add more students to class 07`);
        return;
    }
}
 
 addStudentToClass('Benjamin');
 addStudentToClass('Marie');
 addStudentToClass('');
 addStudentToClass('Joseph');
 addStudentToClass('Eline');
 
 
 //Adding empty string to the studentName:
 addStudentToClass();
 addStudentToClass(" ");
 
 //Adding studentname that already exists:
 addStudentToClass('Benjamin');
 
 //Adding more students:
 addStudentToClass('George');
 console.log(class07Students);
 
 //Adding some more students:
 addStudentToClass('Mark');
 
 //Adding queen to the class:
 addStudentToClass('Queen');
 addStudentToClass('Queen');
function getNumberOfStudents()
 {
    const noOfStudents= class07Students.length;
    console.log(`Total number of students in class 07 is ${noOfStudents}`);
  
 }
getNumberOfStudents();




