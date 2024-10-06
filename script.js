let tizers = document.querySelectorAll('.desktop-tizer-item');
let prevBtn = document.querySelector('.tizers-button-prev');
let nextBtn = document.querySelector('.tizers-button-next');
let counter = 0;

nextBtn.onclick = () => {
	counter++;
	if (counter == tizers.length) {
		counter = 0;
	};

	changeActive(counter);
}

prevBtn.onclick = () => {
	counter--;
	if (counter < 0) {
		counter = tizers.length - 1;
	};

	changeActive(counter);
}

function changeActive(itemCount){
	tizers.forEach(function(tizer){
		tizer.classList.remove('active');
	});

	for(let i = 0; i < tizers.length; i++ ){
		if (i == itemCount){
			tizers[i].classList.add('active');
		}
	};
}

const swiperTizer = new Swiper('.tizers-swiper', {
	loop: true,
	spaceBetween: 20,
	breakpoints:{
		0:{
			slidesPerView: 1,
		},
		600:{
			slidesPerView: 1.5,
		},
		700:{
			slidesPerView: 2,
		}
	},
	navigation: {
		 	nextEl: ".tizers-swiper-button-next",
		 	prevEl: ".tizers-swiper-button-prev",
		},
	    pagination: {
            el: ".tizers-swiper-pagination",
            clickable: false,
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
        },
});