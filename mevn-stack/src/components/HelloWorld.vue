<template>
  <div class="container custom-bg-dark p-4">
    <h1 class="display-4">MEVN Stack Task Manager</h1>
    <p class="lead">
      This is a sample task manager application, built with MongoDB, ExpressJS,
      VueJS, and NodeJS technologies.
    </p>
    <hr class="my-y" />
    <p>Click below to being managing tasks for users</p>
    <router-link class="btn btn-success btn-lg" to="/tasks">
      View Tasks
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
