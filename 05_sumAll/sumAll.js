const sumAll = function(start, end) {

    if(typeof(start)=="number"&&typeof(end)=="number"&& start>0&&end>0){
        let result =0;
        if(end>start){
        for(let i =start; i<=end; i++){
            result +=i;
        }
        return result;
    }
    else{
        for(let i =end; i<=start; i++){
            result +=i;
        }
        return result;
    }
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
