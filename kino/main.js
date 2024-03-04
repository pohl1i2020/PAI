const btns = document.querySelectorAll(".buttons")
const btnWygeneruj = document.querySelector("#wygeneruj");
const buttons = document.querySelector('.buttons');

btnWygeneruj.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const rows = document.querySelector("#row").value;
    const columns = document.querySelector("#column").value;

    if (rows>0 && columns>0) {
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div')
            row.style.display='flex'
            for (let j = 0; j < columns; j++) {
                const element = document.createElement('p');
                element.innerHTML = `${ i + 1 }  /  ${ j + 1 }` 
                row.appendChild(element);
                element.style.padding='1rem'
                element.style.margin='1rem'
                element.style.color='white'
                element.style.backgroundColor='black'
            }
            buttons.appendChild(row);
        }
        
    }
})