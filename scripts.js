window.addEventListener("load", () => {
  const aboutMeSection = document.querySelector(".about-me");
  const videoSection = document.querySelector(".video-section");
  const futureGoalSection = document.querySelector(".future-goal-content");

  console.log(futureGoalSection);
  aboutMeSection.classList.add("loaded");
  videoSection.classList.add("loaded");
  futureGoalSection.classList.add("loaded");
});

window.addEventListener("load", () => {
  const submitButton = document.querySelector("#sendMessageButton");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name").value.trim();
    const emailInput = document.querySelector("#email").value.trim();
    const messageInput = document.querySelector("#message").value.trim();

    if (!nameInput || !emailInput || !messageInput) {
      alert("Please fill in all fields.");
      return;
    }

    if (/\d/.test(nameInput)) {
      alert("Name cannot contain numbers.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Your Message Has been submitted!");

    document.querySelector("#contactForm").reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  const moveToNext = () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  };

  const moveToPrevious = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }
    updateSlider();
  };

  const updateSlider = () => {
    const cardWidth = cards[0].offsetWidth + 32;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  const prevButton = document.querySelector(".prev");
  prevButton.addEventListener("click", moveToPrevious);

  const nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", moveToNext);
});
