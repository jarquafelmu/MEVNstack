<template>
  <div>
    <h1>Login Route</h1>
    <form class="custom-form" @submit.prevent="onSubmit">
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
        <button type="submit" class="btn btn-secondary">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import * as auth from "../../services/AuthServices";
export default {
  name: "Login",
  data: function () {
    return {
      username: ``,
      password: ``,
    };
  },
  methods: {
    onSubmit: async function () {
      const user = {
        username: this.username,
        password: this.password,
      };

      try {
        await auth.login(user);
        this.$router.push({ name: `home` });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
