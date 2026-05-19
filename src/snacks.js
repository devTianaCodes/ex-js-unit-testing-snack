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

module.exports = {
  getInitials,
};
