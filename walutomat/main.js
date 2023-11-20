const iloscMonet = document.querySelector(`#iloscMonet`);
const przelicznikMonet = document.querySelector(`#przelicznikMonet`);
const iloscBanknot = document.querySelector(`#iloscBanknot`);
const przelicznikBanknot = document.querySelector(`#przelicznikBanknot`);
const wartoscBilonu = document.querySelector("#wartoscBilonu");
const wartoscBanknotu = document.querySelector("#wartoscBanknotu");
const btn = document.querySelector(`button`);
const wSumy = document.querySelector(`#wartoscSumy`);
let wynikBilonu = 0;
let wynikBanknotu = 0;
let suma = 0;
// const elementType = ["p"];

btn.addEventListener("click", function () {
  const iMonet = iloscMonet.value;
  const pMonet = przelicznikMonet.value;
  wynikBilonu = (iMonet * pMonet).toFixed(2);
  console.log(wynikBilonu);
  const element = document.createElement(`p`);
  element.innerHTML = `Wartość bilonu: ${wynikBilonu}`;
  element.style.color = "#80cb80";

  wartoscBilonu.appendChild(element);

  const iBanknotu = iloscBanknot.value;
  const pBanknotu = przelicznikBanknot.value;
  wynikBanknotu = (iBanknotu * pBanknotu).toFixed(2);
  console.log(wynikBanknotu);
  const element2 = document.createElement(`p`);
  element2.innerHTML = `Wartość Banknotu: ${wynikBanknotu}`;
  element2.style.color = "#80cb80";

  wartoscBanknotu.appendChild(element2);

  suma = (parseInt(wynikBanknotu) + parseInt(wynikBilonu)).toFixed(2);

  const element3 = document.createElement(`p`);
  element3.innerHTML = `Wartość Twoich środków: ${suma}`;
  element3.style.color = "#01ff00";

  wSumy.appendChild(element3);

  console.log(suma);
  //   wartoscBilonu.innerHTML += "wynik Bilonu";
});
