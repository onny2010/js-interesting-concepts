function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
let clock2 = stopWatch();
let clock3 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock3());
console.log(clock3());
console.log(clock1());
console.log(clock2());
console.log(clock3());