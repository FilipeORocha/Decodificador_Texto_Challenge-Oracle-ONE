var input = document.querySelector("#digite");
var inputExit = document.querySelector("#inputExit");

input.focus();

function criptografar() {
  document.getElementById("saidaTexto").style.backgroundImage = "none";

  document.getElementById("btn-copia").style.visibility = "visible";

  var texto_entrada = input.value;
  var resultado = [];

  if (texto_entrada == "") {
    document.getElementById("saidaTexto").style.backgroundImage =
      'url("mensagem.png"), url(procurando.svg")';

    document.getElementById("btn-copia").style.visibility = "hidden";
  }

  for (let i = 0; i < texto_entrada.length; i++) {
    var letra = "";

    if (texto_entrada[i] == "a") {
      letra = texto_entrada[i].replace("a", "ai");
      resultado.push(letra);
    } else if (texto_entrada[i] == "i") {
      letra = texto_entrada[i].replace("i", "imes");
      resultado.push(letra);
    } else if (texto_entrada[i] == "e") {
      letra = texto_entrada[i].replace("e", "enter");
      resultado.push(letra);
    } else if (texto_entrada[i] == "o") {
      letra = texto_entrada[i].replace("o", "ober");
      resultado.push(letra);
    } else if (texto_entrada[i] == "u") {
      letra = texto_entrada[i].replace("u", "ufat");
      resultado.push(letra);
    } else {
      letra = texto_entrada[i];
      resultado.push(letra);
    }
  }

  inputExit.innerText = resultado.join("");

  input.focus();
  input.value = "";
}

function descriptografar() {
  document.getElementById("saidaTexto").style.backgroundImage = "none";

  var texto_entrada = input.value;

  if (texto_entrada == "") {
    document.getElementById("saidaTexto").style.backgroundImage =
      'url("mensagem.png"), url("procurando.svg")';

    document.getElementById("btn-copia").style.visibility = "hidden";
  }

  if (texto_entrada.includes("enter")) {
    texto_entrada = texto_entrada.replace(/enter/g, "e");
  }

  if (texto_entrada.includes("ai")) {
    texto_entrada = texto_entrada.replace(/ai/g, "a");
  }

  if (texto_entrada.includes("imes")) {
    texto_entrada = texto_entrada.replace(/imes/g, "i");
  }

  if (texto_entrada.includes("ober")) {
    texto_entrada = texto_entrada.replace(/ober/g, "o");
  }

  if (texto_entrada.includes("ufat")) {
    texto_entrada = texto_entrada.replace(/ufat/g, "u");
  }

  inputExit.innerText = texto_entrada;

  if (texto_entrada != "") {
    document.getElementById("btn-copia").style.visibility = "visible";
  }

  input.focus();
  input.value = "";
}

function copia() {
  document.getElementById("btn-copia").style.visibility = "hidden";

  var output = document.getElementById("inputExit").innerHTML;

  navigator.clipboard.writeText(output);

  navigator.clipboard.readText().then((text) => {
    document.getElementById("inputExit").innerHTML = "Texto copiado!";
      //alert('Texto copiado');
  });

  output.value = "";
  input.focus();
}