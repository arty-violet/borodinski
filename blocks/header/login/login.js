var loginLink = document.querySelector(".user-nav__link");
var loginPopup = document.querySelector(".login");
var loginClose = document.querySelector(".login__close-button");
var loginForm = loginPopup.querySelector(".login__form");
var inputLogin = loginPopup.querySelector(".login__input-user");
var inputPassword = loginPopup.querySelector(".login__input-password");
var loginStorage = localStorage.getItem("inputLogin");
var overlay = document.querySelector(".modal__overlay");

var isStorageSupport = true;
var loginStorage = "";


try {
  loginStorage = localStorage.getItem("inputLogin");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal--show");
  overlay.classList.add("modal__overlay--show");

  if (loginStorage) {
    inputLogin.value = loginStorage;
    inputPassword.focus();
  } else {
    inputLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal--show");
  loginPopup.classList.remove("modal--error");
  overlay.classList.remove("modal__overlay--show");
});

loginForm.addEventListener("submit", function (evt) {
  if (!inputLogin.value || !inputPassword.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal--error");
    overlay.classList.add("modal__overlay--show");
} else {
    evt.preventDefault();
    loginPopup.classList.remove("modal--show");
    overlay.classList.remove("modal__overlay--show");

    if (isStorageSupport) {
      localStorage.setItem("inputLogin", inputLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();

    if (loginPopup.classList.contains("modal--show")) {
      loginPopup.classList.remove("modal--show");
      loginPopup.classList.remove("modal--error");
      overlay.classList.remove("modal__overlay--show");
    }
  }
})