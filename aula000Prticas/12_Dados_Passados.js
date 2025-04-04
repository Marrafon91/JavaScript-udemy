function dados(tipos) {
  if (typeof tipos === "number") {
    return "Isto é um Numero";
  } else if (typeof tipos === "boolean") {
    return "Isto é um Boolean";
  } else typeof tipos === "string";
  {
    return "Isto é uma String";
  }
}

console.log(dados(56));
console.log(dados(true));
console.log(dados("Hello World"));
