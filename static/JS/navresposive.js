const menu = document.querySelector('.menu')
const navBar = document.querySelector('.navBar')
const ferme = document.querySelector('.navBar ul li:nth-child(1)')
const couvrir = document.querySelector('.couvrir')


menu.addEventListener('click',(e)=>{
    navBar.style.transform= "translateX(0)"
    couvrir.style.display= "block"
})
ferme.addEventListener('click',(e)=>{
    navBar.style.transform= "translateX(-100%)"
    couvrir.style.display= "none"
})
couvrir.addEventListener('click',(e)=>{
    navBar.style.transform= "translateX(-100%)"
    couvrir.style.display= "none"
})