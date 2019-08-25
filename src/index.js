function pegaEncode(event) {
  event.preventDefault();
  const texto = document.getElementById("textoParaCifrar").value;
  const offset = parseInt(document.getElementById("cifra").value);
  const textoCifrado = window.cipher.encode(offset, texto);
  document.getElementById("mostrarCifra").innerHTML = `<p> Sua mensagem codificada é: </p>${textoCifrado}`;
}

function pegaDecode(event) {
  event.preventDefault();
  const texto = document.getElementById("textoParaDecifrar").value;
  const offset = parseInt(document.getElementById("decifra").value);
  const textoCifrado = window.cipher.decode(offset, texto);
  document.getElementById("mostrarDecifra").innerHTML = `<p> Sua mensagem decodificada é: </p>${textoCifrado}`;
}

window.controlaFormulario = {
  pegaDecode: pegaDecode,
  pegaEncode: pegaEncode
};