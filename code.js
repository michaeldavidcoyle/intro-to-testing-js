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
    if (typeof character != 'string') {
        return false;
    }

    character = character.toLowerCase();

    return character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u';
}

function add(addendA, addendB) {
    return addendA + addendB;
}
