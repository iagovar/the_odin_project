const findTheOldest = function oldestReturner(peopleArray) {
    // Expects an array of objects, returns the name of the oldest dude
    
    let oldestDude = {
      age: 0,
      index: undefined,
    };
    
    let indexAge = 0;

    // Some objects don't have a yearOfDeath key, so we use the current
    // year to calculate the year
    const dateObject = new Date();
    const year = dateObject.getFullYear()
    
    for (i in peopleArray) {
      if (peopleArray[i].yearOfDeath != undefined) {
        indexAge = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
      } else {
        indexAge = year - peopleArray[i].yearOfBirth;
      };
      if (indexAge > oldestDude.age) {
        oldestDude.age = indexAge;
        oldestDude.index = i;
      };
    };
    
    return peopleArray[oldestDude.index];
  };

// Do not edit below this line
module.exports = findTheOldest;
