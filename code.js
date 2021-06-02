// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined || name === true || name === false) {
        name = "World";
    }
    return "Hello, " + name + "!";
}