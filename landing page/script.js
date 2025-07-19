// Filter skill cards by category
const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    skillCards.forEach((card) => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Handle enroll form submission
const form = document.querySelector(".enroll-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple feedback (can expand with validation)
  alert("Thank you for enrolling! We'll contact you soon.");
  form.reset();
});



