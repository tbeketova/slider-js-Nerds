//showSlides функция
function showSlides(sliderNum, n) {
  let slides = document.querySelectorAll(`.slider-wrapper[data-slider="${sliderNum}"] .slider__item`);
  let dots = document.querySelectorAll(`.slider-wrapper[data-slider="${sliderNum}"] .dot`);
  
  slides = Array.from(slides);  //Преобразование коллекций в массивы
  dots = Array.from(dots); 

  slides.forEach(slider__item => {    // Скрываем все слайды
    slider__item.style.display = 'none';
  });

  dots.forEach(dot => {  //Удаляем класс 'active' у всех точек
    dot.classList.remove('active');
  });

  slides[n].style.display = 'block'; // Отображаем выбранный слайд
  dots[n].classList.add('active'); //Добавляем класс 'active' выбранной точке
}

function currentSlide(sliderNum, n) {  // Функция для переключения на указанный слайд
  showSlides(sliderNum, n);
}

document.addEventListener('DOMContentLoaded', function() { 
  showSlides(1, 0);     // Отобразить первый слайд при загрузке страницы
});