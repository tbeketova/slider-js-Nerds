//Функция инициализации слайдера
function initSlider() {
	let slides = document.querySelectorAll(".slider__wrapper  .slider__item");
	let dots = document.querySelectorAll(".slider__wrapper  .dot");

	slides = Array.from(slides); //Преобразование выбранных элементов слайдов и точек в массивы
	dots = Array.from(dots);

// Функция для сброса активных классов и стилей слайдов и кнопок-пагинации
	function slidesResetActive() {

		//вызов метода forEach, который выполняет указанную функцию один раз для каждого элемента в массиве slides. Каждый элемент массива передается в функцию как аргумент, и также передается индекс этого элемента в массиве.
		slides.forEach((slide, index) => { //Для каждого слайда и его индекса. slide - текущий элемент массива slides, который обрабатывается в текущей итерации. index- ето индекс текущего элемента slide в массиве slides
			if (slide.classList.contains("active")) {
				slide.classList.remove("active");
				slide.style.backgroundImage = ''; //сброс фонового изображения
			}
			if (dots[index].classList.contains("active")) {
				dots[index].classList.remove("active");
			}
		})
	}

	slides.forEach((slide, i) => {
		dots[i].addEventListener("click", () => {
			slidesResetActive();
			slide.classList.add("active");
			slide.style.backgroundImage = `url('./slide-${i}.png')`;
			dots[i].classList.add("active")
		});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	initSlider();
});