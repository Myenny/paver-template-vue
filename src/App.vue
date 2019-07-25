<template>
  <div id="app">
    <NavBar />
    <Footer />

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/pages/NavBar.vue";
import Footer from "@/components/pages/Footer.vue";
import router from "./router.js";
// import Home from "@/components/pages/Home.vue";

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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
