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
describe('sayHello', function () {
    it('should be defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello Jane!");
    });
    it('should return "Hello Alex!" when input "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello Alex!");
    });
    it('should return "Hello Pat!" when input "Pat" ', function () {
        expect(sayHello("Pat")).toBe("Hello Pat!");
    });
    it('should return "Hello World!" ', function () {
        expect(sayHello()).toBe("Hello World!");
    });
    it('should return "Hello World", when input "true"', function () {
        expect(sayHello(true)).toBe("Hello World!");
    });
    it('should return "Hello World", when input "false"', function() {
        expect(sayHello(false)).toBe("Hello World!");
    });
});


// describe('isFive', function () {
//     it(`should return a boolean no matter the input`, function (){
//         expect(typeof isFive).toBe('boolean');
//     });