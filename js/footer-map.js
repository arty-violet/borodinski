
var mapLink = document.querySelector(".footer-contacts__map-link");
var mapPopup = document.querySelector(".map");
var mapClose = document.querySelector(".map__close-button");
var overlay = document.querySelector(".modal__overlay");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal--animation-show");
  overlay.classList.add("modal__overlay--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal--animation-show");
  overlay.classList.remove("modal__overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (mapPopup.classList.contains("modal--animation-show")) {
      mapPopup.classList.remove("modal--animation-show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
}); 
