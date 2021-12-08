const sum = require('./sum');

describe('the function sum()', () => {

    it('sums two values', () => {
        expect(sum(4, 5)).toBe(9);
    }); 

    it('sums zeros is equal to zero', () => {
        expect(sum(0, 0)).toEqual(0)
    });

    it('returns an error if input is NaN', () => {
        expect(() => {sum(4,'5')}).toThrow(Error); //Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. 
    });

    it('returns a error message', () => {
        expect(() => {sum(4,'5')}).toThrow(Error('parameters must be numbers'));
    });
});