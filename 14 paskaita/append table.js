var lentele = document.getElementById('table');

var prideti = document.getElementById('add');
var istrintiPirma = document.getElementById('remove-1');
var istrintiPaskutini = document.getElementById('remove-2');



prideti.addEventListener("click", pridetiNaujaIrasa);
istrintiPirma.addEventListener("click", istrintiPirmaIrasa);
istrintiPaskutini.addEventListener("click", istrintiPaskutiniIrasa);


function pridetiNaujaIrasa() {
  var vardas = document.getElementById('fname');
  var pavarde = document.getElementById('lname');
  var amzius = document.getElementById('age');

  if (vardas.value == null || vardas.value == "") {
    alert("Įveskite vardą");
    return false;
  }

  if (pavarde.value == null || pavarde.value == "") {
    alert("Įveskite pavardę");
    return false;
  }

  if (amzius.value == null || amzius.value == "") {
    alert("Įveskite amžių");
    return false;
  }

  if (amzius.value <= 0) {
    alert("Per mažas amžius");
    return false;
  }

  var tdElementVardas = document.createElement("td");
  tdElementVardas.innerText = vardas.value;  
  var tdElementPavarde = document.createElement("td");
  tdElementPavarde.innerText = pavarde.value;  
  var tdElementAmzius = document.createElement("td");
  tdElementAmzius.innerText = amzius.value;

  var trElement = document.createElement("tr");
  trElement.append(tdElementVardas);
  trElement.append(tdElementPavarde);
  trElement.append(tdElementAmzius);

  lentele.append(trElement);
  vardas.value = "";
  pavarde.value = "";
  amzius.value = "";
}

function istrintiPirmaIrasa() {
  lentele.firstElementChild.remove();
}

function istrintiPaskutiniIrasa() {
  lentele.lastElementChild.remove();
}
