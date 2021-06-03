// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name != 'string' || name === '' || !isNaN(parseFloat(name))) {
        name = "World";
    }

    return "Hello, " + name + "!";
}

function isFive(input) {
    return input == 5;
}

function isEven(number) {
    if (typeof number == 'boolean') {
        return false;
    }
    return number % 2 == 0;
}

function isVowel(character) {
    if (typeof character == 'undefined' || typeof character == 'number') {
        return false;
    }
    return character.toLowerCase() == 'a';
}
