/*
  Author: Arisson Lima
  Instagram: https://www.instagram.com/arissonlima
  Linkedin: https://www.linkedin.com/in/arissonlima
  Github: https://www.github.com/arissonlima
*/

var link = document.getElementById("lnk");
link.style.display = "none";

function gera() {
  var number = document.getElementById("number");
  var whatsapp = number.value;

  if (whatsapp.length == 0) {
    alert("[ERRO] Digite um número de WhatsApp para prosseguir!");
  } else {
    link.href = `https://api.whatsapp.com/send?phone=55${whatsapp}`;

    link.style.display = "block";

    number.value = "";
  }
}
