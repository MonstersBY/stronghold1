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

import anime from 'animejs/lib/anime.es.js';

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
// $(document).scroll(function () {
//     console.log($(this).scrollTop());
//     if($(this).scrollTop() >= 1500) {
//         $('.monopolize').removeClass('not-show')
//     }
// });
$('.monopolize__exit').on("click", function (e) {
    $('.monopolize').css('display','none')
    setTimeout(()=> {
        $('.comprehensive').removeClass('not-show')
    }, 2000);
});
$('.comprehensive__exit').on("click", function (e) {
    $('.comprehensive').css('display','none')
});

class CategoryItem {
    constructor(el) {
        this.el = el;
        this.MyIndex = $(el).index() + 1;
        this.initEvents();
    }
    initEvents() {
        this.mouseenterFn = () => {
            this.mouseTimeout = setTimeout(() => {
                this.isActive = true;
                this.animate();
            }, 75);
        }
        this.mouseleaveFn = () => {
            clearTimeout(this.mouseTimeout);
            if( this.isActive ) {
                this.isActive = false;
                this.animate();
            }
        }
        this.el.addEventListener('mouseenter', this.mouseenterFn);
        this.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.el.addEventListener('touchstart', this.mouseenterFn);
        this.el.addEventListener('touchend', this.mouseleaveFn);
    }
    getAnimeObj() {
        const target = '.publications__item:nth-child('+ this.MyIndex + ') .publications__item_img svg path';
        let animeOpts = {
            targets: target,
            autoplay: true,
            easing: 'cubicBezier(0.250, 0.100, 0.250, 1.000)',
            duration: 300,
        };
        animeOpts.d = this.isActive
            ? 'M2.43031,52.25581C2.57162,22.34756 19.86136,2.8824 52.2557,2.43031L102.16923,2.61808C110.92632,2.70256 115.51981,2.70256 123.96613,2.61808L175.744,2.43032C210.00328,2.88241 225.4288,19.5506 225.57,52.25571L225.38213,102.48001C225.60832,109.99401 225.29754,118.31678 225.6929,126.14156L225.57,175.74401C225.4288,204.72014 205.96323,225.42881 175.744,225.57001L127.38464,225.07137C120.49218,225.29754 109.994,225.29755 100.92613,225.07136L52.2558,225.57001C20.48291,225.42881 2.88239,207.20633 2.4303,175.74401L2.92884,123.03382C3.01333,115.20905 3.01333,108.75092 2.92884,101.54769L2.43031,52.25581z'
            : 'M2.43031 52.2558C-6.75158 21.726 21.726 -6.75159 52.2557 2.4303L102.48 17.5352C109.994 19.7951 118.006 19.7951 125.52 17.5352L175.744 2.43031C206.274 -6.75158 234.752 21.726 225.57 52.2557L210.465 102.48C208.205 109.994 208.205 118.006 210.465 125.52L225.57 175.744C234.752 206.274 206.274 234.752 175.744 225.57L125.52 210.465C118.006 208.205 109.994 208.205 102.48 210.465L52.2558 225.57C21.726 234.752 -6.75159 206.274 2.4303 175.744L17.5352 125.52C19.7951 118.006 19.7951 109.994 17.5352 102.48L2.43031 52.2558Z';
        anime.remove(target);
        return animeOpts;
    }
    animate() {
        anime(this.getAnimeObj());
    }
}

const items = Array.from(document.querySelectorAll('.publications__item'));
const init = (() => items.forEach(item => new CategoryItem(item)))();