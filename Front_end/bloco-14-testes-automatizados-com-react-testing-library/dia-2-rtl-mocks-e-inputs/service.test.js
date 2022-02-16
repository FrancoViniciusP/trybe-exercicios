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
