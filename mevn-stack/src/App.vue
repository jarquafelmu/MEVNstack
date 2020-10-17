<template>
  <div>
    <Navbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="app-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>
