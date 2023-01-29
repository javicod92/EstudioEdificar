let sliderSection = document.getElementsByClassName("album_contenedorFotos");
const boton = document.getElementsByClassName('boton');
const totalSlider = (sliderSection.length - 1);

if (totalSlider){
    const slider = document.getElementById("album_contPpal"), btnLeft = document.getElementById("previous"), btnRight = document.getElementById("next");
    let sliderSectionLast = sliderSection[sliderSection.length - 1].cloneNode(true);
    slider.insertAdjacentElement("afterbegin", sliderSectionLast); 

    slider.style.width = (100 * sliderSection.length) + '%';
    slider.style.marginLeft = '-100%';

    const time_ms = 500;
    const time_s = time_ms / 1000;


    function Next() {
        let n = document.getElementsByClassName("album_contenedorFotos")[1].cloneNode(true);
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