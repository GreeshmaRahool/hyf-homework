const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };


  function calculateTraveTime(travelInformation)
  { 
   //Calculating time from speed and distance travelled
   const timeTravelled = travelInformation.destinationDistance / travelInformation.speed;
   //Time in hour
   const timeTravelledInHours = Math.floor(timeTravelled);
   //Time in minutes 
   const timeTravelledInMinutes= Math.floor ( ( timeTravelled - timeTravelledInHours ) * 60 );
   //Return onject with time in hours and minutes  
   return {timeTravelledInHours , timeTravelledInMinutes}; 
  }


  const travelTime = calculateTraveTime(travelInformation);

  console.log(`The total time of travel is ${travelTime.timeTravelledInHours} hours and ${travelTime.timeTravelledInMinutes} minutes.`)
  