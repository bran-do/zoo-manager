const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica o parâmetro "count" da função', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica o parâmetro "names" da função', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica o parâmetro "averageAge" da função', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
    expect(handlerElephants('averageAge')).toEqual((11 + 15 + 12 + 4) / 4);
  });
  it('Verifica o parâmetro "location" da função', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica o parâmetro "popularity" da função', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Verifica o parâmetro "availability" da função', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica parâmetros inválidos da função', () => {
    expect(handlerElephants('age')).toBeNull();
    expect(handlerElephants(15)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants()).toBeUndefined();
  });
});
