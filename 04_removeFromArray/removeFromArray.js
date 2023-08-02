const removeFromArray = function(array, ...target) {
    let result = array;

    console.log(target)
    for(let i =array.length-1; i>=0; i--){
        for(let j=0; j<target.length;j++){
        if(array[i]===target[j]){
            result.splice(i,1);
        }
    }
    }
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
