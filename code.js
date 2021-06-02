// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name === 'undefined' || typeof name === 'boolean') {
        name = "World";
    }
    return "Hello, " + name + "!";
}