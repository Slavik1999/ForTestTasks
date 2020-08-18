let feedbackForm = document.querySelector(".feedbackForm");
let windowContainer = document.getElementById("windowContainer");
let windowHeader = document.getElementById("windowHeader");

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  windowContainer.style.display = "block";
});
windowHeader.addEventListener("click", () => {
  windowContainer.style.display = "none";
});
