const service = require('./service');
jest.mock('./service');

afterEach(() => jest.clearAllMocks()); // Limpa todas simulações(Mocks) após cada teste;

test('Se "randomNumber" retorna número aleatório de 0 a 100', () => {
    service.randomNumber.mockReturnValue(10); // Configurando retorno da função como 10;

    service.randomNumber(); // Chamando a função;

    expect(service.randomNumber).toHaveBeenCalled(); // Verificando se a função foi chamada.
    expect(service.randomNumber()).toBe(10); // Conferindo se a função retorna o valor 10;

});


test('Se a função recebe dois numeros e retorna a divisão do primeior pelo segundo', () => {
    service.randomNumber.mockImplementation((a, b) => a / b); // Redefine a função em si;
    
    service.randomNumber(4,2); // Chama a função com seus parametros;
    expect(service.randomNumber).toHaveBeenCalledTimes(1); // Verifica quantas vezes a função foi chamada neste teste;

    expect(service.randomNumber(4,2)).toBe(2); // Verifica se a função retorna o valor correto de acordo com certos parametros;
    expect(service.randomNumber).toHaveBeenCalledTimes(2);

})

test('Criar dois mocks no mesmo teste "multiplicar 3 números" e "retornar o dobro de um número"', () => {
    service.randomNumber
    .mockImplementationOnce((a, b, c) => a * b * c) // Redefine a função apenas uma vez quando é chamada.
    .mockImplementationOnce((a) => a * 2); // Quando a função for chamada pela segunda vez executará esse mock.

    expect(service.randomNumber(2, 3, 1)).toBe(6);
    expect(service.randomNumber(2)).toBe(4); 

})

test('Alterar as funções e realizar testes', () => {
    service.turnToUpper.mockImplementation((word) => word.toLowerCase());
    service.theLastLetter.mockImplementation((word) => word.slice(word.length-1));
    service.joinWords.mockImplementation((a, b, c) => `${a} ${b} ${c}`);

    expect(service.turnToUpper('VINICIUS')).toBe('vinicius');
    expect(service.turnToUpper('VinIcIUs')).toBe('vinicius');

    expect(service.theLastLetter('Vinicius')).toBe('s')
    expect(service.theLastLetter('coffee')).toBe('e')

    expect(service.joinWords('how', 'are', 'you?')).toBe('how are you?')

    
})
