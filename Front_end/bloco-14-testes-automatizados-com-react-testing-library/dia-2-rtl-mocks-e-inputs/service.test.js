const service = require('./service');
jest.mock('./service');


test('Se "randomNumber" retorna número aleatório de 0 a 100', () => {
    service.randomNumber.mockReturnValue(10); // Configurando retorno da função como 10;

    service.randomNumber(); // Chamando a função;

    expect(service.randomNumber).toHaveBeenCalledTimes(1); // Verificando se a função foi chamada uma vez.
    expect(service.randomNumber()).toBe(10); // Conferindo se a função retorna o valor 10;

})

