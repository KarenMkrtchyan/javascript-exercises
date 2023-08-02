const findTheOldest = function(people) {
    let result="";
    let oldestAge=0;
    for(person of people){
        if(age(person)>oldestAge){
            oldestAge=age(person);
            console.log(age(person));
            result=person;
        }
    }
    return result;
};

function age(person){
    return (person["yearOfDeath"]?person["yearOfDeath"]:2023)-person["yearOfBirth"];
}

// Do not edit below this line
module.exports = findTheOldest;
