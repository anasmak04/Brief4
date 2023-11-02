const button = document.querySelector('#basic-addon2');
const input = document.querySelector('.form-control').value;
const error = document.getElementById('#error');




const valid_email = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(input == "" || input !== valid_email){
        error.style.display = 'block';
    }
})


const scrollToTopButton = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
