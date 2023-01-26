// Guardo informacion perteneciente a la clase 'loader'
const loader = document.getElementsByClassName("loader")[0];

// Tiempo para la desaparicion de la imágen de carga
const timeIn = 1000;
const timeOut = 1000; 

window.addEventListener("load",() =>{
    // Mensaje para corroborar la carga del contenido de la página
    console.log("La carga ha finalizado");
    
    setTimeout(() => {
        // FadeOut (Efecto de desaparecimiento de la imágen).
        loader.style.opacity = '0';
        loader.style.transition = 'all ' + timeOut + 'ms';
        setTimeout(() => {
            loader.style.display = 'none';
            // body.style.position = 'relative';
        }, timeOut);
    }, timeIn);
});
