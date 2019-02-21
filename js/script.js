var popup = document.querySelector(".modal-cart"),
  closeButtons = document.querySelectorAll(".modal-close"),
  buttonItems = document.querySelectorAll(".buy-submit"),
  linkForm = document.querySelector(".write-us"),
  popupForm = document.querySelector(".feedback-form"),
  linkMap = document.querySelector(".map-popup"),
  popupMap = document.querySelector(".modal-map");

for (var i = 0; i < buttonItems.length; i++) {
  buttonItems[i].addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add("modal-show");
  });
}

for (var j = 0; j < closeButtons.length; j++) {
  closeButtons[j].addEventListener("click", function (e) {
    e.preventDefault();
    e.target.closest(".modal").classList.remove("modal-show");
  });
}

linkForm.addEventListener("click", function (e) {
  e.preventDefault();
  popupForm.classList.add("modal-show");
});

linkMap.addEventListener("click", function (e) {
  e.preventDefault();
  popupMap.classList.add("modal-show");
});

priceoutput.value=pricecount.value

var pagesList = document.querySelector(".catalog-pagination");
var pageSwitch = document.querySelector(".pagination-item");
pagesList.addEventListener("click", function (evt) {
  evt.preventDefault();
  pageSwitch.classList.add("page-active");
});
