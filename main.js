const  inputName =  document.getElementById('name');
const  inputMail =  document.getElementById('email');
const  inputMgs =  document.querySelector('.msg');

document.querySelector('.btn').addEventListener('click', (el)=>{
        el.preventDefault();
        if(inputName.value === "" || inputMail === ''){
            inputMgs.innerText = ' Хоосон утга байна андаа';
            inputMgs.classList.add('error'); 
        }else{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${inputName.value} : ${inputMail.value}`));
            document.querySelector('#users').appendChild(li);
            // userList.appendChild(li);
        }
});
