<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import router from "./router.js";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  },
  methods: {
    route: function(message) {
      router.push({ name: message });
    }
  }
};
</script>


<style>
html {
  background-color: #000519 !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000519;
}
</style>
