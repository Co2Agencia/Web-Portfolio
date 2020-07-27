//nav-icon & Menu Animation:
var tl = gsap.timeline({duration:0.3})

tl.from('.palo2', {
    duration: 0.3,
    y: "0.6rem",
    width: 0
})
.from('.palo1', {
    duration: 0.5,
    y: "-0.6rem",
    width: 0
})


var tl2 = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"})

tl2.to('.palo2', {
    duration: 0.1,
    y: "0.6rem",
})
.to('.palo1', {
    duration: 0.2,
    y: "-0.6rem",
    transform: "rotate(90deg)"
})
.to('#nav-icon', {
    duration: 0.4,
    transform: "rotate(135deg)",
})
.to('.nav-icon-wrapper', {
    background: "rgb(255, 255, 255, 0.95)",
})
.from('.titles',{
    x: -100,
    opacity: 0,
    display:"none"
})
.to('titles',{
    display: "flex",
    position: "fixed"
})
.to('body', {
    overflow: "hidden",
})



//Service Titles Animation:
var serviciosTl = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"});

serviciosTl.to('.title', {
    opacity: 0,
})
.to('.title', {
    display: "none"
})
.to('.principalTitle',{
    padding: 0,
})
.to('#principalServicios',{
    opacity: 0,
})
.to('#principalServicios',{
    display: "none",
    duration: "200ms"
})
.from('#retrocederServicios',{
    opacity: 0,
    display: "block",
    duration: "200ms",
})
.to('#retrocederServicios',{
    opacity: 1,
    display: "block",
    duration: "200ms",
})
.to('#servicios',{
    display: "flex",
})
.from('#servicios li', {
    opacity:0,
    x: -100,
})


//Acción del boton serviciosBtn
document.getElementById('serviciosBtn').addEventListener('click', () => {
    serviciosTl.paused() ? serviciosTl.play() : serviciosTl.reversed() ? serviciosTl.play() : serviciosTl.reverse();
})




//Acción del boton icon-nav:
document.getElementById('nav-icon').addEventListener('click', () => {
    tl2.paused() ? tl2.play() : tl2.reversed() ? tl2.play() : tl2.reverse();
})

//Accion del boton icon-nav para volver el boton Service a su estado normal:
document.getElementById('nav-icon').addEventListener('click', () => {
    serviciosTl.paused() ? serviciosTl.pause(): serviciosTl.reverse();
})


