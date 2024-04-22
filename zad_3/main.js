const btnReset = document.querySelector("#resetbtn");
const btnSubmit = document.querySelector("#submitbtn");
const namee = document.querySelector("#namee");
const surname = document.querySelector("#surname");
const adress = document.querySelector("#adress");
const lista = document.querySelector("#usersList");

const users = [];

function clearInputs() {
  namee.value = "";
  surname.value = "";
  adress.value = "";
}

function zrobZDuzej(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

btnReset.addEventListener("click", function (evt) {
  clearInputs();
});

btnSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (namee.value == "" || surname.value == "" || adress.value == "") {
    alert("Podaj prawidłowe dane");
  } else {
    const user = {
      imie: zrobZDuzej(namee.value),
      naziwsko: zrobZDuzej(surname.value),
      adres: zrobZDuzej(adress.value),
    };
    users.push(user);

    const p = document.createElement("p");
    p.innerHTML = `imię: ${user.imie} nazwisko: ${user.naziwsko} adres: ${user.adres}`;
    lista.appendChild(p);
    clearInputs();
  }
});
