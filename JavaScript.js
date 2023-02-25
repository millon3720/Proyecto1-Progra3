function Pregunta()
{
  window.location.href="Pregunta1.html";
}
function Pregunta1()
{
  var Palabra="";
  for (var i = 1; i < 6; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="viaje") {
    window.location.href="Pregunta2.html";
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}
function Pregunta2()
{
  var Palabra="";
  for (var i = 1; i < 7; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="comida") {
    window.location.href="Pregunta3.html";
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }


}function Pregunta3()
{
  var Palabra="";
  for (var i = 1; i < 8; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="mascota") {
    window.location.href="Pregunta4.html";
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}function Pregunta4()
{
  var Palabra="";
  for (var i = 1; i < 9; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="deportes") {
    window.location.href="Pregunta5.html";
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}function Pregunta5()
{
  var Palabra="";
  for (var i = 1; i < 8; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="trabajo") {
    window.location.href="index.html";
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}
