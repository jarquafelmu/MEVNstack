import store from '../store'


function isLoggedIn() {
  const token = localStorage.getItem(`token`)
  return !!token; // does token exist?
}

function login() {
  const token = {
    username: 'Sam'
  }
  setToken(token)
}

function setToken(token) {
  localStorage.setItem(`token`, JSON.stringify(token));
  store.dispatch(`authentication`);
}

function getUsername() {
  return 'Sam'
}

function getUserId() {
  return 1;
}

export default {
  isLoggedIn,
  login,
  setToken,
  getUsername,
  getUserId
}
