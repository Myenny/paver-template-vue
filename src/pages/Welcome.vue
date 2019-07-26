<template>
  <div>
    <div class="columns">
      <!-- first column -->
      <div class="column">
        <section class="section">
          <h1 class="title">Title</h1>
          <p
            class="box"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, qui fugiat laboriosam vel odit debitis animi assumenda aperiam eveniet aspernatur facere dolorum omnis officiis pariatur a, aliquid eum nam! Saepe!</p>
          <h2 class="title is-2">Contact Us Today for Free Stuff</h2>
          <a @click="fullSizeImg()" class="button is-info">Button</a>
        </section>
      </div>
      <!-- second column -->
      <div class="column">
        <div class="container">
          <section class="section">
            <figure class="image is-1by1">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </section>

          <section class="section">
            <div class="columns is-multiline">
              <!-- modal -->
              <div :class="{'is-active':showModal}" class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <p class="image is-5by4">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </div>
                <button @click="modalClose()" class="modal-close is-large" aria-label="close"></button>
              </div>
              <!-- modal -->
              <div class="column is-one-quarter-desktop is-half-tablet">
                <figure @click="showModal = true" class="image is-square">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>

              <div class="column is-one-quarter-desktop is-half-tablet">
                <figure class="image is-square">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>

              <div class="column is-one-quarter-desktop is-half-tablet">
                <figure class="image is-square">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>

              <div class="column is-one-quarter-desktop is-half-tablet">
                <figure class="image is-square">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    modalClose() {
      this.showModal = false;
    },
    callNow() {
      // this.$toast.open({
      //   message: "Something happened correctly!",
      //   type: "is-success"
      // });
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: #0083e8;
  font-family: "Georgia", Sans-serif;
  text-transform: uppercase;
  font-size: 39px;
}

section {
  padding-top: 30px;
  padding-bottom: 0px;
}
.box {
  color: white;
  background-color: #0083e8;
}
</style>
