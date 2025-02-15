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
    it('should return the string "Hello, World!" when passed a boolean', function() {
        expect(sayHello(true)).toBe("Hello, World!");
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
        expect(typeof isFive()).toBe('boolean');
    });
    it ('should return true when passed the number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it ('should return true when passed the numeric string "5"', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when executed', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the number 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the number -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it ('should return false when called without argument', function() {
        expect(isEven()).toBe(false)
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when executed', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed a vowel', function() {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("e")).toBe(true);
        expect(isVowel("i")).toBe(true);
        expect(isVowel("o")).toBe(true);
        expect(isVowel("u")).toBe(true);
    });
    it('should return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed a number', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true or false', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called with no argument', function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed 2 and 3', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3 and -9', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed "5" and 6', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed "-4" and "10"', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed two non-numeric values', function() {
        expect(add('banana', 'split')).toBeNaN();
    });
    it('should return NaN when passed a number and a non-numeric value', function() {
        expect(add(2, 'apples')).toBeNaN();
    });
    it('should return NaN when called without any argument', function() {
        expect(add()).toBeNaN();
    });
});