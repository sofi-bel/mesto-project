const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');

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
  const profileTitle = profileInfo.querySelector('.profile__title');
  const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeModalWindow();
}
