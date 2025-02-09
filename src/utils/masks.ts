export const cpfMask = (value: string ) => value
  .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada;

export const DateMask = (value: string) => value
  .replace(/^(\d{2})(\d{2})(\d{4}).*$/, '$1/$2/$3'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada;

export const maskCelular = (value: string) => value
  .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');

export const maskTelefoneFixo = (value: string) => value
  .replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');

export const converterDataHora = (date: Date) => new Date(date).toLocaleString().substring(0, 19);
export const converterData = (date: Date) => new Date(date).toLocaleDateString();
export const converterHora = (date: Date) => new Date(date).toLocaleTimeString().toString().substring(0, 5);


export const isToday = (innerDate: Date) => {
  const date = new Date(innerDate);
  const today = new Date();
  return date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear();
};