const menuToggle = document.querySelector('.men-toggle input')
const nav = document.querySelector('nav ul')
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})