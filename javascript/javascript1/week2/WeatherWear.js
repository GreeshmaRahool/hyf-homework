
function getClothsToWear(temperature)
{
   const curTemperature = temperature;
    switch(true)
    {        
    case curTemperature <= -10:
        console.log(`Wear cold-weather attire with a heavy coat, gloves, scarf, and hat.Wool or cotton would be good choice!`);
        break;
    case curTemperature > -10 && curTemperature <= 7:
        console.log(`Wear cold-weather attire with a heavy coat, gloves, scarf, and hat.`);
        break;
    case curTemperature > 7 && curTemperature <= 16:
        console.log(`Wear thicker sweaters, jumpers, and turtlenecks`);
        break;s
    case curTemperature > 16 :
        console.log(`Wear T-shirts and trousers`);
        break;
    default:
        console.log(`Something went wrong!`);
    }
}
getClothsToWear(-14);
    