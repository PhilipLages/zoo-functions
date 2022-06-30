const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours function tests', () => {
  it('should be a function', () => {
    const actual = typeof getOpeningHours;
    const expected = 'function';
    expect(actual).toBe(expected);
  });
  it('should return an object', () => {
    const actual = typeof getOpeningHours();
    const expected = 'object';
    expect(actual).toBe(expected);
  });
  it('should return all available hours if no parameters are given', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('should return (The zoo is closed) if monday is given as the day parameter with any dataHour parameter', () => {
    const actual = getOpeningHours('Monday', '04:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('should return (The zoo is open) if any day is given as the day parameter besides monday and dataHour is within its limits ', () => {
    const actual = getOpeningHours('Tuesday', '08:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('should return (The zoo is closed) if any day is given as the day parameter besides monday and dataHour is outside its limits ', () => {
    const actual = getOpeningHours('Tuesday', '07:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('should throw the error message (The day must be valid. Example: Monday) if day parameter is not valid', () => {
    expect(() => getOpeningHours('Wed', '07:34-AM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('should throw the error message (The abbreviation must be \'AM\' or \'PM\') if dataHour does not have AM or PM', () => {
    const actual = ['Friday', '09:00-ZM'];
    const errorMessage = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours(...actual)).toThrow(errorMessage);
  });
  it('should throw the error message (The hour should represent a number) if hour does not have only numbers', () => {
    const actual = ['Friday', 'C9:00-AM'];
    const errorMessage = 'The hour should represent a number';
    expect(() => getOpeningHours(...actual)).toThrow(errorMessage);
  });
  it('should throw the error message (The minutes should represent a number) if minutes does not have only numbers', () => {
    const actual = ['Friday', '09:5J-AM'];
    const errorMessage = 'The minutes should represent a number';
    expect(() => getOpeningHours(...actual)).toThrow(errorMessage);
  });
  it('should throw the error message (The hour must be between 0 and 12) if hour does not have numbers within its limits', () => {
    const actual = ['Monday', '19:00-AM'];
    const errorMessage = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours(...actual)).toThrow(errorMessage);
  });
  it('should throw the error message (The minutes must be between 0 and 59) if minutes does not have numbers within its limits', () => {
    const actual = ['Wednesday', '09:76-PM'];
    const errorMessage = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours(...actual)).toThrow(errorMessage);
  });
});
