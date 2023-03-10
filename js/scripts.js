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


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}
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


	// Мы возьмём на себя
	offsetStart = $('.we_take_over .item.first .image').offset().top - ($(window).height() / 2) + $('.we_take_over .image').outerHeight() / 2
	offsetFinish = $('.we_take_over').offset().top + $('.we_take_over').outerHeight() - ($(window).height() / 2) - $('.we_take_over .item.first .image').outerHeight() / 2


	inView.offset($('.we_take_over .item').outerHeight())

	if ($('.we_take_over .item').length) {
		inView('.we_take_over .item')
			.on('enter', el => {
				let currentIndex = $(el).index()

				if ($('.we_take_over .item.first .image img').eq(currentIndex).css('display') != 'block') {
					$('.we_take_over .item.first .image img').hide()
					$('.we_take_over .item.first .image img').eq(currentIndex).fadeIn(300)

					$('.we_take_over .anchors .btn').removeClass('active')
					$('.we_take_over .anchors .btn').eq(currentIndex).addClass('active')
				}
			})
	}


	// Кастомный select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => NiceSelect.bind(el))
	}


	// Калькулятор
	var costPerMonth = $('.calc #cost_per_month').ionRangeSlider({
		min: 105000,
		max: 155000,
		from: 105000,
		step: 100,
		postfix: ' ₽',
		onChange: data => {
			candidateCostCalc()
			youSaveCalc()
		}
	}).data('ionRangeSlider')

	var HRSalary = $('.calc #HR_salary').ionRangeSlider({
		min: 80000,
		max: 150000,
		from: 80000,
		step: 100,
		postfix: ' ₽',
		onChange: data => {
			candidateCostCalc()
			youSaveCalc()
		}
	}).data('ionRangeSlider')

	var additionalHRSalary = $('.calc #additional_HR_salary').ionRangeSlider({
		min: 0,
		max: 90000,
		from: 0,
		step: 100,
		postfix: ' ₽',
		onChange: data => {
			candidateCostCalc()
			youSaveCalc()
		}
	}).data('ionRangeSlider')

	var candidateVerifi = $('.calc #candidate_verifi').ionRangeSlider({
		min: 5000,
		max: 15000,
		from: 5000,
		step: 100,
		postfix: ' ₽',
		onChange: data => {
			candidateCostCalc()
			youSaveCalc()
		}
	}).data('ionRangeSlider')


	// Трудозатраты на поиск
	const laborCostCalc = () => {
		// Расчёт
		let result = 0

		// Для руководителя высшего звена другая формула
		if($('.calc .business select').val() == 4) {
			result = Math.round(HRSalary.result.from/168*90/1000)*1000
			$('.calc .labor_costs .label span').text('90')
		} else {
			result = Math.round(HRSalary.result.from/168*50/1000)*1000
			$('.calc .labor_costs .label span').text('50')
		}

		// Отображение результата
		$('.calc .labor_costs .price span').text(result.toLocaleString('ru-RU'))

		return result
	}

	laborCostCalc()


	// Итоговые затраты
	const candidateCostCalc = () => {
		// Суммирование
		let result = costPerMonth.result.from + laborCostCalc() + additionalHRSalary.result.from + candidateVerifi.result.from

		// Повторный поиск
		if($('.calc input[name=repeated_search]').prop('checked')){
			result = result * 2
		}

		// Отображение результата
		$('.calc .candidate_cost .price span').text(result.toLocaleString('ru-RU'))

		return result
	}

	candidateCostCalc()


	// Повторный поиск
	$('.calc .repeated_search .checkbox label').click(function() {
		setTimeout(() => {
			candidateCostCalc()
			youSaveCalc()
		})
	})


	// Вы экономите
	const youSaveCalc = () => {
		// Расчёт
		let result = 0

		if($('.calc .candidate_cost .exp.active').length) {
			result = candidateCostCalc() - parseInt($('.calc .candidate_cost .exp.active .price').data('price'))
		}

		// Отображение результата
		$('.calc .bottom .total_price .price span').text(result.toLocaleString('ru-RU'))
	}

	youSaveCalc()


	// Выбор вакансии
	$('.calc .business select').change(function() {
		$('.calc .candidate_cost .exp').removeClass('active')
		$('.calc .candidate_cost .exp' + $(this).val()).addClass('active')

		laborCostCalc()
		youSaveCalc()
	})
})


$(window).on('scroll', () => {
	// Мы возьмём на себя
	if(typeof offsetStart != 'undefined' && typeof offsetFinish != 'undefined') {
		let = scrollTop = $(window).scrollTop()

		if(scrollTop > offsetStart && scrollTop < offsetFinish) {
			$('.we_take_over .item.first .image').removeClass('bottom')
			$('.we_take_over .item.first .image').addClass('is_stuck')

			$('.we_take_over .item.first .image').css({
				'top': $(window).height() / 2 - $('.we_take_over .image').outerHeight() / 2
			})
		} else if(scrollTop > offsetFinish) {
			$('.we_take_over .item.first .image').addClass('bottom')
			$('.we_take_over .item.first .image').removeClass('is_stuck')
			$('.we_take_over .item.first .image').css({ 'top': 0 })
		} else {
			$('.we_take_over .item.first .image').removeClass('bottom')
			$('.we_take_over .item.first .image').removeClass('is_stuck')
			$('.we_take_over .item.first .image').css({ 'top': 0 })
		}
	}
})