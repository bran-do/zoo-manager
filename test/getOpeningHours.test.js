const getOpeningHours = require('../src/getOpeningHours');

const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Retorna todos os horários caso o parâmetro seja vazio', () => {
    expect(getOpeningHours()).toStrictEqual(hours);
  });
  it('Retorna se o zoológico está aberto ou fechado corretamente', () => {
    expect(getOpeningHours('monday', '12:00-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('tuesday', '12:45-PM')).toBe('The zoo is open');
    expect(getOpeningHours('thursday', '12:00-PM')).toBe('The zoo is open');
  });
  it('Retorna um erro em caso de dia da semana inválido', () => {
    expect(() => { getOpeningHours('sexta-feira', '13:00-PM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Retorna um erro caso a hora passada não válida', () => {
    expect(() => { getOpeningHours('friday', 'ab:00-AM'); }).toThrow('The hour should represent a number');
    expect(() => { getOpeningHours('friday', '12:xx-AM'); }).toThrow('The minutes should represent a number');
    expect(() => { getOpeningHours('friday', '09:45-SM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => { getOpeningHours('friday', '13:10-PM'); }).toThrow('The hour must be between 0 and 12');
    expect(() => { getOpeningHours('friday', '10:80-PM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
