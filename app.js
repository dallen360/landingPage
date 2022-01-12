const navbar = document.querySelector(".nav-bar");
const logo = document.querySelector(".nav-bar__img");
let scrollActive = true;

window.addEventListener("scroll", () => {
  if (!scrollActive) return;
  if (window.scrollY < 200 || window.pageYOffset < 200) {
    navbar.style.backgroundColor = "transparent";
    logo.style.height = "9rem";
  } else {
    navbar.style.backgroundColor = "gray";
    logo.style.height = "8rem";
  }
});

//////////////////

//////////////////
//////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__item");
  let slide = document.getElementsByClassName("carousel__img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);

// Next/previous controls
function plusSlidesTwo(n) {
  showSlidesTwo((slideIndexTwo += n));
}

function showSlidesTwo(n) {
  let i;
  let slides = document.getElementsByClassName("comments__item");

  if (n > slides.length) {
    slideIndexTwo = 1;
  }
  if (n < 1) {
    slideIndexTwo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexTwo - 1].style.display = "block";
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar__list-1");
const navMenu2 = document.querySelector(".nav-bar__list-2");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  scrollActive = !scrollActive;
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navbar.classList.toggle("grey");
  logo.classList.toggle("logo");
  navMenu2.classList.toggle("display");
}
