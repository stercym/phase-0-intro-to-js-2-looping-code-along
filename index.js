// // Code your solutions in this file
function writeCards(names, event) {
    let newArray = [];

    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return newArray;
}

function countDown(number) {
    for (let i = number; i >= 0; --i) {
        console.log(i);
    }
}

writeCards(["Mary", "Ndunge", "Mutua"], "birthday");
countDown(7);

