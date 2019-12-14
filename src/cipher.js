
function encode(offset, string) {
  let palavra = "";
  for (const value of string) {
    const code = value.charCodeAt(0);
    const upperCase = code >= 65 && code <= 90;
    const lowerCase = code >= 97 && code <= 122;
    const numb = code >= 48 && code <= 57;
    if (upperCase) {
      palavra += String.fromCharCode(((code-65+26+(offset % 26))%26)+65);
    } else if (lowerCase) {
      palavra += String.fromCharCode(((code-97+26+(offset % 26))%26)+97);
    } else if (numb) {
      palavra += String.fromCharCode(((code-48+10+(offset % 10))%10)+48);
    } else {
      palavra += value;
    }
  }
  return palavra;
}

function decode(offset, string) {
  return encode (-offset, string);
}

window.cipher = {
  encode,
  decode
};