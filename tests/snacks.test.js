const { getInitials, createSlug, average, isPalindrome } = require('../src/snacks');

describe('Snack 1 - getInitials', () => {
  // La funzione getInitials restituisce le iniziali di un nome completo.
  test('restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });
});

describe('Snack 2 - createSlug', () => {
  // La funzione createSlug restituisce una stringa in lowercase.
  test('restituisce una stringa in lowercase', () => {
    expect(createSlug('TEST')).toBe('test');
  });

  // La funzione createSlug sostituisce gli spazi con -.
  test('sostituisce gli spazi con -', () => {
    expect(createSlug('Questo e un test')).toBe('questo-e-un-test');
  });

  // La funzione createSlug lancia un errore se il titolo è vuoto o non valido.
  test('lancia un errore se il titolo è vuoto', () => {
    expect(() => createSlug('')).toThrow('Titolo non valido');
  });

  // La funzione createSlug lancia un errore se il titolo è vuoto o non valido.
  test('lancia un errore se il titolo non è valido', () => {
    expect(() => createSlug(null)).toThrow('Titolo non valido');
  });
});

describe('Snack 3 - average', () => {
  // La funzione average calcola la media aritmetica di un array di numeri.
  test('calcola la media aritmetica di un array di numeri', () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });
});

describe('Snack 5 - isPalindrome', () => {
  // La funzione isPalindrome verifica se una stringa è un palindromo.
  test('verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
});
