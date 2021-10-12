import calculateAge from './calculateAge';

describe('calculateAge should complete expected work', () => {
  test('returns expected value', () => {
    const now = new Date();
    expect(calculateAge(now)).toEqual(0);
  });
});
