export function normalizarTexto(text: string) {
   console.log(text.trim().toUpperCase());
}

const input = document.querySelector('input');
const resultCli = document.querySelector('p');

const totalLocalStorage = localStorage.getItem('number');

if (input && totalLocalStorage) {
   input.value = totalLocalStorage;
   calc(input.value);
}

function calc(numberInput: string) {
   const number = Number(numberInput);
   const result = number + 100 - number * 0.2;

   if (resultCli) resultCli.innerHTML = `${result}`;
}

export function handleKeyup() {
   if (input) {
      const numberInput = input.value;
      localStorage.setItem('number', numberInput);
      calc(numberInput);
   }
}

input?.addEventListener('keyup', () => handleKeyup());
