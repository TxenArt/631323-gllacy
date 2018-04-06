var feedbackPopupOpen = document.querySelector(".company-contacts-feedback-button");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackOverlay = document.querySelector(".overlay");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("[name=feedback-name]");
var feedbackEmail = feedbackPopup.querySelector("[name=feedback-email]");
var feedbackText = feedbackPopup.querySelector("[name=feedback-text]");
var mapJs = document.querySelector(".map-js");

feedbackPopupOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-show");
  feedbackOverlay.classList.add("popup-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackOverlay.classList.remove("popup-show");
  feedbackPopup.classList.remove("popup-show");
  feedbackPopup.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("popup-error");
    console.log("Нужно ввести имя, электронную почту и текст");
  }
});

mapJs.classList.add("popup-show");
