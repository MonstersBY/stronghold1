import $ from "jquery";

import "animate.css";
import WOW from "wow.js";

const wow = new WOW({
	boxClass: "wow",
	animateClass: "animate__animated",
	offset: 100,
	mobile: false,
	live: true,
});
wow.init();

import "./js/utils/jquery.mask";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/mousewheel";

import customSelect from 'custom-select';

import "./index.scss";
import "./js/components/header";
import "./js/pages/home";
import "./js/pages/knowledge_base_detail";
import { example } from "./js/utils/constants";
console.log(example);

$(document).ready(function () {
	if ($("input[type=tel]").length) {
		$("input[type=tel]").mask("+7(999) 999-99-99");
	}
    customSelect('select');
})