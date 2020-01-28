// create a reassignable variable to hold the current slide number
let currentSlide = 1;
// create a function called showSlide that takes 1 argument called slideNumber
function showSlide(slideNumber) {
  // select all DOM elements with the class 'slide' and store them in a variable
  const slides = document.querySelectorAll('.slide');
  // select all DOM elements with the class 'dot' and store them in a variable
  const dots = document.querySelectorAll('.dot');
  // if the slide number is greater than total number of slides, set it to 1
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  // if the slide number is less than 1, set it to the number of the last slide
  if (currentSlide < 1) {
    currentSlide = slides.length;
  }
  // loop over all of the slides and set them to display: none
  // for (let i = 0; i < slides.length; i++) {
  //   slides[i].style.display = 'none';
  // }
  [...slides].forEach(slide => (slide.style.display = 'none'));
  // loop over all the dots and remove the 'active' class
  // for (let i = 0; i < dots.length; i++) {
  //   const el = dots[i];
  //   el.classList.remove('active');
  // }
  [...dots].forEach(dot => dot.classList.remove('active'));
  // set the current slide to display: block
  slides[currentSlide - 1].style.display = 'block';
  // add the 'active' class to the current dot
  dots[currentSlide - 1].classList.add('active');
}
// write a function to increase the current slide number by 1 and show the new slide
function increaseSlide() {
  currentSlide++;
  showSlide(currentSlide);
}
// write a function to decrease the current slide number by 1 and show the new slide
function decreaseSlide() {
  currentSlide--;
  showSlide(currentSlide);
}
// write a function to set the current slide to a specific number and show the new slide
function specificSlide(slideNumber) {
  currentSlide = slideNumber;
  showSlide();
}
// Select the prev button and add an event listener
// that calls your function to decrease the slide number when clicked
document.querySelector('.prev').addEventListener('click', decreaseSlide);
// Select the next button and add an event listener
// that calls your function to increase the slide number when clicked
document.querySelector('.next').addEventListener('click', increaseSlide);
// don't forget to call your showSlide function on initial page load
showSlide();