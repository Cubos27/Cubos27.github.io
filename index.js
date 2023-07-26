function changeLanguage(){
    let title = document.querySelector('h1')
    let subtitle = document.querySelector('h2')
    let myRouteText = document.getElementById('myRoute-text')
    let mathleText = document.getElementById('mathle-text')
    let mathleImage = document.getElementById('subtitle2')
    let myRouteImage = document.getElementById('subtitle3')
    let contact = document.getElementById('contact')
    let wid = document.getElementById('wid')
    if(spanishSelected){
        //it changes to english
        spanishSelected = false

        contact.innerHTML = 'Contact me'

        btnLanguage.innerHTML = 'Español'
        title.innerHTML = 'Welcome'
        subtitle.innerHTML = "Hey, I'm Adriel Andrade, web designer and I'm ready to make your new amazing wesite"

        mathleText.innerHTML = "A project made to help you to learn maths, it has a system of register and log in and some activities like a rush or read activities sadly, it's not finished yet"
        myRouteText.innerHTML = "An aplication made to help you finding any bus or train routes so you can get to your destination"

        mathleImage.innerHTML = 'Mathle images'
        myRouteImage.innerHTML = 'MyRoute images'

        wid.innerHTML = 'I made big part of all mathle front-end and I worked with its SQLite data base in Django'
    }else{
        //it changes to spanish
        spanishSelected = true

        contact.innerHTML = 'Contáctame'

        btnLanguage.innerHTML = 'English'
        title.innerHTML = 'Bienvenido'
        subtitle.innerHTML = 'Hola, soy Adriel Andrade, diseñador de paginas web y programador, y estoy preparado para hacer tu nuevo sitio web'

        mathleText.innerHTML = 'Mathle es una pagina para ayudar al aprendizaje de matematicas, tiene sistema de inicio de sesion y registro, tristemente no esta terminada aun'
        myRouteText.innerHTML = 'Una aplicacion hecha para ayudarte a encontrar cualquier ruta de tren o camion para que puedas llegar a tu destino'

        mathleImage.innerHTML = 'Imagenes de Mathle'
        myRouteImage.innerHTML = 'Imagenes de MyRoute'

        wid.innerHTML = 'Hice gran parte del front-end de mathle y trabaje con su base de datos SQLite en Django'
    }
}

function showWelcome() {
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('skills-div').style.display = 'flex';
    btnHome.innerHTML = ''
    btnHome.style.height = '2.2vh'
    btnHome.style.width = '1vw'
}
function hideWelcome() {
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('skills-div').style.display = 'none';
    btnHome.innerHTML = 'Home'
    btnHome.style.height = 'auto'
    btnHome.style.width = 'auto'
}

function showMathle() {
    document.getElementById('mathle').style.display = 'block';
    document.getElementById('mathle-photos').style.display = 'block';
    btnMathle.innerHTML = ''
    btnMathle.style.height = '2.2vh'
    btnMathle.style.width = '1vw'
}
function hideMathle() {
    document.getElementById('mathle').style.display = 'none'
    document.getElementById('mathle-photos').style.display = 'none';
    btnMathle.innerHTML = 'Mathle'
    btnMathle.style.height = 'auto'
    btnMathle.style.width = 'auto'
}

function showMyRoute() {
    document.getElementById('myRoute').style.display = 'block';
    document.getElementById('myRoute-photos').style.display = 'block'
    btnMyRoute.innerHTML = ''
    btnMyRoute.style.height = '2.2vh'
    btnMyRoute.style.width = '1vw'
}
function hideMyRoute() {
    document.getElementById('myRoute').style.display = 'none'
    document.getElementById('myRoute-photos').style.display = 'none'
    btnMyRoute.innerHTML = 'My Route'
    btnMyRoute.style.height = 'auto'
    btnMyRoute.style.width = 'auto'
}

const btnHome = document.getElementById('btnTitle');
const btnMathle = document.getElementById('btnMathle')
const btnMyRoute = document.getElementById('btnMyRoute')
const btnLanguage = document.getElementById('btnLanguage')

btnHome.addEventListener('click', showWelcome)
btnHome.addEventListener('click', hideMathle)
btnHome.addEventListener('click', hideMyRoute)

btnMathle.addEventListener('click', showMathle)
btnMathle.addEventListener('click', hideMyRoute)
btnMathle.addEventListener('click', hideWelcome)

btnMyRoute.addEventListener('click', showMyRoute)
btnMyRoute.addEventListener('click', hideMathle)
btnMyRoute.addEventListener('click', hideWelcome)

btnLanguage.addEventListener('click', changeLanguage)

let spanishSelected = false

showWelcome()