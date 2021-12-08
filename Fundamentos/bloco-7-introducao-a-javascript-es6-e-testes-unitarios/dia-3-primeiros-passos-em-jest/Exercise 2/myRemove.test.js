const myRemove = require('./myRemove')

describe('the myRemove function(arr, item)', () => {

    it('returns the arr without the item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    });

    it('not ruturns the same array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]); //  Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes
    });

    it('returns the same array if item is equal to 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

});