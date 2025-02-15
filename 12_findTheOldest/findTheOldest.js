const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
      const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
