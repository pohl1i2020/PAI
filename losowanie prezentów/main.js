const prezent = document.querySelector("#prezent");
const btnPrezent = document.querySelector("#addPrezent");
const user = document.querySelector("#user");
const btnRandom = document.querySelector("#randomPrezent");
const tekst = document.querySelector("#tekst");
// const tekstWylosowany = document.querySelector("#tekstWylosowany");

// console.log(prezent, btnPrezent, userName, btnRandom);
const prezenty = [];

btnPrezent.addEventListener("click", (evt) => {
  evt.preventDefault();
  const namePrezent = prezent.value;
  //   namePrezent.style.color = `rgb(22, 150, 80)`;
  if (namePrezent == "") {
    tekst.innerHTML = `wprowadź poprawną nazwę prezentu`;
  } else {
    prezenty.push(namePrezent);
    tekst.innerHTML = `dodałeś ${namePrezent} do listy prezentów`;
    console.log(prezenty);
  }
});

btnRandom.addEventListener("click", (evt) => {
  evt.preventDefault();
  const userName = user.value;
  if (userName == "") {
    tekst.innerHTML = `wpisz poprawne imię`;
  } else if (prezenty == "") {
    tekst.innerHTML = `brak prezentów`;
  } else {
    prezentLosowy = prezenty[Math.floor(Math.random() * prezenty.length)];
    tekst.innerHTML = `${userName} wylosowany dla ciebie prezent to: ${prezentLosowy}`;
  }
});
