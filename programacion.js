var programacionTl1 = gsap.timeline({duration:0.4, paused: true, ease: "power4.easeIn"})

programacionTl1.to('#pagina1', {
    display: "none",
    opacity: 0,
    duration: "300ms",
})
.to('.imagen-pagina-completa',{
    opacity: 0,
    x: -100,
    duration: "300ms",
})
.to('#pagina1', {
    display: "flex",
    opacity: 1,
})
.to('.imagen-pagina-completa',{
    opacity: 1,
    x: 0,
})

document.getElementById('boton-pagina1').addEventListener('click', () => {
    programacionTl1.paused() ? programacionTl1.play() : programacionTl1.reversed() ? programacionTl1.play() : programacionTl1.reverse();
})

document.getElementById('pagina1').addEventListener('click', () => {
    programacionTl1.paused() ? programacionTl1.play() : programacionTl1.reversed() ? programacionTl1.play() : programacionTl1.reverse();
})

//Boton para mobil:

document.getElementById('boton-pagina1-mobil').addEventListener('click', () => {
    programacionTl1.paused() ? programacionTl1.play() : programacionTl1.reversed() ? programacionTl1.play() : programacionTl1.reverse();
})



//Pagina 2

var programacionTl2 = gsap.timeline({duration:0.4, paused: true, ease: "power4.easeIn"})

programacionTl2.to('#pagina2', {
    display: "none",
    opacity: 0,
    duration: "300ms",
})
.to('.imagen-pagina-completa',{
    opacity: 0,
    x: -100,
    duration: "300ms",
})
.to('#pagina2', {
    display: "flex",
    opacity: 1,
})
.to('.imagen-pagina-completa',{
    opacity: 1,
    x: 0,
})

document.getElementById('boton-pagina2').addEventListener('click', () => {
    programacionTl2.paused() ? programacionTl2.play() : programacionTl2.reversed() ? programacionTl2.play() : programacionTl2.reverse();
})

document.getElementById('pagina2').addEventListener('click', () => {
    programacionTl2.paused() ? programacionTl2.play() : programacionTl2.reversed() ? programacionTl2.play() : programacionTl2.reverse();
})

//Boton para mobil:

document.getElementById('boton-pagina2-mobil').addEventListener('click', () => {
    programacionTl2.paused() ? programacionTl2.play() : programacionTl2.reversed() ? programacionTl2.play() : programacionTl2.reverse();
})
