const navLinksContainer = document.getElementsByClassName('nav-links')[0]
const menuBtn = document.getElementsByClassName('menu')[0]
const invisibleOverlay = document.getElementsByClassName('invisible-overlay')[0]
console.dir(invisibleOverlay)
let toggleClassList = () => {
    invisibleOverlay.classList.toggle('active')
    navLinksContainer.classList.toggle('active')  
}

let removeClass = () => {
    navLinksContainer.classList.remove('active')
    invisibleOverlay.classList.remove('active')   
}

menuBtn.addEventListener('click', toggleClassList)
invisibleOverlay.addEventListener('click', removeClass)
document.addEventListener('scroll', removeClass)
$(".nav-links").click(removeClass)