<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            alt="Vue logo"
            src="../assets/logo.png"
            style="max-height: 25px"
          />
          Task Manager</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li v-if="$store.state.isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/tasks">Tasks</router-link>
            </li>
            <li v-if="!$store.state.isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/register">
                Register
              </router-link>
            </li>
            <li v-if="!$store.state.isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="$store.state.isLoggedIn" class="nav-item">
              <a @click="logout()" class="nav-link" href="#">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {{ username }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import * as auth from "../services/AuthService";

export default {
  name: `Navbar`,
  computed: {
    username() {
      return this.$store.state.username ? this.$store.state.username : "User";
    },
  },
  methods: {
    logout: function () {
      auth.logout();
      this.$router.push({ name: "home" });
    },
  },
};
</script>
