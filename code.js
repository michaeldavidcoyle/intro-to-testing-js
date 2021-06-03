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

function isFive() {
    return false;
}