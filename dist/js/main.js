//DOM ELEMENTS
const header = document.getElementsByTagName('header')[0];
const menu = document.getElementsByClassName('menu-item');
const btnProyectos = document.getElementById('button-proyectos');
const btnEnviar = document.getElementById('enviar');
const menuMobile = document.getElementById('menu-mobile');
var sectionsCoordinates;
var lastScroll = 0;

//EVENTS
menu[0].addEventListener('click', () => window.scrollTo(0, sectionsCoordinates.home));
menu[1].addEventListener('click', () => window.scrollTo(0, sectionsCoordinates.proyectos));
menu[2].addEventListener('click', () => window.scrollTo(0, sectionsCoordinates.acerca));
menu[3].addEventListener('click', () => window.scrollTo(0, sectionsCoordinates.contacto));
btnProyectos.addEventListener('click', () => window.scrollTo(0, sectionsCoordinates.proyectos));

window.onload = () => {
    //GET SECTIONS COORDINATES
    sectionsCoordinates = {
        home: document.getElementById('home').offsetTop,
        proyectos: document.getElementById('proyectos').offsetTop,
        acerca: document.getElementById('acerca').offsetTop,
        contacto: document.getElementById('contacto').offsetTop
    }
}

menuMobile.onclick = () => {
    let menu = document.getElementsByClassName('menu')[0];
    if(menu.style.display == '' || menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
