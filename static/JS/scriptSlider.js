const img_slider = document.querySelectorAll('.img_slider')

let etape = 0

const nbr_img = img_slider.length

let precedent =document.querySelector('.precedent')
let suivant = document.querySelector('.suivant')

let enleverActiveImages = () =>{
    for(let i = 0; i < nbr_img; i++){
        img_slider[i].classList.remove('active')
    }
}

suivant.addEventListener('click', () =>{
    etape ++;
    if(etape >= nbr_img) {
        etape = 0
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active')
})

precedent.addEventListener('click',() =>{
    etape--
    if(etape < 0){
        etape = nbr_img -1
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active')
})

setInterval(() =>{
    etape ++;
    if(etape >= nbr_img) {
        etape = 0
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active') 
},3000)