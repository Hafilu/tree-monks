$(".Client-Sliders").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  draggable: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: "ease-in-out",
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  responsive: [
    {
      breakpoint: 1030,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 765,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 540,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
});


$(document).ready(function () {
  const $slider = $(".blog-Sliders");

  $slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 540,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });


  
  function updateSlideBackground() {
    $(".blog-Sliders .slick-slide").each(function () {
      const $slide = $(this);
      const bgImage = $slide.data("bg");
      if (bgImage) {
        $slide.css("background-image", `url(${bgImage})`);
      }
    });
  }

  // Trigger updates on initialization and slide changes
  $slider.on("init afterChange", function () {
    updateSlideBackground();
  });

  // Initialize and trigger updates
  $slider.slick("setPosition");
  updateSlideBackground();
});



$(document).ready(function () {
  const $slider = $(".slider-container-mob");

  $slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 540,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });
})

const slider = document.querySelector(".image-card-slider");
const items = slider.getElementsByClassName("image-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let isAnimating = false; // To prevent overlapping animations
let autoSlideInterval;

function handleNext() {
  if (isAnimating) return; // Prevent multiple clicks during animation
  isAnimating = true;

  // Prepend the last card and set initial transform
  slider.style.transition = "none";
  slider.prepend(items[items.length - 1]);
  slider.style.transform = "translateX(-25%)";

  // Animate the slider
  requestAnimationFrame(() => {
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = "translateX(0)";
  });

  // After the animation completes
  setTimeout(() => {
    updateActiveClass();
    isAnimating = false;
  }, 100); // Match the CSS transition duration
}

function handlePrev() {
  if (isAnimating) return; // Prevent multiple clicks during animation
  isAnimating = true;

  // Prepend the last card and set initial transform
  slider.style.transition = "none";
  slider.prepend(items[items.length - 1]);
  slider.style.transform = "translateX(-25%)";

  // Animate the slider
  requestAnimationFrame(() => {
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = "translateX(0)";
  });

  // After the animation completes
  setTimeout(() => {
    updateActiveClass();
    isAnimating = false;
  }, 100); // Match the CSS transition duration
}

function updateActiveClass() {
  const cards = document.querySelectorAll(".image-card");
  cards.forEach((card) => card.classList.remove("active"));
  cards[0].classList.add("active");
}


prevBtn.addEventListener("click", handlePrev);
function startAutoSlide() {
  autoSlideInterval = setInterval(handleNext, 3000); // Change slides every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Add event listeners for manual controls
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  handleNext();
  startAutoSlide(); // Restart auto-slide
});

startAutoSlide()
updateActiveClass();



