document.getElementById("btn-encode").addEventListener("click", getEncode);
document.getElementById("btn-decode").addEventListener("click", getDecode);
document.getElementById("btn-clear").addEventListener("click", clearForm);

const text = document.getElementById("cipher-text");
const numb = document.getElementById("cipher");
const result = document.getElementById("text");

function getEncode(event) {
  event.preventDefault();
  const textToCipher = text.value;
  if (!textToCipher ) {
    alert("Digite um texto");
    return;
  }
  const offset = parseInt(numb.value);
  if (!offset) {
    alert("Digite um número");
    return;
  }
  const cipherText = window.cipher.encode(offset, textToCipher);
  text.value = cipherText;
  result.innerHTML = "Sua mensagem codificada é:";   
}

function getDecode(event) {
  event.preventDefault();
  const textToCipher = text.value;
  if (!textToCipher) {
    alert("Digite um texto");
    return;
  }
  const offset = parseInt(numb.value);
  if (!offset) {
    alert("Digite um número");
    return;
  }
  const cipherText = window.cipher.decode(offset, textToCipher);
  text.value = cipherText;
  result.innerHTML = "Sua mensagem decodificada é:";
}

function clearForm(event) {
  event.preventDefault();
  text.value = "";
  numb.value = "";
  result.innerHTML = "Digite a mensagem que deseja codificar ou decodificar:";
}
