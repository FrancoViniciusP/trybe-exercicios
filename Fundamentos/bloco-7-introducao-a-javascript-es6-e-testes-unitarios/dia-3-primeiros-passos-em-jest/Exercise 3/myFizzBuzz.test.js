const myFizzBuzz = require('./myFizzBuzz');

describe('the function myFizzBuzz(num)', () => {

    it('returns "fizzbuzz" if the number is divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('returns "fizz" if the number is divisible by 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('returns "buzz" if the number is divisible by 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('returns the number if it is NOT divisible by 3 or 5', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });

    it('returns "false" if is NaN', () => {
        expect(myFizzBuzz('number')).toBe(false);
    });
});