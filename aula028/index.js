//const tresHoras = 60 * 60 * 3 * 1000
//const umDia = 60 * 60 * 24 * 1000
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp Unix ou epoca Unix
//const data = new Date(2025, 3) // ano, mes, dia, hora, minuto, segundo, milisegundo
/* const data = new Date(1742235450587); // ISO 8601
console.log("Dia", data.getDate()); // 1-31
console.log("Mes", data.getMonth() + 1); // 0-11
console.log("Ano", data.getFullYear()); // 1970-2025
console.log("Hora", data.getHours()); // 0-23
console.log("Minutos", data.getMinutes()); // 0-59
console.log("Segundo", data.getSeconds()); // 0-59
console.log("Milisegundo", data.getMilliseconds()); // 0-999
console.log("Dia da semana", data.getDay()); // 0-6
console.log(data.toString()); // dia/mes/ano hora:minuto:segundo
console.log(Date.now());
 */
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const minuto = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`
}

const data = new Date()
const dataBrasil =  formataData(data)
console.log(dataBrasil)
