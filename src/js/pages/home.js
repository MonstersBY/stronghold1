import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

import $ from "jquery";

const home = "home.js";

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + "px";
}

const results__swiper = new Swiper(".results__swiper", {
    modules: [Navigation],
    speed: 1500,
    slidesPerView: 1.9,
    loop: true,
    loopedSlides: 2,
    spaceBetween: `${remToPx(4.4)}rem`,
    navigation: {
        nextEl: ".results__swiper_next",
        prevEl: ".results__swiper_prev",
    },
    breakpoints: {
        769: {
            slidesPerView: 2.8,
            centeredSlides: true,
            spaceBetween: `${remToPx(2.8)}rem`,
        },
    },
});

$('.question__item').on("click", function (e) {
    $(this).toggleClass('active')
    $(this).find('.question__item_drop').slideToggle()
});