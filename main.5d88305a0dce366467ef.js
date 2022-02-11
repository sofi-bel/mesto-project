"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 90:
/***/ (function() {


var profileEditButton = document.querySelector(".profile__button_type_edit");
var addNewCardButton = document.querySelector(".profile__button_type_add");
var closeEditProfilePopupButton = document.querySelector(".popup__close-button_type_edit-profile");
var closeAddPlacePopupButton = document.querySelector(".popup__close-button_type_add-place");
var closeOpenImagePopupButton = document.querySelector(".popup__close-button_type_image-place");
var popupEditProfile = document.querySelector(".popup_type_edit-profile");
var popupAddPlace = document.querySelector(".popup_type_add-place");
var popupImagePlace = document.querySelector(".popup_type_image-place");
var editProfileForm = document.querySelector(".form_type_edit-profile");
var addPlaceForm = document.querySelector(".form_type_add-place");
var profileInfo = document.querySelector(".profile__info");
var nameInput = document.querySelector(".form__input_type_name");
var jobInput = document.querySelector(".form__input_type_job");
var profileTitle = profileInfo.querySelector(".profile__title");
var profileSubtitle = profileInfo.querySelector(".profile__subtitle");
var placeInput = document.querySelector(".form__input_type_place");
var linkInput = document.querySelector(".form__input_type_url");
var imagePopup = document.querySelector(".image-place__image");
var imageCaption = document.querySelector(".image-place__caption");
profileEditButton.addEventListener("click", handleOpenEditProfile);
addNewCardButton.addEventListener("click", handleOpenAddPlace);
closeEditProfilePopupButton.addEventListener("click", handleCloseEditProfile);
closeAddPlacePopupButton.addEventListener("click", handleCloseAddPlace);
closeOpenImagePopupButton.addEventListener("click", handleCloseImage);

function handleOpenEditProfile() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
  openPopup(popupEditProfile);
}

function handleOpenAddPlace() {
  openPopup(popupAddPlace);
}

function handleOpenImage(evt) {
  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;
  openPopup(popupImagePlace);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function handleCloseEditProfile() {
  closePopup(popupEditProfile);
}

function handleCloseAddPlace() {
  closePopup(popupAddPlace);
}

function handleCloseImage() {
  closePopup(popupImagePlace);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function initForm() {
  editProfileForm.addEventListener("submit", updateProfile);
  addPlaceForm.addEventListener("submit", addPlace);
}

initForm();

function updateProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function addPlace(evt) {
  evt.preventDefault();
  var item = [];
  item.name = placeInput.value;
  item.link = linkInput.value;
  addCard(createCard(item));
  closePopup(popupAddPlace);
  placeInput.value = "";
  linkInput.value = "";
}

function initCards() {
  var initialCards = [{
    name: "Arkhyz",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  }, {
    name: "Chelyabinsk region",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  }, {
    name: "Ivanovo",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  }, {
    name: "Kamchatka",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  }, {
    name: "Kholmogorsky district",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  }, {
    name: "Baikal",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }];
  initialCards.forEach(function (item) {
    addCard(createCard(item));
  });
}

initCards();

function addCard(card) {
  var places = document.querySelector(".places__list");
  places.prepend(card);
}

function createCard(item) {
  var cardTemplate = document.querySelector("#card-template").content;
  var card = cardTemplate.querySelector(".card").cloneNode(true);
  var cardImage = card.querySelector(".card__image");
  var cardTitle = card.querySelector(".card__title");
  var cardLikeButton = card.querySelector(".card__button_type_like");
  var cardDeleteButton = card.querySelector(".card__button_type_delete");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button_type_active-like");
  });
  cardDeleteButton.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", handleOpenImage);
  return card;
}

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(90));
/******/ }
]);