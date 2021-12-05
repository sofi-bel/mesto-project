const profileEditButton = document.querySelector('.profile__button_type_edit');
profileEditButton.addEventListener('click', openModalWindow);

const addNewCardButton = document.querySelector('.profile__button_type_add');
addNewCardButton.addEventListener('click', openModalWindow);

function openModalWindow(evt) {
if(evt.target.classList.contains('profile__button_type_edit')) {
  const popupEditProfile = document.querySelector('.popup_type_edit-profile');
  popupEditProfile.classList.add('popup_opened');
  popupEditProfile.querySelector('.popup__close-button_type_edit-profile')
    .addEventListener('click', closeModalWindow);
} else if(evt.target.classList.contains('profile__button_type_add')) {
  const popupAddPlace = document.querySelector('.popup_type_add-place');
  popupAddPlace.classList.add('popup_opened');
  popupAddPlace.querySelector('.popup__close-button_type_add-place')
    .addEventListener('click', closeModalWindow);
} else if(evt.target.classList.contains('element__image')) {
  const popupImagePlace = document.querySelector('.popup_type_image-place');
  popupImagePlace.classList.add('popup_opened');
  popupImagePlace.querySelector('.popup__close-button_type_image-place')
    .addEventListener('click', closeModalWindow);
}
}

function closeModalWindow(evt) {
evt.target.closest(".popup").classList.remove('popup_opened');

if(evt.target.classList.contains('popup__close-button_type_image-place')) {
  deleteImagePopup(evt);
}
}

function initForm() {
document.querySelector('.form_type_edit-profile').addEventListener('submit', UpdateProfile);
document.querySelector('.form_type_add-place').addEventListener('submit', addPlace);
}

initForm();

function UpdateProfile(evt) {
evt.preventDefault();
const profileInfo = document.querySelector('.profile__info');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

profileInfo.querySelector('.profile__title').textContent = nameInput.value;
profileInfo.querySelector('.profile__subtitle').textContent = jobInput.value;

closeModalWindow(evt);
}

function addPlace(evt) {
evt.preventDefault();
const placeInput = document.querySelector('.form__input_type_place');
const linkInput = document.querySelector('.form__input_type_url');
const item = [];

item.name = placeInput.value;
item.link = linkInput.value;

addCard(item);
closeModalWindow(evt);

placeInput.value = '';
linkInput.value = '';
}

function initCards() {
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function(item) {
  addCard(item)
});
}

initCards();

function addCard(item) {
const cardTemplate = document.querySelector('#element-template').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const cardImage = cardElement.querySelector('.element__image');

cardImage.src = item.link;
cardImage.alt = item.name;

cardElement.querySelector('.element__title').textContent = item.name;

cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like-button_active');
});
cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);

cardImage.addEventListener('click', initImagePopup);

document.querySelector('.elements__list').prepend(cardElement);
}

function deleteCard(evt) {
evt.target.closest('.element').remove();
}

function initImagePopup(evt) {
const imagePopupTemplate = document.querySelector('#image-template').content;
const imagePopupElement = imagePopupTemplate.querySelector('.image-place').cloneNode(true);
const imagePopup = imagePopupElement.querySelector('.image-place__image');

imagePopup.src = evt.target.src;
imagePopup.alt = evt.target.alt;
imagePopupElement.querySelector('.image-place__caption').textContent = evt.target.alt;

document.querySelector('.popup_type_image-place').append(imagePopupElement);

openModalWindow(evt);
}

function deleteImagePopup(evt) {
evt.target.closest('.image-place').remove();
}
