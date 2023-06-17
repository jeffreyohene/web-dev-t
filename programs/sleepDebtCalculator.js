// getSleepHours function
const getSleepHours = (day) => {
    // Step 2: Use switch statement to return value based on dow
    switch (day.toLowerCase()) {
      case 'monday':
        return 8; // Return the number of hours slept on Monday
      case 'tuesday':
        return 7; // Return the number of hours slept on Tuesday
      case 'wednesday':
        return 6; // Return the number of hours slept on Wednesday
      case 'thursday':
        return 8; // Return the number of hours slept on Thursday
      case 'friday':
        return 7; // Return the number of hours slept on Friday
      case 'saturday':
        return 9; // Return the number of hours slept on Saturday
      case 'sunday':
        return 7; // Return the number of hours slept on Sunday
      default:
        return 0; // Return 0 if an invalid day is passed
    }
  };
  
  // getActualSleepHours function
  const getActualSleepHours = () => {
    // Calling getSleepHours for each day and sum the results
    const totalHours = getSleepHours('monday') +
                       getSleepHours('tuesday') +
                       getSleepHours('wednesday') +
                       getSleepHours('thursday') +
                       getSleepHours('friday') +
                       getSleepHours('saturday') +
                       getSleepHours('sunday');
    return totalHours;
  };
  
  // getIdealSleepHours function
  const getIdealSleepHours = () => {
    const idealHours = 8; // Set the ideal hours per night
    return idealHours * 7; // Return the total ideal hours per week
  };
  
  // calculateSleepDebt function
  const calculateSleepDebt = () => {
    // Adjust idealHours to customize the ideal sleep hours per night
    const idealHours = getIdealSleepHours(8); // Set the ideal hours per night
    const actualHours = getActualSleepHours();
    const sleepDebt = idealHours - actualHours;
  
    // Output sleep debt information
    if (actualHours === idealHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualHours > idealHours) {
      console.log(`You got more sleep than needed. You're ${sleepDebt} hours over your ideal sleep.`);
    } else {
      console.log(`You should get some rest. You're ${Math.abs(sleepDebt)} hours under your ideal sleep.`);
    }
  };
  
  // Start the program by calling calculateSleepDebt
  calculateSleepDebt();
  
  
  