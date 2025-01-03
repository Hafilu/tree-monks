// modal js

const modal = document.getElementById("modalForm");

function openModal() {
  modal.style.display = "block";
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400); // Match animation duration
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

let throttleTimeout;
const cards = document.querySelectorAll(".rec-card ");

const isMobile = window.matchMedia("(max-width: 767px)").matches;
if (isMobile) {
  const throttleScroll = () => {
    if (throttleTimeout) return;

    throttleTimeout = setTimeout(() => {
      checkVisibility();
      throttleTimeout = null;
    }, 100); // Delay to throttle the scroll events
  };

  const checkVisibility = () => {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.5; // 90% of the card visible

      if (isVisible) {
        card.classList.add("in-view");
      } else {
        card.classList.remove("in-view");
      }
    });
  };

  window.addEventListener("scroll", throttleScroll);
}
