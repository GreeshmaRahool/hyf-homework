//Adding an activity
const activities = [];

function addActivity(date , activity , duration)
{
    activities.push(
        {
            date :date , 
            activity : activity , 
            duration : duration
        }
    )
    
    console.log(activities);
}
addActivity("23/7-18", "Youtube", 30);
addActivity("22/7-18", "Whatsapp", 20);
addActivity("21/7-18", "Facebook", 28);
addActivity("21/7-18", "Instagram", 48);
addActivity("21/7-18", "TikTok", 38);

//Show my status
function showStatus(activities)
{ 
    let totalDuration = 0;
         
        for(i = 0 ; i < activities.length ; i++ )
        {         
            totalDuration += activities[i].duration;
        }
        return totalDuration;
  
}
const durationSum = showStatus(activities);
console.log(`You have added ${activities.length} activities. They amount to ${durationSum} min. of usage`);

//Usage limit

function limitUsage()
{   
    const usageLimit = 100;
    if(durationSum > usageLimit)
    {
        console.log(`You have reached your limit, no more smartphoning for you!`)
    }
//Extra feature
//Setting reminder for 80% of set limit
    const percntageOfUsage = (durationSum * 100) / usageLimit
    if(percntageOfUsage === 80)
    {
        console.log(`Warning : Your screen time is 80% of set limit! `)
    }

}

limitUsage();
