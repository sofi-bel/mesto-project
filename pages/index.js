let profile = document.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');

editButton.addEventListener('click', openModalWindow);
closeButton.addEventListener('click', closeModalWindow);
formElement.addEventListener('submit', formSubmitHandler);

function openModalWindow() {
  popup.classList.add('popup_opened');
}

function closeModalWindow() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let profileTitle = profileInfo.querySelector('.profile__title');
  let profileSubtitle = profileInfo.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeModalWindow();
}
