var display = document.getElementById('display');
var arkaPlandakiSayi = 0; // ikinci sayı
display.value = "";
var yapilacak_islem = "";
var calculated = 0;


function addition () {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  clearify();
  yapilacak_islem = "addition"
}

function substraction () {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  clearify();
  yapilacak_islem = "substraction"
}

function multiplication () {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  clearify();
  yapilacak_islem = "multiplication"
}

function division () {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  clearify();
  yapilacak_islem = "division"
}

function mod() {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  clearify();
  yapilacak_islem = "modular"
}

function percent () {
  arkaPlandakiSayi = parseFloat(display.value);
  console.log("tutulan sayı " + arkaPlandakiSayi);
  calculated= arkaPlandakiSayi * 0.01
  display.value = calculated.toString();
}

function dot () {
  console.log("fonksiyona girdim");
  var point = display.value.indexOf(".")
  console.log("nokta var mı baktım");

 if(point == -1) {
   console.log("nokta bulamadım");
   display.value += ".";
 }
}

function equalization() {
  console.log("arkaplan " + arkaPlandakiSayi);
  console.log("display " + display.value);
  console.log("son hesaplanan " + calculated);

  switch (yapilacak_islem) {
    case "addition":  calculated = parseFloat(display.value) + parseFloat(arkaPlandakiSayi);
                      console.log( "calculated: " + calculated);
                      display.value = calculated.toString();break;
    case "substraction":  calculated= arkaPlandakiSayi - parseFloat(display.value);
                          console.log( "calculated: " + calculated);
                          display.value = calculated.toString();break;
    case "multiplication":  calculated= parseFloat(display.value) * arkaPlandakiSayi;
                          console.log( "calculated: " + calculated);
                          display.value = calculated.toString();break;
    case "division": calculated= arkaPlandakiSayi / parseFloat(display.value);
                          console.log( "calculated: " + calculated);
                          display.value = calculated.toString();break;
                          if (display.value==0) {
                            calculated = Infinity;
                          }
    case "modular":  calculated= arkaPlandakiSayi % parseFloat(display.value);
                            console.log( "calculated: " + calculated);
                            display.value = calculated.toString();break;

    default:

  }
}

function clearify() {
display.value =" ";
calculated = 0;
}

function pressNumber(num) {
display.value += num.toString();
}

function pi() {
console.log("piye bastığını bilmiyodum vur beni")
display.value = Math.PI;
}
