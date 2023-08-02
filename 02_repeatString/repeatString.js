const repeatString = function(word, count) {
    let result ="";
    if(count>=0){
    for(let i=0; i<count; i++){
        result = result.concat(word);
    }
    return result;
}
return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
