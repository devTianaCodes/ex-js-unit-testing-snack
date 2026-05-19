const { getInitials } = require('../src/snacks');

describe('Snack 1 - getInitials', () => {
  // La funzione getInitials restituisce le iniziali di un nome completo.
  test('restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });
});
