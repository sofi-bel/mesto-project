const profileEditButton = document.querySelector('.profile__button_type_edit');
profileEditButton.addEventListener('click', openModalWindow);

const addNewCardButton = document.querySelector('.profile__button_type_add');
addNewCardButton.addEventListener('click', openModalWindow);

const closePopupButton = document.querySelectorAll('.popup__close-button');
closePopupButton.forEach(function(item) {
  item.addEventListener('click', closeModalWindow);
});

function openModalWindow(evt) {
  if(evt.target.classList.contains('profile__button_type_edit')) {
    const popupEditProfile = document.querySelector('.popup_type_edit-profile');
    popupEditProfile.classList.add('popup_opened');
  } else if(evt.target.classList.contains('profile__button_type_add')) {
    const popupAddPlace = document.querySelector('.popup_type_add-place');
    popupAddPlace.classList.add('popup_opened');
  } else if(evt.target.classList.contains('element__image')) {
    const popupImagePlace = document.querySelector('.popup_type_image-place');
    popupImagePlace.classList.add('popup_opened');
  }
}

function closeModalWindow(evt) {
  closePopup(evt.target.closest(".popup"));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function initForm() {
  const editProfileForm = document.querySelector('.form_type_edit-profile');
  editProfileForm.addEventListener('submit', updateProfile);
  const addPlaceForm = document.querySelector('.form_type_add-place');
  addPlaceForm.addEventListener('submit', addPlace);
}

initForm();

function updateProfile(evt) {
  evt.preventDefault();
  const profileInfo = document.querySelector('.profile__info');
  const nameInput = document.querySelector('.form__input_type_name');
  const jobInput = document.querySelector('.form__input_type_job');
  const profileTitle = profileInfo.querySelector('.profile__title');
  const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

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
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('.element__delete-button');
  const cardList = document.querySelector('.elements__list');

  cardImage.src = item.link;
  cardImage.alt = item.name;

  cardTitle.textContent = item.name;

  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  cardDeleteButton.addEventListener('click', deleteCard);

  cardImage.addEventListener('click', initImagePopup);

  cardList.prepend(cardElement);
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function initImagePopup(evt) {
  const imagePopup = document.querySelector('.image-place__image');
  const imageCaption = document.querySelector('.image-place__caption');

  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;

  openModalWindow(evt);
}
