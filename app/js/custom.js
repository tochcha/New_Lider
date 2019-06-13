$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

// Zoom gallery
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function (item) {
			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img');
		}
	}

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}); //fade-zoom

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}); //fade-slide

$('.test-popup-link').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	zoom: {
		enabled: false, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function (openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */



$(function () {
	/* placeholder*/
	$('input, textarea').each(function () {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function () {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	$('.button-nav').click(function () {
		$(this).toggleClass('active'),
			$('.main-nav-list').slideToggle();
		return false;
	});

	/* components */

	/* 
		FormStyler описание тут http://dimox.name/jquery-form-styler/ https://dimox.github.io/jQueryFormStyler/demo/ 
		плагин работает для всего, только стили  надо задавать (для селекта и инпут намбер их, например не видно)
	*/
	if ($('.styled').length) {
		$('.styled').styler();
	};

	/*
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/

	/* components */



});

/*var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		$('.header').hide();
	}

}*/


// слайдер (настройки тут http://kenwheeler.github.io/slick/)
if ($('.cat_slider').length) {
	$('.cat_slider').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="prev_arrow"><div></div></div>',
		nextArrow: '<div class="next_arrow"><div></div></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 100,
				settings: "unslick"
			}
		]
	});
};

// mmenu - меню по клику, выезжающее сбоку, сверху, снизу.... (описание тут http://mmenu.frebsite.nl/)
$("#my-menu").mmenu({
	extensions: [
		/*'fx-menu-slide',
		'fx-panels-zoom',*/
		'shadow-page',
		'shadow-panels',
		'listview-large',
		'pagedim-black'
	],
	"navbars": [{
		"position": "bottom",
		"content": [
			"searchfield"
		]
	}],
	navbar: {
		title: '<img src="img/logo.svg" alt="" />'
	},
	offCanvas: {
		position: 'right'
	},
	pageScroll: true,
	slidingSubmenus: true
});

//   Get the API
var api = $("#my-menu").data("mmenu");

//   Hook into methods
api.bind("open:finish", function () {
	$('.mm-opened .hamburger').addClass('is-active');
});
api.bind("close:finish", function () {
	$('.hamburger').removeClass('is-active');
});

// меняем стрелку на гамбургер при клике на область контента
/*$(".mm-slideout").click(function() {
	$('.mm-opened .hamburger').removeClass('is-active');
});*/



// плавная прокрутка вниз к якорю
/*$(".header nav ul li a").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});*/


// тень от меню при прокрутке страницы больше чем 355px (можно делать липкий хедер)
/*$(window).scroll(function () {
	if ($(this).scrollTop() > 355) {
		$('.sticky-holder').addClass('fixed');
	} else {
		$('.sticky-holder').removeClass('fixed');
	}
	if ($(this).scrollTop() > 255) {
		$('.sticky-holder').addClass('fup');
	} else {
		$('.sticky-holder').removeClass('fup');
	}
});*/

// подмена картинок для Retina дисплеев
/*if ('devicePixelRatio' in window && window.devicePixelRatio == 2) {
	var img_to_replace = jQuery('img.replace-2x').get();
	for (var i = 0, l = img_to_replace.length; i < l; i++) {
		var src = img_to_replace[i].src;
		src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.png.$1');
		img_to_replace[i].src = src;
	};
}*/

// открывающаяся навигация по клику
$(function () {
	$('#indikat ul').hide();
	$('#indikat li.current ul').show();
	$('#indikat li').has('ul').bind('click', function () {
		$('#indikat li').not(this).children('ul').slideUp(200); // если не надо скрывать подменю по клику на другое, то эту строку можно закомментировать
		$(this).children('ul').slideToggle(200);
		return false;
	});
});

// Если нужно свернуть/развернуть блок с заменой текста в кнопке
$(".js-toggle").toggle(function () {
	$(this).parents('.help').find('.hidden-block').slideDown();
	$(this).addClass("opened");
}, function () {
	$(this).parents('.help').find('.hidden-block').slideUp();
	$(this).removeClass("opened");
});

/* tabs*/
$('.tabs li a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});
/* tabs*/

// Если нужно при адаптации вырезать блок и вставит в другое место 
/*if ($(window).width() < 479) {
	$('.crop-block').detach().insertAfter($('.after-block'));
}*/

// открытие поиска на мобилках
$('.mobile_search').click(function () {
	$(this).toggleClass('active'),
	$('.header .search').toggleClass('active');
});

$('.visual__pages button').click(function() {
	$('.p_item').removeClass('active');
	$(this).parent().addClass('active');
	/*$(this).prepend('<span>0</span>');
	$('.p_item:not(.active) a').remove('<span>0</span>');*/
});

/*new WOW().init();*/


/*$(window).bind('load', handler);
$(window).bind('resize', handler);*/
