const fibonacci = function(index) {
    if(index>0){
    let result=[1,1];
    for(let i=2; i<=index; i++)
    {
        result.push(result[i-2]+result[i-1]);
    }
    return result[index-1];
}
return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
