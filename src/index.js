document.getElementById("botao").addEventListener("click", pegaEncode);
document.getElementById("botao1").addEventListener("click", pegaDecode);

function pegaEncode(event) {
  event.preventDefault();
  const texto = document.getElementById("textoParaCifrar").value;
  const offset = parseInt(document.getElementById("cifra").value);
  const textoCifrado = window.cipher.encode(offset, texto);
  document.getElementById("mostrarCifra").innerHTML = textoCifrado;
}

function pegaDecode(event) {
  event.preventDefault();
  const texto = document.getElementById("mostrarCifra").value;
  const offset = parseInt(document.getElementById("cifra").value);
  const textoCifrado = window.cipher.decode(offset, texto);
  document.getElementById("mostrarCifra").innerHTML = textoCifrado;
}
