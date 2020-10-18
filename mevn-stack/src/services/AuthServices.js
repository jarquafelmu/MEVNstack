import store from '../store'


export function isLoggedIn() {
  const token = localStorage.getItem(`token`)
  return !!token; // does token exist?
}

export function login() {
  const token = {
    username: 'Sam'
  }
  setToken(token)
}

export function setToken(token) {
  localStorage.setItem(`token`, JSON.stringify(token));
  store.dispatch(`authenticate`);
}

export function getUsername() {
  return 'Sam'
}

export function getUserId() {
  return 1;
}

export default {
  isLoggedIn,
  login,
  setToken,
  getUsername,
  getUserId
}
