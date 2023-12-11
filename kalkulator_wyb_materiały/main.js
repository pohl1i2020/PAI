const electoralName = document.querySelector("#electoralName");
const isCoalition = document.querySelector("#isCoalition");
const numberOfVotes = document.querySelector("#numberOfVotes");
const electoralList = document.querySelector("#electoralList");
const next = document.querySelector("#next");
const calc = document.querySelector("#calc");
const results = document.querySelector("#results");

const partie = [];

next.addEventListener("click", function (evt) {
  evt.preventDefault();

  const partia = {
    name: electoralName.value,
    isCoalition: isCoalition.checked ? 8 : 5,
    Votes: numberOfVotes.value,
  };
  partie.push(partia);

  const li = document.createElement("li");
  li.innerHTML = `<b>${partia.name}</b>, ${
    partia.isCoalition == 8 ? "jest koalicją" : "nie jest koalicją"
  }, ilość głosów: ${partia.Votes}`;
  electoralList.appendChild(li);
});
