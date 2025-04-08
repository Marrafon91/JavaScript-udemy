function dez(caracteres) {
  if (caracteres.length >= 10) {
    return "Texto muito longo";
  } else (caracteres.length < 10); {
    return "Texto dentro do limite";
  }
  
}

console.log(dez("Guilherme Marrafon de Oliveira"));
console.log(dez("Alex"));
