<template>
  <div>
    <nav class="navbar is-fixed-bottom">
      <button @click="callPhone" class="button is-large is-fullwidth is-primary">
        <span class="icon is-small">
          <i class="fas fa-phone-alt"></i>
        </span>
        Call Now!
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "9044654444"
    };
  },
  methods: {
    callPhone() {
      alert(this.phone);
    }
  }
};
</script>

<style>
</style>
