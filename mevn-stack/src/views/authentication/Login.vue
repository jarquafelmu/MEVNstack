<template>
  <div>
    <h1>Login Route</h1>
    <form class="custom-form">
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
