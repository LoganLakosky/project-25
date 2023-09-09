const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')


const popup = document.querySelector('.popup-menu');
const popupOpen = document.querySelector('.popup-btn');
const popupClose = document.querySelector('.close1');


const area = document.getElementById("area");
const background = document.querySelector(".popup-area-bg");
const close2 = document.querySelector(".close2");


loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup() {
 popup.style.display = 'block'
}

function closePopup() {
  popup.style.display = 'none'
 }


 area.addEventListener('click', openArea);
 close2.addEventListener('click', closeArea);


 function openArea() {
  background.style.display = 'block'
 }

 function closeArea() {
  background.style.display = 'none'
 }