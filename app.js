const button = document.querySelector('#basic-addon2');
const input = document.querySelector('.form-control').value;





const valid_email = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(input == "" || input !== valid_email){
        alert('veillez saisir votre email ')
    }
})