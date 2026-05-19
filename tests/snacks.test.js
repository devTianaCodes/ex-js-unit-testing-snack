const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  posts,
  findPostById,
} = require('../src/snacks');

describe('JavaScript testing snacks', () => {
  describe('Snack 1 - getInitials', () => {
    // La funzione getInitials restituisce le iniziali di un nome completo.
    test('restituisce le iniziali di un nome completo', () => {
      expect(getInitials('Mario Rossi')).toBe('MR');
    });
  });

  describe('Snack 2, 4, 6 - createSlug', () => {
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

  describe('Snack 7 - posts e findPostById', () => {
    // La funzione findPostById restituisce il post corretto dato l'array di post e l'id.
    test('restituisce il post corretto dato l array di post e l id', () => {
      expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: 'Secondo post',
        slug: 'secondo-post',
      });
    });

    // Ogni post ha le proprietà id, title e slug.
    test('ogni post ha le proprietà id title e slug', () => {
      posts.forEach((post) => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('slug');
      });
    });

    // Viene passato un id numerico.
    test('l id passato è numerico', () => {
      const id = 2;

      expect(typeof id).toBe('number');
    });
  });
});
