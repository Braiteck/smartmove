$(() => {
	// Истории успеха
	new Swiper('.history .swiper-container', {
		loop: true,
		speed: 750,
		watchSlidesVisibility: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		spaceBetween: 20,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletActiveClass: 'active'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		on: {
			init: () => {
				setTimeout(() => {
					let bulletsW = $('.history .swiper-pagination').width()

					$('.history .swiper-button-prev').css('margin-left', bulletsW / -2 - 80)
					$('.history .swiper-button-next').css('margin-right', bulletsW / -2 - 80)
				})
			}
		}
	})


	// Наши клиенты
	new Swiper('.clients .swiper-container', {
		loop: true,
		speed: 500,
		watchSlidesVisibility: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletActiveClass: 'active'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			0: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 4
			},
			1240: {
				slidesPerView: 5
			}
		}
	})


	// Нам доверяют
	new Swiper('.reviews .swiper-container', {
		loop: true,
		speed: 750,
		watchSlidesVisibility: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		spaceBetween: 20,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletActiveClass: 'active'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		on: {
			init: () => {
				setTimeout(() => {
					let bulletsW = $('.reviews .swiper-pagination').width()

					$('.reviews .swiper-button-prev').css('margin-left', bulletsW / -2 - 80)
					$('.reviews .swiper-button-next').css('margin-right', bulletsW / -2 - 80)
				})
			}
		}
	})


	// Аккордион
	$('body').on('click', '.accordion .item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.info').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.info').slideUp(300)

			$item.addClass('active').find('.info').slideDown(300)
		}
	})


	// Плавная прокрутка к якорю
	$('.scroll_link').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 0

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header .menu').toggleClass('show')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Подбираем профессиональный персонал
	$('.businesses_types .more .btn').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.businesses_types')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.item.hide').slideUp(500)
		} else {
			$(this).addClass('active')

			$parent.find('.item.hide').slideDown(500)
		}
	})


	// Фотогалерея
	$('.letters .wheelSlider-container').wheelSlider({
		controls: true,
		dots: true,
		items: 5
	})



	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


})


$(window).on('load', () => {
	// Пакеты
	new Swiper('.tariffs .swiper-container', {
		loop: false,
		speed: 500,
		watchSlidesVisibility: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletActiveClass: 'active'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			0: {
				spaceBetween: 20,
				slidesPerView: 1
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 3
			},
			1240: {
				spaceBetween: 30,
				slidesPerView: 3
			}
		},
		on: {
			init: () => {
				setTimeout(() => {
					setHeight($('.tariffs .tariff .name'))
					setHeight($('.tariffs .tariff .composition'))
					setHeight($('.tariffs .tariff .conditions'))
				})
			}
		}
	})
})