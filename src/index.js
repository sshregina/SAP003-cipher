document.getElementById("btnEncode").addEventListener("click", pegaEncode);
document.getElementById("btnDecode").addEventListener("click", pegaDecode);
document.getElementById("btnLimpar").addEventListener("click", limparFormulario);

const $texto = document.getElementById("textoParaCifrar");

function pegaEncode(event) {
  event.preventDefault();
  const texto = $texto.value;
  
  const offset = parseInt(document.getElementById("cifra").value);
  if (!Number.isInteger(offset)) {
    alert("Digite um número");
    return;
  }
  const textoCifrado = window.cipher.encode(offset, texto);
  $texto.value = textoCifrado;
  document.getElementById("texto").classList.add("invisivel");
  document.getElementById("textoCifrado").classList.remove("invisivel");
  document.getElementById("textoDecifrado").classList.add("invisivel");
}

function pegaDecode(event) {
  event.preventDefault();
  const texto = $texto.value;
  const offset = parseInt(document.getElementById("cifra").value);
  const textoCifrado = window.cipher.decode(offset, texto);
  $texto.value = textoCifrado;
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
