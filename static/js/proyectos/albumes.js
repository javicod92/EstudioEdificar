const slider = document.getElementById("album_contPpal");
let sliderSection = document.getElementsByClassName("album_contenedorFotos"), sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.getElementById("previous"), btnRight = document.getElementById("next");
slider.insertAdjacentElement("afterbegin", sliderSectionLast); 

slider.style.width = (100 * sliderSection.length) + '%'

const time_ms = 500;
const time_s = time_ms / 1000;


function Next() {
    let n = document.getElementsByClassName("album_contenedorFotos")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all " + time_s + 's';
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", n);
        slider.style.marginLeft = "-100%"
    }, time_ms);
};

function previous() {
    let n = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0"; slider.style.transition = "all " + time_s + 's';
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", n);
        slider.style.marginLeft = "-100%"
    }, time_ms);
};

btnRight.addEventListener("click", Next);
btnLeft.addEventListener("click", previous);