/* 
Falsy:
false
0 is falsy
'' is falsy
undefined is falsy
null is falsy
NaN is falsy

Truthy:
true
any number (positive or negative)
any sring including single space or whihtespace
[] is truthy
{} is truthy
*/

const x = -25;
if (x) {
    console.log('varible is truthy');
}
else {
    console.log('variable is Falsy');
}