const slides = document.querySelectorAll('.slideUnitWrapper');
const grid = document.querySelector('.slidesOverflow');
const slidesCont = slides.length;
const sliderBtnLeft = document.querySelector('.sliderBtnLeft');
const sliderBtnRight = document.querySelector('.sliderBtnRight');
const slideDotsIndicator = document.querySelector('.slideDotsIndicator');
cont = 0;
slideAtual = 1;

sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', prevSlide);
grid.style.gridTemplateColumns = `repeat(${slidesCont}, 100%)`;


for (var i = 0; i <= slidesCont-1; i++) {
	const dot = document.createElement('div');
	dot.className = 'slideDot boxModel';
	slideDotsIndicator.appendChild(dot);
};

let slidesDots = document.querySelectorAll('.slideDot');
let dots = slideDotsIndicator.children;
dots = Array.from(dots);
dots[0].style.backgroundColor = 'var(--gray)';

function nextSlide() {
	slidesDots.forEach(function(el) {
		el.style.backgroundColor = 'var(--lightGray)';
	});
	if (slideAtual >= slidesCont) {
		cont = 0;
		slideAtual = 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(0%)`;
		});
	} else {
		cont += 1;
		slideAtual += 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
	slidesDots[cont].style.backgroundColor = 'var(--gray)';
};

function prevSlide() {
	slidesDots.forEach(function(el) {
		el.style.backgroundColor = 'var(--lightGray)';
	});
	if (cont <= 0) {
		cont = slidesCont -1;
		slideAtual = slidesCont;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	} else {
		cont -= 1;
		slideAtual -= 1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
	slidesDots[cont].style.backgroundColor = 'var(--gray)';
};

slideDotsIndicator.addEventListener('click', function(el) {
	slidesDots.forEach(function(el) {
		el.style.backgroundColor = 'var(--lightGray)';
	});
	if(el.target.classList.contains('slideDot')) {
		el.target.style.backgroundColor = 'var(--gray)';
		cont = dots.indexOf(el.target);
		slideAtual = cont +1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
	el.preventDefault();
});

function pauseSlides() {
	clearInterval(loopSlides);
	console.log('mouse over');
}

function autoSlides() {
	nextSlide();
};

let loopSlides = setInterval(autoSlides, 5000);

function resumeAnimation() {
	loopSlides = "";
	console.log('mouse out');
	loopSlides = setInterval(autoSlides, 5000);
}
const hoverPause = document.querySelector('.slideFullContainer');

hoverPause.addEventListener('mouseenter', pauseSlides);
hoverPause.addEventListener('mouseleave', resumeAnimation);











const sliderBtnLeftInsta = document.querySelector('.sliderBtnLeftInsta');
const sliderBtnRightInsta = document.querySelector('.sliderBtnRightInsta');
let carouselPart = document.querySelector('.carouselPart');

let instaSlides = document.querySelectorAll('.instaUnitWrapper');

instaSlides = Array.from(instaSlides);

sliderBtnLeftInsta.addEventListener('click', instaPrev);
sliderBtnRightInsta.addEventListener('click', instaNext);

let contInsta = 0;

function instaNext() {
	contInsta += 3;
	console.log(instaSlides);
	if(contInsta === 18) {
		contInsta = 18;
		console.log('final');
	} else {
		instaSlides.forEach(function(el) {
			el.style.transform = `translateX(-${contInsta}00px)`;
			console.log(contInsta);
		});
	}
};

function instaPrev() {
	contInsta -= 3;
	console.log(instaSlides);
	if(contInsta <= 0) {
		contInsta = 0;
		console.log('fim');
	} else {	
		instaSlides.forEach(function(el) {
			el.style.transform = `translateX(-${contInsta}00px)`;
			console.log(contInsta);
		});
	};
};