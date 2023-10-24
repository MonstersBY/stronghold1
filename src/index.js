import $ from "jquery";

import "./js/utils/jquery.mask";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/mousewheel";

import customSelect from 'custom-select';

import "./index.scss";
import "./js/pages/home";
import "./js/components/header";
import { example } from "./js/utils/constants";
console.log(example);

$(document).ready(function () {
	if ($("input[type=tel]").length) {
		$("input[type=tel]").mask("+7(999) 999-99-99");
	}
    customSelect('select');
})