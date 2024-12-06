window.addEventListener("load", () => {
    const aboutMeSection = document.querySelector(".about-me");
    const videoSection = document.querySelector(".video-section");
    const futureGoalSection = document.querySelector(".future-goal-content");

    console.log(futureGoalSection); // Debug to check if element is selected
    aboutMeSection.classList.add("loaded");
    videoSection.classList.add("loaded");
    futureGoalSection.classList.add("loaded");
});
