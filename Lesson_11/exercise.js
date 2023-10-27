function FizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 ===0) {
            console.log('FizzBuzz');
        }
        else console.log(i);
    }
}

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (word === array[i]) {
            return i;
        }
    }
    return -1;
}

function unique(array) {
    let answerArray = [];
    for (let i = 0; i < array.length; i++) {
        if (answerArray.includes(array[i])) continue;
        else answerArray.push(array[i]);
    }

    return answerArray;
}

console.log(unique(['green', 'green', 'red', 'blue']));