
function getEventWeekday(noOfFutureEventDays)
{
    const curWeekDay= new Date();
    const futureEventDay=(noOfFutureEventDays + curWeekDay.getDay())% 7;
    const arrWeekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    console.log(`The event will be held on ${arrWeekDays[futureEventDay]}`);
}
getEventWeekday(10); 
    