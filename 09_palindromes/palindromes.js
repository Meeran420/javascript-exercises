const palindromes = function (str) {
    str = str.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replaceAll(" ", "");
    str = str.toLowerCase();
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) != str.charAt(str.length-i-1))
            return false;
    }

    return true
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
