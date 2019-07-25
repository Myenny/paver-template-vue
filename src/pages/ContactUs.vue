<template>
  <div class="box">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us</h1>
        </div>
      </div>
    </section>
    <br />
    <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
  </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  }
};
</script>

<style>
</style>
