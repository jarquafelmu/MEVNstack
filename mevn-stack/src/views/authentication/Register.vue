<template>
  <div>
    <h1>Register Route</h1>
    <form class="custom-form" @submit.prevent="onSubmit">
      <div class="mb-3 form-group">
        <label for="first">First Name</label>
        <input
          v-model="first"
          type="text"
          class="form-control"
          id="first"
          aria-describedby="first"
          placeholder="First Name"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="last">Last Name</label>
        <input
          v-model="last"
          type="text"
          class="form-control"
          id="last"
          aria-describedby="last"
          placeholder="Last Name"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Username"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-secondary">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
import * as auth from "../../services/AuthService";
export default {
  name: "Register",
  data: function () {
    return {
      username: ``,
      password: ``,
      first: ``,
      last: ``,
    };
  },
  methods: {
    onSubmit: async function () {
      const user = {
        username: this.username,
        password: this.password,
        first: this.first,
        last: this.last,
      };
      // register user
      const registerPromise = auth.registerUser(user);
      // immediently log user in
      const loginPromise = auth.login(user);
      try {
        // wait for both to finish
        await Promise.all([registerPromise, loginPromise]);
        // navigate to home
        this.$router.push({ name: `home` });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
