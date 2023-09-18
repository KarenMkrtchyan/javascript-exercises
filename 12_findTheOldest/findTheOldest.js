const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => (age(a)>age(b))?-1:1)
    return oldest[0];
};

function age(person){
    const currentYear = (new Date()).getFullYear();
    return (person["yearOfDeath"]?person["yearOfDeath"]:currentYear)-person["yearOfBirth"];
}

// Do not edit below this line
module.exports = findTheOldest;
