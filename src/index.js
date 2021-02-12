module.exports = function reverse (n) {

    let result = '';
    let str = String(Math.abs(n));

    for(let i = str.length - 1; 0 <= i; i--){

        result += str[i];

    }

    return Number(result);

}
