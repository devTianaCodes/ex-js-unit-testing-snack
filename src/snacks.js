// Snack 1
// Creare un test che verifichi la seguente descrizione:
// "La funzione getInitials restituisce le iniziali di un nome completo."
function getInitials(fullName) {
  return fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

// Snack 2
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug restituisce una stringa in lowercase."
// Snack 4
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug sostituisce gli spazi con -."
// Esempio: createSlug("Questo è un test") -> "questo-e-un-test"
// Snack 6
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
function createSlug(title) {
  if (!title || typeof title !== 'string') {
    throw new Error('Titolo non valido');
  }

  return title.toLowerCase().replaceAll(' ', '-');
}

// Snack 3
// Creare un test che verifichi la seguente descrizione:
// "La funzione average calcola la media aritmetica di un array di numeri."
function average(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);

  return sum / numbers.length;
}

// Snack 5
// Creare un test che verifichi la seguente descrizione:
// "La funzione isPalindrome verifica se una stringa è un palindromo."
// Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale
// sia da sinistra a destra che da destra a sinistra.

function isPalindrome(word) {
  const letters = [];

  for (let i = 0; i < word.length; i++) {
    letters.unshift(word[i]);
  }

  const reversedWord = letters.join('');

  return word === reversedWord;
}

// function isPalindrome(word) {
//   const reversedWord = word.split('').reverse().join('');
//
//   return word === reversedWord;
// }

// Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi la seguente descrizione:
// "La funzione findPostById restituisce il post corretto dato l'array di post e l'id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme
// (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
const posts = [
  {
    id: 1,
    title: 'Primo post',
    slug: 'primo-post',
  },
  {
    id: 2,
    title: 'Secondo post',
    slug: 'secondo-post',
  },
  {
    id: 3,
    title: 'Terzo post',
    slug: 'terzo-post',
  },
];

function findPostById(postsList, id) {
  return postsList.find((post) => post.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  posts,
  findPostById,
};
