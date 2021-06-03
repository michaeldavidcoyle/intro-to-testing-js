// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name === 'undefined' || typeof name === 'boolean' || typeof name == 'number') {
        name = "World";
    } else if (name == null || name === '' || !isNaN(parseFloat(name))) {
        name = "World";
    }
    return "Hello, " + name + "!";
}