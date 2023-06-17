const getRandEvent = () => {
    // Move random variable to block scope within getRandEvent function
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// Expand days scope
const getTrainingDays = event => {
    let days; // Declare days within the function scope

    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// Move name variable to global scope
const name = 'Nala';

const logEvent = (name, event) => { // Add name as a parameter
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => { // Add name as a parameter
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event); // Pass name as an argument
logTime(name, days); // Pass name as an argument

// Additional competitor
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
