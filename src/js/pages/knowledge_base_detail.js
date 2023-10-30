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
    Grid,
} from "swiper/modules";

import $ from "jquery";

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

const other_articles__swiper = new Swiper(".other-articles__swiper", {
    modules: [Navigation, Grid],
    speed: 1500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: `${remToPx(4)}rem`,
    navigation: {
        nextEl: ".other-articles__pagination_next",
        prevEl: ".other-articles__pagination_prev",
    },
    grid: {
        rows: 3,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: `${remToPx(2)}rem`,
            grid: {
                rows: 1,
            },
        },
    },
});

$('.monopolize__exit').on("click", function (e) {
    $('.monopolize').css('display','none')
    setTimeout(()=> {
        $('.comprehensive').removeClass('not-show')
    }, 2000);
});
$('.comprehensive__exit').on("click", function (e) {
    $('.comprehensive').css('display','none')
});