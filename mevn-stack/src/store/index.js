import { createStore } from 'vuex'
import * as auth from '../services/AuthServices'

export default createStore({
  state: {
    isLoggedIn: false,
    apiURL: `http://localhost:3000`,
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
    authenticate(context) {
      context.commit(`authenticate`)
    }
  },
  modules: {
  }
})
