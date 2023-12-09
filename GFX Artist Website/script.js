function scrollToContainer() {
  var container = document.getElementById("projects");
  container.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContainer1() {
  var container1 = document.getElementById("service");
  container1.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer2() {
  var container2 = document.getElementById("home");
  container2.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer3() {
  var container3 = document.getElementById("contact");
  container3.scrollIntoView({ behavior: 'smooth' });
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
})
function rem(){
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}
const home = document.querySelector('#nav-lab1').addEventListener('click', ()=>{
  rem();
})
const projects = document.querySelector('#nav-lab2').addEventListener('click', ()=>{
  rem();
})
const service = document.querySelector('#nav-lab3').addEventListener('click', ()=>{
  rem();
})
const contact = document.querySelector('#nav-lab4').addEventListener('click', ()=>{
  rem();
})

const thumbnail = document.querySelector('.thumbnails-images');

function opacity(){
  thumbnail.classList.toggle('high');
}