function welcomeMessage(greetHandler) {
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Bradly', 'Tom Cruise']
// const myObj = { name: 'Tom chinku', age: 11 };
// welcomeMessage(names);
// welcomeMessage(myObj);

function greetMorning(name) {
    console.log('good morning', name);
}
function greetAfternoon(name) {
    console.log('good morning', name);
}
function greetEvening(name) {
    console.log('good morning', name);
}
welcomeMessage('Tom Hanksg', greetMorning);
welcomeMessage('Sakib Hanksg', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);



/* function handleClick(){
    console.log('button is clicked');
}
document.getElementById('my-btn').addEventListener('click', handleClick);

document.getElementById('btn').addEventListener('click', function(){
    console.log('button is clicked');
}) */