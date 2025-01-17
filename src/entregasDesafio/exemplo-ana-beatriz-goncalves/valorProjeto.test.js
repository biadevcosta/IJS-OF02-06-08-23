const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('', () => {

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    
    test('deve calcular o valor total do projeto de pacote básico de acordo com as funcionalidades passadas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3696);
    });

    test('deve calcular o valor total do projeto de pacote intermediário de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3763);
    });

    test('deve calcular o valor total do projeto pacote premium de acordo com as funcionalidades passadas', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ] //48 horas
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(3864);
    });

    test('Calcula horas de projeto para uma lista de funcionalidades vazia', () => {
        const funcionalidades = [];
        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toEqual(0);
    });

    test('Calcula horas de projeto para uma lista de funcionalidades vazia e valorHora undefined', () => {
        const funcionalidades = [];
        const valorHora = undefined;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toBeNaN();
    });

    test('Calcula horas de projeto com valorHora igual a 0', () => {
        const funcionalidades = ['setup'];
        const valorHora = 0;
        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);
        expect(resultado).toBe(0);
    });
})