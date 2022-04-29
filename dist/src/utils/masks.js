"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isToday = exports.converterHora = exports.converterData = exports.converterDataHora = exports.maskTelefoneFixo = exports.maskCelular = exports.DateMask = exports.cpfMask = void 0;
const cpfMask = (value) => value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada;
exports.cpfMask = cpfMask;
const DateMask = (value) => value
    .replace(/^(\d{2})(\d{2})(\d{4}).*$/, '$1/$2/$3'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada;
exports.DateMask = DateMask;
const maskCelular = (value) => value
    .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
exports.maskCelular = maskCelular;
const maskTelefoneFixo = (value) => value
    .replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
exports.maskTelefoneFixo = maskTelefoneFixo;
const converterDataHora = (date) => new Date(date).toLocaleString().substring(0, 19);
exports.converterDataHora = converterDataHora;
const converterData = (date) => new Date(date).toLocaleDateString();
exports.converterData = converterData;
const converterHora = (date) => new Date(date).toLocaleTimeString().toString().substring(0, 5);
exports.converterHora = converterHora;
const isToday = (innerDate) => {
    const date = new Date(innerDate);
    const today = new Date();
    return date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear();
};
exports.isToday = isToday;
