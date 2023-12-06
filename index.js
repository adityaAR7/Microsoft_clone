$("#show").on("click", () => {
  $("#show").addClass("hidden");
  $("#hide").removeClass("hidden");
  $("#list").removeClass("hidden");
});

$("#hide").on("click", () => {
  $("#show").removeClass("hidden");
  $("#hide").addClass("hidden");
  $("#list").addClass("hidden");
});

let flag = 0;

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    toggleFunction(offset);
  });
});


const toggleFunction = (offset) => {
  const slides = document.querySelector("[data-slides]");
  //active slide
  let activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  else if (newIndex >= slides.children.length) newIndex = 0;

  //active circle
  const circles = document.querySelectorAll("[data-circle]");
  let activeCircle;
  circles.forEach((circle) => {
    if (circle.dataset.bgBlack) {
      activeCircle = circle;
    }
  });
  let newIndex1 = [...circles].indexOf(activeCircle) + offset;
  if (newIndex1 < 0) newIndex1 = 1;
  else if (newIndex1 >= 2) newIndex1 = 0;

  circles[newIndex1].dataset.bgBlack = true;
  delete activeCircle.dataset.bgBlack;

  slides.children[newIndex].dataset.active = true;
  activeSlide.dataset.hidden = true;
  delete slides.children[newIndex].dataset.hidden;
  delete activeSlide.dataset.active;
};


// document.querySelector("[data-play]").addEventListener("click", () => {
//   if (!flag) {
//     setInterval(() => {
//       toggleFunction(1);
//     }, 1000);
//   }
//   flag ^= 1;
// });

// const slides = document.querySelectorAll(".slide");
// slides.forEach((slide,index)=>{
//   slide.style.transform = `translateX(${index * 100}%)`;
// })

// const nextSlide = document.querySelector(".next");

// let curSlide = 0;
// let maxSlide = slides.length - 1;

// nextSlide.addEventListener("click", function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// const prevSlide = document.querySelector(".prev");

// prevSlide.addEventListener("click", function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });
