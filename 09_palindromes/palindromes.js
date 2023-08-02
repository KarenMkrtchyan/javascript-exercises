const palindromes = function (string) {
    let word=string.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, "");;
    let reverse='';
    for(let i=word.length-1; i>=0; i--){
        reverse+=word.charAt(i);
    }
    if(word==reverse){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
