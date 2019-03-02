var popup = document.querySelector(".modal-cart"),
  closeButtons = document.querySelectorAll(".modal-close"),
  buttonItems = document.querySelectorAll(".buy-submit"),
  linkForm = document.querySelector(".write-us"),
  popupForm = document.querySelector(".feedback-form"),
  linkMap = document.querySelector(".map-popup"),
  popupMap = document.querySelector(".modal-map");
for (var i = 0; i < buttonItems.length; i++) {
  buttonItems[i].addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add("modal-show");
  });
}
for (var j = 0; j < closeButtons.length; j++) {
  closeButtons[j].addEventListener("click", function(e) {
    e.preventDefault();
    e.target.closest(".modal").classList.remove("modal-show");
  });
}
linkForm.addEventListener("click", function(e) {
  e.preventDefault();
  popupForm.classList.add("modal-show");
});
linkMap.addEventListener("click", function(e) {
  e.preventDefault();
  popupMap.classList.add("modal-show");
});
var deliveryButton = document.querySelector(".delivery-link");
var guarantyButton = document.querySelector(".guaranty-link");
var creditButton = document.querySelector(".credit-link");
var deliveryServices = document.querySelector(".delivery-services");
var guarantyServices = document.querySelector(".guaranty-services");
var creditServices = document.querySelector(".credit-services");
deliveryButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (guarantyButton.classList.contains("services-active")) {
    guarantyButton.classList.remove("services-active");
    guarantyButton.classList.add("services-not-active");
  }
  if (creditButton.classList.contains("services-active")) {
    creditButton.classList.remove("services-active");
    creditButton.classList.add("services-not-active");
  }
  if (guarantyServices.classList.contains("services-shown")) {
    guarantyServices.classList.remove("services-shown");
    guarantyServices.classList.add("services-hidden");
  }
  if (creditServices.classList.contains("services-shown")) {
    creditServices.classList.remove("services-shown");
    creditServices.classList.add("services-hidden");
  }
  deliveryButton.classList.remove("services-not-active");
  deliveryButton.classList.add("services-active");
  deliveryServices.classList.remove("services-hidden");
  deliveryServices.classList.add("services-shown");
});
guarantyButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (deliveryButton.classList.contains("services-active")) {
    deliveryButton.classList.remove("services-active");
    deliveryButton.classList.add("services-not-active");
  }
  if (creditButton.classList.contains("services-active")) {
    creditButton.classList.remove("services-active");
    creditButton.classList.add("services-not-active");
  }
  if (deliveryServices.classList.contains("services-shown")) {
    deliveryServices.classList.remove("services-shown");
    deliveryServices.classList.add("services-hidden");
  }
  if (creditServices.classList.contains("services-shown")) {
    creditServices.classList.remove("services-shown");
    creditServices.classList.add("services-hidden");
  }
  guarantyButton.classList.remove("services-not-active");
  guarantyButton.classList.add("services-active");
  guarantyServices.classList.remove("services-hidden");
  guarantyServices.classList.add("services-shown");
});
creditButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (deliveryButton.classList.contains("services-active")) {
    deliveryButton.classList.remove("services-active");
    deliveryButton.classList.add("services-not-active");
  }
  if (guarantyButton.classList.contains("services-active")) {
    guarantyButton.classList.remove("services-active");
    guarantyButton.classList.add("services-not-active");
  }
  if (deliveryServices.classList.contains("services-shown")) {
    deliveryServices.classList.remove("services-shown");
    deliveryServices.classList.add("services-hidden");
  }
  if (guarantyServices.classList.contains("services-shown")) {
    guarantyServices.classList.remove("services-shown");
    guarantyServices.classList.add("services-hidden");
  }
  creditButton.classList.remove("services-not-active");
  creditButton.classList.add("services-active");
  creditServices.classList.remove("services-hidden");
  creditServices.classList.add("services-shown");
});
