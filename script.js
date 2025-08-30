
// card  slider
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let position = 0;
const itemWidth = track.querySelector(".carousel-item-custom").offsetWidth;

nextBtn.addEventListener("click", () => {
  if (position > -(track.scrollWidth - itemWidth * 3)) {
    position -= itemWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (position < 0) {
    position += itemWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

// Hero Slider

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".carousel-indicators button");
let slideInterval = setInterval(nextSlide, 10000); // auto change every 10 sec

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    indicators[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function goToSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  slideInterval = setInterval(nextSlide, 10000);
}
