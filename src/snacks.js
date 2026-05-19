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
function createSlug(title) {
  return title.toLowerCase().replaceAll(' ', '-');
}

// Snack 3
// Creare un test che verifichi la seguente descrizione:
// "La funzione average calcola la media aritmetica di un array di numeri."
function average(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);

  return sum / numbers.length;
}

module.exports = {
  getInitials,
  createSlug,
  average,
};
