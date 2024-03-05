
const textIngresar = document.querySelector(".texto-ingresar")
const textResultado = document.querySelector(".texto-resultado")

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  // Reemplazar la letra "e" por enter
  stringEncriptada = stringEncriptada.replaceAll(/e/g, "enter");
  // Reemplazar la letra "i" por imes
  stringEncriptada = stringEncriptada.replaceAll(/i/g, "imes");
  // Reemplazar la letra "a" por aicamara
  stringEncriptada = stringEncriptada.replaceAll(/a/g, "ai");
  // Reemplazar la letra "o" por ober
  stringEncriptada = stringEncriptada.replaceAll(/o/g, "ober");
  // Reemplazar la letra "u" por ufat
  stringEncriptada = stringEncriptada.replaceAll(/u/g, "ufat");
  // Devolver la cadena modificada
  return stringEncriptada;
}

function desEncriptar(stringDesencriptada) {
  // Reemplazar "ober" por la letra o
  stringDesencriptada = stringDesencriptada.replaceAll(/ober/g, "o");
  // Reemplazar "imes" por la letra i  
  stringDesencriptada = stringDesencriptada.replaceAll(/imes/g, "i");
  // Reemplazar "ai" por la letra a
  stringDesencriptada = stringDesencriptada.replaceAll(/ai/g, "a");
  // Reemplazar "enter" por la letra e
  stringDesencriptada = stringDesencriptada.replaceAll(/enter/g, "e");
  // Reemplazar "ufat" por la letra u
  stringDesencriptada = stringDesencriptada.replaceAll(/ufat/g, "u");
  // Devolver la cadena modificada
  return stringDesencriptada;
}

function validateInput(element) {
  // Utilizamos una expresión regular para verificar si el texto contiene solo letras minúsculas del alfabeto inglés
  element.value = element.value.toLowerCase().replace(/[^a-z]+/g, '');
}

function btnEncriptar() {
  const textoEncriptado = encriptar(textIngresar.value)
  textResultado.value = textoEncriptado;
  //si quieres que el texto ingresado se elimine al encriptar
  //textIngresar.value = "";
  textResultado.style.backgroundImage = "url('img/vaultboyconfused.png')"
}

function btnDesEncriptar() {
  const textoDesEncriptado = desEncriptar(textIngresar.value)
  textResultado.value = textoDesEncriptado;
  //si quieres que el texto ingresado se elimine al DesEncriptar
  //textIngresar.value = "";
  textResultado.style.backgroundImage = "url('img/vaultboyok.png')"
}

function btnCopiar() {
  // Get the text field
  const copyText = document.getElementById("txtarea");

  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}



