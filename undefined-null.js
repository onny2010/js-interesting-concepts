/* 
undefined
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't pass
5. prperty that doesn't exists in an object
6. accessing array element out of range and accessing deleted   array element 
7. explicitly set value to undefined
8. null is undefined
*/

let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
const result = second(3, 91);
// console.log(result);

function add(a, b) {
    const sum = a + b;
    return;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
// console.log(fourth)


function double(a, b) {
    const result = a * 3;
    // console.log(b);
    return result;
}
double(28);


const fifth = { name: 'tonni', age: 22, location: 'Dinajpur' };
// console.log(fifth.phone);


const sixth = [28, 35, 12, 101];
// console.log(sixth[4]);

delete sixth[2];
// console.log(sixth[2]);


const seventh = undefined;
// console.log(seventh)


const myObj = { name: 'onny', proffession: null }
