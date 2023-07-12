let standLennart = 0;
let standDana = 0;

function addLennart () {
  standLennart += 1;
  document.getElementById("result-lennart").textContent = standLennart;
}

function addDana () {
  standDana += 1;
  document.getElementById("result-dana").textContent = standDana;
}

function deleteLennart () {
  standLennart -=1;
  document.getElementById("result-lennart").textContent = standLennart;
}

function deleteDana () {
  standDana -= 1;
  document.getElementById("result-dana").textContent = standDana;
}