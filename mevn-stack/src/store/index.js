import { createStore } from 'vuex'
import * as auth from '../services/AuthService'

export default createStore({
  state: {
    isLoggedIn: false,
    apiUrl: `http://localhost:3000/api`,
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.username = null;
        state.userId = null;
      }
    }
  },
  actions: {
    authenticate({ commit }) {
      commit(`authenticate`)
    }
  },
  modules: {
  }
})
