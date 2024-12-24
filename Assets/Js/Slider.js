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


const slider = document.querySelector(".image-card-slider");
      const cards = document.querySelectorAll(".image-card");
      const totalSlides = cards.length;
      let currentIndex = 0;

      // Clone the first card and append it to the end for circular effect

      const firstClone = cards[0].cloneNode(true);
      const secondClone = cards[1].cloneNode(true);
      slider.appendChild(firstClone);
      slider.appendChild(secondClone);

      // Function to update the slider and active card styles
      function updateSlider() {
        const isMobile = window.innerWidth <= 768; // Check if the device width is less than or equal to 768px
        const translatePercentage = isMobile ? 10 : 25; // Use 10% for mobile, 25% for larger screens
        cards.forEach((card, index) => {
          card.classList.remove("active", "next", "prev"); // Remove all classes

          if (index === currentIndex) {
            card.classList.add("active"); // Active card (50% width)
          } else if (index === (currentIndex + 1) % totalSlides) {
            card.classList.add("next"); // Next card (25% width)
          } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
            card.classList.add("prev"); // Previous card (25% width)
          }
        });

        if (currentIndex === 0) {
          slider.style.transform = `translateX(-${0}%)`;
        } else {
          slider.classList.add("image-card-slider-transform");
          // Move the slider to show the active card in the center
          slider.style.transform = `translateX(-${
            currentIndex * translatePercentage
          }%)`;
        }
      }

      // Function to show the next slide
      function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Move to next card (circular transition)
        updateSlider(); // Update the styling and position
      }
      updateSlider();

      // Set the slider to change every 3 seconds
      setInterval(showNextSlide, 3000);
