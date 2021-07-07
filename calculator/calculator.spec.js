const { add } = require('./calculator.js');

// test away!
it('should run the tests', function() {
    expect(true).toBe(true);
});

describe('calculator.js', function() {
    describe('add()', function() {
        it('should return the sum of two numbers passed as arguments', function() {
            // Arrange (setup the environment and inputs)

            // Act
            const sum = add(2, 2); 

            // Assert
            expect(sum).toBe(4);
        });
        it('should return the sum of two numbers', function() {
            expect(add(2, 2)).toBe(4);
            expect(add(1, 5)).toBe(6);
            expect(add(8, 3)).toBe(11);
            expect(add(7, 6)).toBe(13);
        })

        it('should return 0 when called with no arguments', function() {
            expect(add()).toBe(0);
        });

        it('should return the value of the argument when only passing one number', function() {
            expect(add(1)).toBe(1);
            expect(add(5)).toBe(5);
        });

        it('should throw an error when passing arguments that are not numbers', function() {
            expect(() => {
                add(2, {});
                }).toThrow();

            expect(() => {
                add(2, []);
                }).toThrow();

            expect(() => {
                add(2, 'two');
                }).toThrow();

            expect(() => {
                add(2, NaN);
                }).toThrow();

            expect(() => {
                add(2, null);
                }).toThrow();

            expect(() => {
                add({}, {});
                }).toThrow();

            expect(() => {
                add([], []);
            }).toThrow();
        });

        test('NaN is a number', function() {
            expect(typeof NaN).toBe("number")
        });
    });
});