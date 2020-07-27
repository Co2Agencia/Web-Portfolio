//Contacto Botones:

var contactoTitulosMail = gsap.timeline({duration:0.4, paused: true, ease: "power4.easeIn"})

contactoTitulosMail.to('#mail-btn', {
    x: "4.5rem",
    background: "white",
    color: "black",
})
.to('.mail-contenedor svg', {
    display: "block",
    opacity: 1,
})


document.getElementById('mail-btn').addEventListener('click', () => {
    contactoTitulosMail.paused() ? contactoTitulosMail.play() : contactoTitulosMail.reversed() ? contactoTitulosMail.play() : contactoTitulosMail.reverse();
})



var contactoTitulosTelefono = gsap.timeline({duration:0.4, paused: true, ease: "power4.easeIn"})

contactoTitulosTelefono.to('#telefono-btn', {
    x: "4.5rem",
    background: "white",
    color: "black",
})
.to('.telefono-contenedor svg', {
    display: "block",
    opacity: 1,
})


document.getElementById('telefono-btn').addEventListener('click', () => {
    contactoTitulosTelefono.paused() ? contactoTitulosTelefono.play() : contactoTitulosTelefono.reversed() ? contactoTitulosTelefono.play() : contactoTitulosTelefono.reverse();
})



var contactoTitulosRedes = gsap.timeline({duration:0.4, paused: true, ease: "power4.easeIn"})

contactoTitulosRedes.to('#redes-btn', {
    x: "4.5vw",
    background: "white",
    color: "black",
})
.to('.redes-contenedor svg', {
    display: "block",
    opacity: 1,
})


document.getElementById('redes-btn').addEventListener('click', () => {
    contactoTitulosRedes.paused() ? contactoTitulosRedes.play() : contactoTitulosRedes.reversed() ? contactoTitulosRedes.play() : contactoTitulosRedes.reverse();
})

//Acción del boton para volver al resto de los botones a default:
document.getElementById('mail-btn').addEventListener('click', () => {
    contactoTitulosRedes.paused() ? contactoTitulosRedes.pause(): contactoTitulosRedes.reverse();
    contactoTitulosTelefono.paused() ? contactoTitulosTelefono.pause(): contactoTitulosTelefono.reverse();
})

document.getElementById('redes-btn').addEventListener('click', () => {
    contactoTitulosMail.paused() ? contactoTitulosMail.pause(): contactoTitulosMail.reverse();
    contactoTitulosTelefono.paused() ? contactoTitulosTelefono.pause(): contactoTitulosTelefono.reverse();
})

document.getElementById('telefono-btn').addEventListener('click', () => {
    contactoTitulosMail.paused() ? contactoTitulosMail.pause(): contactoTitulosMail.reverse();
    contactoTitulosRedes.paused() ? contactoTitulosRedes.pause(): contactoTitulosRedes.reverse();
})


//Cuando se toca afuera de los botones vuelve a default:
document.getElementsByClassName('inicio-contenedor').addEventListener('click', () => {
    contactoTitulosRedes.paused() ? contactoTitulosRedes.play() : contactoTitulosRedes.reversed() ? contactoTitulosRedes.play() : contactoTitulosRedes.reverse();
})

//Fin Contacto Botones:






