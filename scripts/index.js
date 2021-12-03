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
  }
}

function closeModalWindow(evt) {
  if(evt.target.classList.contains('popup__close-button_type_edit-profile')) {
    document.querySelector('.popup_type_edit-profile').classList.remove('popup_opened');
  } else if(evt.target.classList.contains('popup__close-button_type_add-place')) {
    document.querySelector('.popup_type_add-place').classList.remove('popup_opened');
  }
}

const formElement = document.querySelector('.form');
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  const profileInfo = document.querySelector('.profile__info');
  const nameInput = formElement.querySelector('.form__input_type_name');
  const jobInput = formElement.querySelector('.form__input_type_job');

  profileInfo.querySelector('.profile__title').textContent = nameInput.value;
  profileInfo.querySelector('.profile__subtitle').textContent = jobInput.value;

  closeModalWindow();
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
    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__image').alt = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;

    const cardLikeButton = cardElement.querySelector('.element__like-button');

    cardLikeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active');
    });

    const cardList = document.querySelector('.elements__list');
    cardList.append(cardElement);
  });
}

initCards();
