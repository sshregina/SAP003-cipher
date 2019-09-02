document.getElementById("btnEncode").addEventListener("click", pegaEncode);
document.getElementById("btnDecode").addEventListener("click", pegaDecode);
document.getElementById("btnLimpar").addEventListener("click", limparFormulario);

function pegaEncode(event) {
  event.preventDefault();
  const texto = document.getElementById("textoParaCifrar").value;
  if (!texto) {
    alert("Digite um texto");
    return;
  }
  const offset = parseInt(document.getElementById("cifra").value);
  if (!offset) {
    alert("Digite um número");
    return;
  }
  const textoCifrado = window.cipher.encode(offset, texto);
  document.getElementById("textoParaCifrar").value = textoCifrado;
  document.getElementById("texto").classList.add("invisivel");
  document.getElementById("textoCifrado").classList.remove("invisivel");
  document.getElementById("textoDecifrado").classList.add("invisivel");
}

function pegaDecode(event) {
  event.preventDefault();
  const texto = document.getElementById("textoParaCifrar").value;
  if (!texto) {
    alert("Digite um texto");
    return;
  }
  const offset = parseInt(document.getElementById("cifra").value);
  if (!offset) {
    alert("Digite um número");
    return;
  }
  const textoCifrado = window.cipher.decode(offset, texto);
  document.getElementById("textoParaCifrar").value = textoCifrado;
  document.getElementById("texto").classList.add("invisivel");
  document.getElementById("textoCifrado").classList.add("invisivel");
  document.getElementById("textoDecifrado").classList.remove("invisivel");
}

function limparFormulario(event) {
  event.preventDefault();
  document.getElementById("textoParaCifrar").value = "";
  document.getElementById("cifra").value = "";
  document.getElementById("texto").classList.remove("invisivel");
  document.getElementById("textoCifrado").classList.add("invisivel");
  document.getElementById("textoDecifrado").classList.add("invisivel");
}
