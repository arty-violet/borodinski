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
  loginPopup.classList.add("modal--animation-show");
  overlay.classList.add("modal__overlay--show");

  if (loginStorage) {
    inputLogin.value = loginStorage;
    inputPassword.focus();
  } else {
    inputLogin.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!inputLogin.value || !inputPassword.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal--error");

    setTimeout(function() {
      loginPopup.classList.remove("modal--error");
      loginPopup.classList.remove("modal--animation-show");
      loginPopup.classList.add("modal--static-show");
    }, 600);
    
  } else {
    evt.preventDefault();
    loginPopup.classList.remove("modal--animation-show");
    loginPopup.classList.remove("modal--static-show");
    overlay.classList.remove("modal__overlay--show");
    
    if (isStorageSupport) {
      localStorage.setItem("inputLogin", inputLogin.value);
    }
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal--animation-show");
  loginPopup.classList.remove("modal--static-show");
  overlay.classList.remove("modal__overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();

    if (loginPopup.classList.contains("modal--animation-show")) {
      loginPopup.classList.remove("modal--animation-show");
      overlay.classList.remove("modal__overlay--show");
    }

    if (loginPopup.classList.contains("modal--static-show")) {
      loginPopup.classList.remove("modal--static-show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
})