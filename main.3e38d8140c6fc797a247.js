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
  var cardList = document.querySelector(".elements__list");
  cardList.prepend(card);
}

function createCard(item) {
  var cardTemplate = document.querySelector("#element-template").content;
  var cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  var cardImage = cardElement.querySelector(".element__image");
  var cardTitle = cardElement.querySelector(".element__title");
  var cardLikeButton = cardElement.querySelector(".element__like-button");
  var cardDeleteButton = cardElement.querySelector(".element__delete-button");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-button_active");
  });
  cardDeleteButton.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", handleOpenImage);
  return cardElement;
}

function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(90));
/******/ }
]);