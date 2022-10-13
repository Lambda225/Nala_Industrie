const section1 = document.getElementById('Intro')
const section2 = document.getElementById('Partie1')
const section3 = document.getElementById('Partie2')
const onglet = document.querySelectorAll('.barnav ul li a')


let offset = window.scrollY;


if(offset >= (section1.clientHeight - 150) && offset < (section1.clientHeight * 2 - 150)){
    onglet.forEach((elmt) =>{
        elmt.classList.remove('active')
    })
    onglet[1].classList.add('active')
}else if(offset >= (section1.clientHeight * 2 - 150)){
    onglet.forEach((elmt) =>{
        elmt.classList.remove('active')
    })
    onglet[2].classList.add('active')
}else{
    onglet.forEach((elmt) =>{
        elmt.classList.remove('active')
    })
    onglet[0].classList.add('active')
}


window.addEventListener('scroll',(e)=>{
    offset = window.scrollY;
    section1.style.backgroundPositionY = offset * 0.4 + 'px'
    section2.style.backgroundPositionY = (offset - section2.clientHeight) * 0.4 + 'px'
    if(offset >= (section1.clientHeight - 150) && offset < (section1.clientHeight * 2 - 150)){
        onglet.forEach((elmt) =>{
            elmt.classList.remove('active')
        })
        onglet[1].classList.add('active')
    }else if(offset >= (section1.clientHeight * 2 - 150)){
        onglet.forEach((elmt) =>{
            elmt.classList.remove('active')
        })
        onglet[2].classList.add('active')
    }else{
        onglet.forEach((elmt) =>{
            elmt.classList.remove('active')
        })
        onglet[0].classList.add('active')
    }
})