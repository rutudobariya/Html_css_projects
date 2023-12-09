let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')
})

function remove(){
    menu.classList.remove('active');
}