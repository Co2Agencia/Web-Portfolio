//Cuadros Explicativos:


//Cuadro 1
var cuadro1Tl = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"});

cuadro1Tl.to('.bullet-cuadros-contenedor', {
    display: "none",
    opacity: 0,
    duration: 0.2,
})
.to('.bullet-cuadros-contenedor', {
    display: "flex",
    opacity: 1,
    duration: 0.2
})
.to('.boton-cerrar-cuadro',{
    y: "25%",
    opacity: 0,
    duration: 0.3,
})
.to('.bullet-cuadro:nth-child(1)', {
    duration: 0.2,
    display: "none",
    opacity: 0,
    transform: "scale(0)",
    x: "-40%",
})
.to('.bullet-cuadro:nth-child(1)', {
    duration: 0.2,
    display: "block",
    transform: "scale(1)",
    opacity: 1,
    x: 0,
})
.to('.boton-cerrar-cuadro',{
    y: "0",
    opacity: 1,
    duration: 0.3,
})


//Bullet boton acción:
document.getElementById('bullet-1').addEventListener('click', () => {
    cuadro1Tl.paused() ? cuadro1Tl.play() : cuadro1Tl.reversed() ? cuadro1Tl.play() : cuadro1Tl.reverse();
})
//Boton Cerrar Acción:
document.getElementById('boton-cerrar-cuadro-1').addEventListener('click', () => {
    cuadro1Tl.paused() ? cuadro1Tl.play() : cuadro1Tl.reversed() ? cuadro1Tl.play() : cuadro1Tl.reverse();
})



//Cuadro 2
var cuadro2Tl = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"});

cuadro2Tl.to('.bullet-cuadros-contenedor', {
    display: "none",
    opacity: 0,
    duration: 0.1,
})
.to('.bullet-cuadros-contenedor', {
    display: "flex",
    opacity: 1,
    duration: 0.1
})
.to('.boton-cerrar-cuadro',{
    y: "25%",
    opacity: 0,
    duration: 0.3,
})
.to('.bullet-cuadro:nth-child(2)', {
    duration: 0.2,
    display: "none",
    opacity: 0,
    transform: "scale(0)",
    x: "-20%",
})
.to('.bullet-cuadro:nth-child(2)', {
    duration: 0.2,
    display: "block",
    transform: "scale(1)",
    opacity: 1,
    x: 0,
})
.to('.boton-cerrar-cuadro',{
    y: "0",
    opacity: 1,
    duration: 0.3,
})


//Bullet boton acción:
document.getElementById('bullet-2').addEventListener('click', () => {
    cuadro2Tl.paused() ? cuadro2Tl.play() : cuadro2Tl.reversed() ? cuadro2Tl.play() : cuadro2Tl.reverse();
})
//Boton Cerrar Acción:
document.getElementById('boton-cerrar-cuadro-2').addEventListener('click', () => {
    cuadro2Tl.paused() ? cuadro2Tl.play() : cuadro2Tl.reversed() ? cuadro2Tl.play() : cuadro2Tl.reverse();
})



//Cuadro 3
var cuadro3Tl = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"});

cuadro3Tl.to('.bullet-cuadros-contenedor', {
    display: "none",
    opacity: 0,
    duration: 0.1,
})
.to('.bullet-cuadros-contenedor', {
    display: "flex",
    opacity: 1,
    duration: 0.1
})
.to('.boton-cerrar-cuadro',{
    y: "25%",
    opacity: 0,
    duration: 0.3,
})
.to('.bullet-cuadro:nth-child(3)', {
    duration: 0.2,
    display: "none",
    opacity: 0,
    transform: "scale(0)",
    x: "0%",
})
.to('.bullet-cuadro:nth-child(3)', {
    duration: 0.2,
    display: "block",
    transform: "scale(1)",
    opacity: 1,
    x: 0,
})
.to('.boton-cerrar-cuadro',{
    y: "0",
    opacity: 1,
    duration: 0.3,
})


//Bullet boton acción:
document.getElementById('bullet-3').addEventListener('click', () => {
    cuadro3Tl.paused() ? cuadro3Tl.play() : cuadro3Tl.reversed() ? cuadro3Tl.play() : cuadro3Tl.reverse();
})
//Boton Cerrar Acción:
document.getElementById('boton-cerrar-cuadro-3').addEventListener('click', () => {
    cuadro3Tl.paused() ? cuadro3Tl.play() : cuadro3Tl.reversed() ? cuadro3Tl.play() : cuadro3Tl.reverse();
})



//Cuadro 4
var cuadro4Tl = gsap.timeline({duration:0.1, paused: true, ease: "power4.out"});

cuadro4Tl.to('.bullet-cuadros-contenedor', {
    display: "none",
    opacity: 0,
    duration: 0.1,
})
.to('.bullet-cuadros-contenedor', {
    display: "flex",
    opacity: 1,
    duration: 0.1
})
.to('.boton-cerrar-cuadro',{
    y: "25%",
    opacity: 0,
    duration: 0.3,
})
.to('.bullet-cuadro:nth-child(4)', {
    duration: 0.2,
    display: "none",
    opacity: 0,
    transform: "scale(0)",
    x: "30%",
})
.to('.bullet-cuadro:nth-child(4)', {
    duration: 0.2,
    display: "block",
    transform: "scale(1)",
    opacity: 1,
    x: 0,
})
.to('.boton-cerrar-cuadro',{
    y: "0",
    opacity: 1,
    duration: 0.3,
})


//Bullet boton acción:
document.getElementById('bullet-4').addEventListener('click', () => {
    cuadro4Tl.paused() ? cuadro4Tl.play() : cuadro4Tl.reversed() ? cuadro4Tl.play() : cuadro4Tl.reverse();
})
//Boton Cerrar Acción:
document.getElementById('boton-cerrar-cuadro-4').addEventListener('click', () => {
    cuadro4Tl.paused() ? cuadro4Tl.play() : cuadro4Tl.reversed() ? cuadro4Tl.play() : cuadro4Tl.reverse();
})