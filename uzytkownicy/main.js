const addBtn = document.querySelector("#addUser");
const dane = document.querySelector("#dane");

addBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const userAge = document.querySelector(".userAge").value;
  const userName = document.querySelector(".userName").value;

  if (userAge > 0 && userName.length > 2) {
    const user = {
      userAge: userAge,
      userName: userName,
    };
    let tablica = [];
    tablica.push(user);

    tablica.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `Imię: ${element.userName}, Wiek: ${element.userAge}`;
      dane.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = `Podaj Prawidłowe dane`;
    dane.appendChild(li);
  }
});
