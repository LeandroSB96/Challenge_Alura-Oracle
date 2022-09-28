function encriptar() {
   var texto = document.getElementById("inputTexto").value.toLowerCase();

   var txtCifrado = texto.replace(/e/igm,"enter");
   var txtCifrado = txtCifrado.replace(/o/igm,"ober");
   var txtCifrado = txtCifrado.replace(/i/igm,"imes");
   var txtCifrado = txtCifrado.replace(/a/igm,"ai");
   var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

   document.getElementById("img-1").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto-2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}

// 'La letra "e" es convertida a "enter"'
// 'La letra "o" es convertida a "ober"'
// 'La letra "i" es convertida a "imes"'
// 'La letra "a" es convertida a "ai"'
// 'La letra "u" es convetida a "ufat"'

function desencriptar() {
   var texto = document.getElementById("inputTexto").value.toLowerCase();

   var txtCifrado = texto.replace(/enter/igm,"e");
   var txtCifrado = txtCifrado.replace(/ober/igm,"o");
   var txtCifrado = txtCifrado.replace(/imes/igm,"i");
   var txtCifrado = txtCifrado.replace(/ai/igm,"a");
   var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

   document.getElementById("img-1").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto-2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}

function copy() {
   var contenido = document.querySelector("#texto-2");
   contenido.select();
   Document.execCommand("copy");
   alert("¡Se copió!");
}


   
