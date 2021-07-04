// return the temperature value form Kelvin to Fahrenheit

function kelvinToFahrenheit(kelvin) {
    return (`The temperature today is ` + Math.floor((kelvin - 273.15) * 9 / 5 + 32) + ` Fahrenheit`);
}

console.log(kelvinToFahrenheit(600));


// return the human age in dog years

function humanAgeInDogYears(myAge) {
    return (`I am ` + (myAge) + ` years old in human years, wich is ` + (((myAge - 2) * 4) + (2 * 10.5)) + ` years old in dog years`);
}
console.log(humanAgeInDogYears(35));





// return the time the users will start the race 

function raceTime(userAge, registeredEarly) {

    let raceNumber = Math.floor(Math.random() * 1000);

    if (registeredEarly === "early" && userAge >= 18) {
        raceNumber += 1000;
    }

    if (registeredEarly === "early" && userAge >= 18) {
        return (`If you are ${userAge} years old and you have registered ${registeredEarly}, you will race at 9:30 am. Your race number is ${raceNumber}`);
    } else if (registeredEarly !== "early" && userAge >= 18) {
        return (`If you are ${userAge} years old and you have registered ${registeredEarly}, you will race at 11:00 am. Your race number is ${raceNumber}`);
    } else {
        return (`If you are ${userAge} years old and you have registered ${registeredEarly}, you will race at 12:30 am. Your race number is ${raceNumber}`);
    }
}

console.log(raceTime(21, 'late'));


// return the corresponding eight ball answer

function answerMyQuestion(userName, userQuestion) {
    randomNumber = Math.floor(Math.random() * 8);
    if (randomNumber === 0) {
        return (`Hello. I am ${userName}. ${userQuestion}. It is certain`);
    } else if (randomNumber === 1) {
        return (`Hello. I am ${userName}. ${userQuestion}. It is decidedly so`);
    } else if (randomNumber === 2) {
        return (`Hello. I am ${userName}. ${userQuestion}. Reply hazy try again`);
    } else if (randomNumber === 3) {
        return (`Hello. I am ${userName}. ${userQuestion}. Cannot predict now`);
    } else if (randomNumber === 4) {
        return (`Hello. I am ${userName}. ${userQuestion}. Do not count on it`);
    } else if (randomNumber === 5) {
        return (`Hello. I am ${userName}. ${userQuestion}. My sources say no`);
    } else if (randomNumber === 6) {
        return (`Hello. I am ${userName}. ${userQuestion}. Outlook not so good`);
    } else if (randomNumber === 7) {
        return (`Hello. I am ${userName}. ${userQuestion}. Signs point to yes`);
    }
}
console.log(answerMyQuestion('Nadia', 'Do you believe in Santa Claus?'));

/* ESTE CORECT SA SCRIU ASA?
function answerMyQuestion(userName, userQuestion) { 
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
if (randomNumber === 0) {
   eightBall = 'It is certain';
}  else if (randomNumber === 1) {
    eightBall ='It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall ='Cannot predict now';
} else if (randomNumber === 4) {
    eightBall ='Do not count on it';
} else if (randomNumber === 5) {
    eightBall ='My sources say no';
} else if (randomNumber === 6) {
    eightBall ='Outlook not so good';
} else if (randomNumber === 7) {
    eightBall ="Signs point to yes";
}
console.log(`Hello. I am ${userName}. ${userQuestion}. ${eightBall}`);
}
answerMyQuestion('Nadia', 'Do you believe in Santa Claus?');
*/