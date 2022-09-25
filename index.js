// Import stylesheets
import './css/style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Body element
const body = document.getElementById('body');

// Button elements
const btnSend = document.getElementById('btnSend');
const btnClose = document.getElementById('btnClose');
const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnScanCode = document.getElementById('btnScanCode');
const btnOpenWindow = document.getElementById('btnOpenWindow');
const sectionContainer = document.querySelector('.section-container');
const bookletButton = document.querySelector('.booklet-btn');

let bookletId = 0;
const editIcon = '&#128394';

function getUserProfile() {
  // email = liff.getDecodedIDToken().email;
  informations.push({ email: 'ying@gmail.com', username: 'ying' });
}

function handleEditBooklet(bookletId) {}

function handleAddBooklet(info) {
  // Create new booklet element
  const bookletContainer = document.createElement('div');
  bookletContainer.className = 'booklet-container';
  bookletContainer.id = `booklet-container-${info.id}`;

  const editIconElement = document.createElement('div');
  editIconElement.className = 'edit-icon';
  editIconElement.id = `booklet-${info.id}-edit`;
  editIconElement.innerHTML = editIcon;

  // Append username label
  const usernameLabelElement = document.createElement('p');
  usernameLabelElement.innerHTML = 'Username';

  // Append username value
  const usernameValueElement = document.createElement('div');
  usernameValueElement.id = 'uname-value';
  usernameValueElement.innerHTML = info.username;

  // Append email label
  const emailLabelElement = document.createElement('p');
  emailLabelElement.innerHTML = 'Email';

  const emailValueElement = document.createElement('div');
  emailValueElement.id = 'email-value';
  emailValueElement.innerHTML = info.email;
  // Append email value

  bookletContainer.appendChild(editIconElement);
  bookletContainer.appendChild(usernameLabelElement);
  bookletContainer.appendChild(usernameValueElement);
  bookletContainer.appendChild(emailLabelElement);
  bookletContainer.appendChild(emailValueElement);
  sectionContainer.appendChild(bookletContainer);
}

bookletButton.addEventListener('click', handleAddBooklet);

// Profile elements
const emailElement = document.getElementById('email');
const emailValue = document.getElementById('email-value');
const unameValue = document.getElementById('uname-value');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendShip');

// Variables
let informations = [];

const firebaseConfig = {
  apiKey: 'AIzaSyDHkvn5se2FhqQiZ02ZD2AAqubuI_XrFdE',
  authDomain: 'vaccinebookletth.firebaseapp.com',
  projectId: 'vaccinebookletth',
  storageBucket: 'vaccinebookletth.appspot.com',
  messagingSenderId: '398820469301',
  appId: '1:398820469301:web:059331155061e400621f7c',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function renderBooklet() {
  informations.forEach((info) => {
    handleAddBooklet(info);
  });
}

function main() {
  getUserProfile();
  // Initialize LIFF app
  // Try a LIFF function
  // liff
  //   .init({
  //     liffId: '1657232886-jobROLBJ',
  //     withLoginOnExternalBrowser: true,
  //   })
  //   .then(() => console.log('success'))
  //   .catch(() => console.log('error'));
  // if (liff.isInClient()) {
  //   //mobile
  //   await liff.init({
  //     liffId: '1657232886-jobROLBJ',
  //     withLoginOnExternalBrowser: true,
  //   });
  //   getUserProfile();
  // } else {
  //   //pc
  //   await liff.init({
  //     liffId: '1657232886-jobROLBJ',
  //   });
  //   if (liff.isLoggedIn()) {
  //     getUserProfile();
  //   } else {
  //     console.log('not logged in');
  //     liff.login();
  //   }
  // }
  renderBooklet();
}

async function firebase() {
  db.collection('Accounts')
    .doc(email)
    .collection('myBooklet')
    .doc(personalInfo)
    .set({
      birthday: bod,
      displayName: dName,
      email: mail,
      gender: sex,
      userId: id,
      userName: uName,
    });
}

main();

// const forms = document.querySelector('.forms'),
//   links = document.querySelectorAll('.link');
// //links = document.querySelectorAll(".link");

// //links.forEach(link => {
// //link.addEventListener("click", e => {
// //  e.preventDefault(); //preventing form submit
// //  forms.classList.toggle("show-signup");
// // })
// // })
// links.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault(); //preventing form submit
//     forms.classList.toggle('show-signup');
//   });
// });
