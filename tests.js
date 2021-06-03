// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when passing "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when passing "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when passing "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when called without argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passing true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passing false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    // edge cases
    it('should return the string "Hello, World!" when argument is null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an empty string', function() {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed a number', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed a numeric string', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an array', function() {
        expect(sayHello( ["Jane", "Alex", "Pat"] )).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an object', function() {
        expect(sayHello( {} )).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed a function', function() {
        expect(sayHello( function() {} )).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it ('should return a boolean when executed', function() {
        expect(typeof isFive()).toBe('boolean')
    });
});