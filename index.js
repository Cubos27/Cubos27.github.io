function changeLanguage(){
    let title = document.querySelector('h1')
    let subtitle = document.querySelector('h2')
    let myRouteText = document.getElementById('myRoute-text')
    let mathleText = document.getElementById('mathle-text')
    let mathleImage = document.getElementById('subtitle2')
    let myRouteImage = document.getElementById('subtitle3')
    let contact = document.getElementById('contact')
    let wid = document.getElementById('wid')
    let myrouteWid1 = document.getElementById('myroute-wid1')
    let myrouteWid2 = document.getElementById('myroute-wid2')
    let skills = document.getElementById('h3-skills')
    let prog = document.getElementById('prog')
    let desi = document.getElementById('desi')
    if(spanishSelected){
        //it changes to english
        spanishSelected = false

        contact.innerHTML = 'Contact me'

        btnLanguage.innerHTML = 'Español'
        title.innerHTML = 'Welcome'
        subtitle.innerHTML = "Hey, I'm Adriel Andrade, web designer and I'm ready to make your new amazing wesite"

        mathleText.innerHTML = "A project I worked on made to help you to learn maths, it has a system of register and log in and some activities like a rush or read activities sadly, it's not finished yet"
        myRouteText.innerHTML = "An app I worked on made to help you finding any bus or train routes so you can get to your destination"

        mathleImage.innerHTML = 'Mathle images'
        myRouteImage.innerHTML = 'MyRoute images'

        wid.innerHTML = 'I made big part of all mathle front-end and I worked with its SQLite data base in Django'
        myrouteWid1.innerHTML = 'I made all My Route front-end and some parts of its back-end'
        myrouteWid2.innerHTML = 'I worked with Android Studio and with an SQLite data base'

        skills.innerHTML = 'Skills'

        prog.innerHTML = 'Programming'
        desi.innerHTML = 'Design and audio'
    }else{
        //it changes to spanish
        spanishSelected = true

        contact.innerHTML = 'Contáctame'

        btnLanguage.innerHTML = 'English'
        title.innerHTML = 'Bienvenido'
        subtitle.innerHTML = 'Hola, soy Adriel Andrade, diseñador de paginas web y programador, y estoy preparado para hacer tu nuevo sitio web'

        mathleText.innerHTML = 'Mathle es una pagina web en la que trabaje, fue hecha para ayudar al aprendizaje de matematicas, tiene sistema de inicio de sesion y registro, tristemente no esta terminada aun'
        myRouteText.innerHTML = 'Una aplicacion en la que trabaje hecha para ayudarte a encontrar cualquier ruta de tren o camion para que puedas llegar a tu destino'

        mathleImage.innerHTML = 'Imagenes de Mathle'
        myRouteImage.innerHTML = 'Imagenes de MyRoute'

        wid.innerHTML = 'Hice gran parte del front-end de mathle y trabaje con su base de datos SQLite en Django'
        myrouteWid1.innerHTML = 'Realice todo el front-end y algunas partes de su back-end'
        myrouteWid2.innerHTML = 'Trabaje con Android Studio y con una base de datos SQLite'

        skills.innerHTML = 'Habilidades'

        prog.innerHTML = 'Programacion'
        desi.innerHTML = 'diseño y audio'
    }
}

function ShowWelcome() {
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('skills-div').style.display = 'flex';
    document.getElementById('h3-skills').style.display = 'block';
    btnHome.innerHTML = ''
    btnHome.style.height = '2.2vh'
    btnHome.style.width = '1vw'
}
function HideWelcome() {
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('skills-div').style.display = 'none';
    document.getElementById('h3-skills').style.display = 'none';
    btnHome.innerHTML = 'Home'
    btnHome.style.height = 'auto'
    btnHome.style.width = 'auto'
}

function ShowMathle() {
    document.getElementById('mathle').style.display = 'block';
    document.getElementById('mathle-photos').style.display = 'block';
    btnMathle.innerHTML = ''
    btnMathle.style.height = '2.2vh'
    btnMathle.style.width = '1vw'
}
function HideMathle() {
    document.getElementById('mathle').style.display = 'none'
    document.getElementById('mathle-photos').style.display = 'none';
    btnMathle.innerHTML = 'Mathle'
    btnMathle.style.height = 'auto'
    btnMathle.style.width = 'auto'
}

function ShowMyRoute() {
    document.getElementById('myRoute').style.display = 'block';
    document.getElementById('myRoute-photos').style.display = 'block'
    btnMyRoute.innerHTML = ''
    btnMyRoute.style.height = '2.2vh'
    btnMyRoute.style.width = '1vw'
}
function HideMyRoute() {
    document.getElementById('myRoute').style.display = 'none'
    document.getElementById('myRoute-photos').style.display = 'none'
    btnMyRoute.innerHTML = 'My Route'
    btnMyRoute.style.height = 'auto'
    btnMyRoute.style.width = 'auto'
}

function Contact(){
    let mail = document.getElementById('mail')
    let git = document.getElementById('git')
    let whats = document.getElementById('whats')
    let number = document.getElementById('number')

    mail.classList.add('bi-animation')
    git.classList.add('bi-animation')
    whats.classList.add('bi-animation')
    number.classList.add('bi-animation')
}

function ContactRemove(){
    let mail = document.getElementById('mail')
    let git = document.getElementById('git')
    let whats = document.getElementById('whats')
    let number = document.getElementById('number')

    mail.classList.remove('bi-animation')
    git.classList.remove('bi-animation')
    whats.classList.remove('bi-animation')
    number.classList.remove('bi-animation')
}

setInterval(ContactRemove, 2500)

const btnHome = document.getElementById('btnTitle');
const btnMathle = document.getElementById('btnMathle')
const btnMyRoute = document.getElementById('btnMyRoute')
const contactbtn = document.getElementById('contact')
const btnLanguage = document.getElementById('btnLanguage')

btnHome.addEventListener('click', ShowWelcome)
btnHome.addEventListener('click', HideMathle)
btnHome.addEventListener('click', HideMyRoute)

btnMathle.addEventListener('click', ShowMathle)
btnMathle.addEventListener('click', HideMyRoute)
btnMathle.addEventListener('click', HideWelcome)

btnMyRoute.addEventListener('click', ShowMyRoute)
btnMyRoute.addEventListener('click', HideMathle)
btnMyRoute.addEventListener('click', HideWelcome)

contactbtn.addEventListener('click', Contact)

btnLanguage.addEventListener('click', changeLanguage)

let spanishSelected = false

ShowWelcome()