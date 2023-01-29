// NEW CODE - IN USE
let sliderSection = document.getElementsByClassName("individual_container");
const boton = document.getElementsByClassName('boton');
const totalSlider = (sliderSection.length);

if (totalSlider >= 2){
    const slider = document.getElementById("total_container"), btnLeft = document.getElementById("previous"), btnRight = document.getElementById("next");
    let sliderSectionLast = sliderSection[sliderSection.length - 1].cloneNode(true);
    slider.insertAdjacentElement("afterbegin", sliderSectionLast); 

    slider.style.width = (100 * sliderSection.length) + '%';
    slider.style.marginLeft = '-100%';

    const time_ms = 500;
    const time_s = time_ms / 1000;


    function Next() {
        let n = sliderSection[1].cloneNode(true);
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all " + time_s + 's';
        setTimeout(function () {
            slider.style.transition = "none";
            sliderSection[0].remove();
            slider.insertAdjacentElement("beforeend", n);
            slider.style.marginLeft = "-100%";
        }, time_ms);
    };

    function previous() {
        let n = sliderSection[sliderSection.length - 2].cloneNode(true);
        slider.style.marginLeft = "0"; slider.style.transition = "all " + time_s + 's';
        setTimeout(function () {
            slider.style.transition = "none";
            sliderSection[sliderSection.length - 1].remove();
            slider.insertAdjacentElement("afterbegin", n);
            slider.style.marginLeft = "-100%";
        }, time_ms);
    };

    btnRight.addEventListener("click", Next);
    btnLeft.addEventListener("click", previous);
} else {
    for(i=0; i<boton.length; i++){
        boton[i].style.display = 'none';
    };
};




// OLD CODE - OUT OF USE
// const ava = document.getElementsByClassName('avanzar')[0];
// const ret = document.getElementsByClassName('retroceder')[0];
// const cant_fotos = document.getElementsByClassName('fotos_cont_img');

// Funciones para el avance de las fotografías - Carrousel ---------------------------------------------------- (Comentar y descomentar la que mejor funcione).

//Esta función para el cambio de fotos lo hago mediante un contador que indica el índice de la fotografia a quitar o poner en pantalla
// const cant = (cant_fotos.length - 1);
// cant_fotos[cant].classList.replace('inactive', 'active');

// let contador = 0;
// function avanzar(){
//     if (contador < cant){
//         cant_fotos[cant - contador].classList.replace('active', 'inactive');
//         cant_fotos[(cant - contador) - 1].classList.replace('inactive', 'active');
//         contador ++;
//     };
// };

// function retroceder(){
//     if (contador > 0){
//         cant_fotos[cant - contador].classList.replace('active', 'inactive');
//         cant_fotos[(cant - contador) + 1].classList.replace('inactive','active');
//         contador --;
//     };
// };

//Esta función en vez de usar un contador, identifico el índice del elemento que se está mostrando en pantalla para luego quitarlo o colocarlo.
//Creo que este método al tener un for lo hace que ocupe más recursos que el primero, por eso no lo uso.
// function obtenerActual(){
//     let actual = document.getElementsByClassName('fotos_cont_img');
//     for(i = 0; i < actual.length; i++){
//         if(actual[i].classList.contains('active')){
//             console.log(i)
//             return i;
//         }
//     }
// }

// function avanzar(){
//     indice = obtenerActual();
//     if (i > 0){
//         cant_fotos[i].classList.replace('active', 'inactive');
//         cant_fotos[i - 1].classList.replace('inactive', 'active');
//     };
// };

// function retroceder(){
//     indice = obtenerActual();
//     if (i < cant){
//         cant_fotos[i].classList.replace('active', 'inactive');
//         cant_fotos[i + 1].classList.replace('inactive','active');
//     };
// };

// ava.addEventListener('click', avanzar);
// ret.addEventListener('click', retroceder);