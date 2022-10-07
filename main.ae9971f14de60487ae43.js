"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 90:
/***/ (function() {


const profileEditButton = document.querySelector(".profile__button_type_edit");
const addNewCardButton = document.querySelector(".profile__button_type_add");
const closeEditProfilePopupButton = document.querySelector(".popup__close-button_type_edit-profile");
const closeAddPlacePopupButton = document.querySelector(".popup__close-button_type_add-place");
const closeOpenImagePopupButton = document.querySelector(".popup__close-button_type_image-place");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddPlace = document.querySelector(".popup_type_add-place");
const popupImagePlace = document.querySelector(".popup_type_image-place");
const editProfileForm = document.querySelector(".form_type_edit-profile");
const addPlaceForm = document.querySelector(".form_type_add-place");
const profileInfo = document.querySelector(".profile__info");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubtitle = profileInfo.querySelector(".profile__subtitle");
const placeInput = document.querySelector(".form__input_type_place");
const linkInput = document.querySelector(".form__input_type_url");
const imagePopup = document.querySelector(".image-place__image");
const imageCaption = document.querySelector(".image-place__caption");
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
  const item = [];
  item.name = placeInput.value;
  item.link = linkInput.value;
  addCard(createCard(item));
  closePopup(popupAddPlace);
  placeInput.value = "";
  linkInput.value = "";
}

function initCards() {
  const initialCards = [{
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
  const places = document.querySelector(".places__list");
  places.prepend(card);
}

function createCard(item) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardLikeButton = card.querySelector(".card__button_type_like");
  const cardDeleteButton = card.querySelector(".card__button_type_delete");
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