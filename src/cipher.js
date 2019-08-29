
function encode(offset, string) {
  const palavra = [];
  for (let i=0;i<string.length;i++) {
    const codigo = string[i].charCodeAt(0);
    if (codigo >= 65 && codigo <= 90 ) {
      const numerador = ((codigo-65+26+(offset % 26))%26)+65;
      const letra = String.fromCharCode(numerador);
      palavra.push(letra);
    } else if (codigo >= 97 && codigo <= 122) {
      const numerador = ((codigo-97+26+(offset % 26))%26)+97;
      const letra = String.fromCharCode(numerador);
      palavra.push(letra);
    } else {
      palavra.push(string[i]);
    }
  }
  return palavra.join("");
}

function decode(offset, string) {
  return encode (-offset, string);
}

window.cipher = {
  encode: encode,
  decode: decode
};