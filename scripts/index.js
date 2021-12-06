const profileEditButton = document.querySelector('.profile__button_type_edit');
const addNewCardButton = document.querySelector('.profile__button_type_add');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupImagePlace = document.querySelector('.popup_type_image-place');
const editProfileForm = document.querySelector('.form_type_edit-profile');
const addPlaceForm = document.querySelector('.form_type_add-place');
const profileInfo = document.querySelector('.profile__info');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');
const placeInput = document.querySelector('.form__input_type_place');
const linkInput = document.querySelector('.form__input_type_url');
const imagePopup = document.querySelector('.image-place__image');
const imageCaption = document.querySelector('.image-place__caption');

profileEditButton.addEventListener('click', handleOpenEditProfile);
addNewCardButton.addEventListener('click', handleOpenAddPlace);
closePopupButtons.forEach(function(item) {
  item.addEventListener('click', closeModalWindow);
});

function handleOpenEditProfile() {
  nameInput.value  =  profileTitle.textContent.trim();
  jobInput.value =  profileSubtitle.textContent.trim();
  openPopup(popupEditProfile)
};

function handleOpenAddPlace() {
  openPopup(popupAddPlace)
};

function handleOpenImage(evt) {
  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;

  openPopup(popupImagePlace)
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closeModalWindow(evt) {
  closePopup(evt.target.closest(".popup"));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function initForm() {
  editProfileForm.addEventListener('submit', updateProfile);
  addPlaceForm.addEventListener('submit', addPlace);
}

initForm();

function updateProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeModalWindow(evt);
}

function addPlace(evt) {
  evt.preventDefault();
  const item = [];

  item.name = placeInput.value;
  item.link = linkInput.value;

  addCard(createCard(item));
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
    addCard(createCard(item));
  });
}

initCards();

function addCard(card) {
  const cardList = document.querySelector('.elements__list');

  cardList.prepend(card);
}

function createCard(item) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('.element__delete-button');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  cardDeleteButton.addEventListener('click', deleteCard);
  cardImage.addEventListener('click', handleOpenImage);

  return cardElement;
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}
