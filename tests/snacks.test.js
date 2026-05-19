const { getInitials, createSlug } = require('../src/snacks');

describe('Snack 1 - getInitials', () => {
  // La funzione getInitials restituisce le iniziali di un nome completo.
  test('restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });
});

describe('Snack 2 - createSlug', () => {
  // La funzione createSlug restituisce una stringa in lowercase.
  test('restituisce una stringa in lowercase', () => {
    expect(createSlug('QUESTO E UN TEST')).toBe('questo e un test');
  });
});
