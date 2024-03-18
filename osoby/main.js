
const userName = document.querySelector('#name')
const userCity = document.querySelector('#city')
const userAge = document.querySelector('#age')
const bnt = document.querySelector('#btn')
const form = document.querySelector('#form')
const list = document.querySelector('#list')




function update(){
    list.innerHTML=''
    userArr.forEach(element =>{
        const li = document.createElement('li')
        const btn = document.createElement('button')
        li.innerHTML = `<span><strong>${element.userName}</strong> W wieku <strong>${element.userAge}</strong> z <strong>${element.userCity} </strong></span>`;
        li.classList.add('list-group-item')
        btn.classList.add('btn', 'btn-outline-danger')
        btn.innerHTML = 'X';
        btn.addEventListener('click', function(){
            console.log(`a ${element.userID}`)
            removeUser(element.userID)
        })
        li.append(btn)
        list.append(li)
    
    });
}
update()

bnt.addEventListener('click', evt =>{
if (userName.value!=="" && userCity.value!=="" && userAge.value!=="") {
    

        let user = 
            {
                userID: crypto.randomUUID(),
                userName: userName.value,
                userCity: userCity.value,
                userAge: userAge.value,
            };
        
            userArr.unshift(user)
            list.innerHTML="";


            update()
        }else{
            alert("podaj prawidlowe dane");
        }
        
        
});


function removeUser(removeID) {
    userArr = userArr.filter(user=>user.userID !== removeID)
    
    update()
    
    console.log( userArr.filter(user=>user.userID !== removeID))
}





