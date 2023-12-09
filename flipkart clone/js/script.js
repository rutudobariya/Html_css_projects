const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-bar');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

function cart(){
    alert('This Is Only For Demo of Cart Page otherwise you cant see cart without login');
}