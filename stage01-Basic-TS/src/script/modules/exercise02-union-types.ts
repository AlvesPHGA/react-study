function isNumberOrString(number: string | number) {
   if (typeof number === 'string') {
      return Number(number);
   } else if (typeof number === 'number') {
      return number;
   } else {
      throw 'Informção incorreta';
   }
}

export function handleNumber(value: string | number) {
   const number = value;
   console.log(isNumberOrString(number));
}
