const numbers = Array.from(document.querySelectorAll('.input-num__list')).map(el => parseInt(el.textContent));
const highestNumber = Math.max(...numbers);

console.log(highestNumber, '.highest-number__text');