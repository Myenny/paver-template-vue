<template>
  <div>
    <nav class="navbar is-fixed-bottom">
      <button @click="callPhone" class="button is-large is-fullwidth is-success">
        <span class="icon is-small">
          <i class="fas fa-phone-alt fa-fw"></i>
        </span>
        <h1>Call Now!</h1>
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

<style scoped="scss">
button {
  padding-top: 20px;
}
</style>
