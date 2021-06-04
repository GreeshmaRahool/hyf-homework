const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
        title: "Stranger things",
        days: 2,
        hours: 17,
        minutes:0,
      },
      {
        title: "The crown",
        days: 4,
        hours: 3,
        minutes:40,
      },
  ];

  function calculateSeriesDuration(seriesDurations)
  {
      let totalTimeSpend = 0;
      const lifeSpanInMinutes =  80 * 365 * 24 * 60 ;
      for(i = 0 ; i < seriesDurations.length ; i++)
      {
        
        const totalDurationInMinutes = ( seriesDurations[i].days * 24 * 60 ) + ( seriesDurations[i].hours * 60 ) + seriesDurations[i].minutes;
      
        const durationInPercentage = (totalDurationInMinutes * 100 ) / lifeSpanInMinutes
        console.log(`${seriesDurations[i].title} took ${durationInPercentage.toFixed(3)}% of my life`);

        totalTimeSpend += totalTimeSpend + durationInPercentage;
           
      }
      console.log(`\nIn total that is ${totalTimeSpend.toFixed(3)}% of my life`);
      
  }
  calculateSeriesDuration(seriesDurations);
