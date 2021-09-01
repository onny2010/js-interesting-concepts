const favNum = 28;
console.log(mood);                      /* hoisting */

function add(first, second) {
    const result = first + second;
    if (result > 9) {
        var mood = 'happy';
        // const mood = 'happy';
        console.log(mood);
    }
    // console.log(mood);               /* let and const isblock scope and this is not hoisting */
    // console.log(result);             /* local scope */
    // console.log(favNum);             /* global scope */
    return result;
}
const sum = add(28, 35);
console.log(favNum);                    /* global scope */


for (var i = 0; i < 10; i++) {

}
// console.log(i);