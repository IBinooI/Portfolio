window.addEventListener("load", () => {
  const aboutMeSection = document.querySelector(".about-me");
  const videoSection = document.querySelector(".video-section");
  const futureGoalSection = document.querySelector(".future-goal-content");

  console.log(futureGoalSection); // Debug to check if element is selected
  aboutMeSection.classList.add("loaded");
  videoSection.classList.add("loaded");
  futureGoalSection.classList.add("loaded");
});

window.addEventListener("load", () => {
  const submitButton = document.querySelector("#sendMessageButton");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the form values
    const nameInput = document.querySelector("#name").value.trim();
    const emailInput = document.querySelector("#email").value.trim();
    const messageInput = document.querySelector("#message").value.trim();

    // Check if any are empty
    if (!nameInput || !emailInput || !messageInput) {
      alert("Please fill in all fields.");
      return; // Exit the function if any field is empty
    }

    // Check if name contains any numbers
    if (/\d/.test(nameInput)) {
      alert("Name cannot contain numbers.");
      return;
    }

    // Basic email format validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If everything is valid, show a success message
    alert("Form has been submitted!");

    // Reset the form fields
    document.querySelector("#contactForm").reset();
  });
});
