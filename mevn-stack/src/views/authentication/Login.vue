<template>
  <div>
    <h1>Login Route</h1>
    <form class="custom-form" @submit="onSubmit">
      <div class="mb-3">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Username"
        />
      </div>
      <div class="mb-3">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { login } from "../../services/AuthServices";
export default {
  name: "Login",
  methods: {
    onSubmit: function (event) {
      event.preventDefault();
      login();
      this.$router.push({ name: `home` });
    },
  },
};
</script>
