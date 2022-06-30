const handlerElephants = require('../src/handlerElephants');

describe('HandlerElephants function tests', () => {
  it('should be a function', () => {
    const actual = handlerElephants;
    const expected = 'function';
    expect(typeof actual).toBe(expected);
  })
  it('should return undefined in case no parameter is given', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  })
  it('should return Parâmetro inválido, é necessário uma string in case given parameter is not a string', () => {
    const actual = handlerElephants(10);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  })
  it('should return the correct location in case given parameter is location', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  })
  it('should return the correct number of elephants in case given parameter is count', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  })
  it('should return an array of names including Jefferson in case given parameter is name', () => {
    const actual = handlerElephants('names');
    const includes = actual.includes('Jefferson');
    const expected = true;
    expect(includes).toBe(expected);
  })
  it('should return the correct age average of all elephants in case given parameter is averageAge', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  })
  it('should return the correct popularity in case given parameter is popularity', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBe(expected);
  })
  it('should return an array of available days in case given parameter is availability', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  })
});
