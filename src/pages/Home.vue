<template>
  <div class="container box">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">WELCOME</h1>
        </div>
      </div>
    </section>
    <p>
      SPATHE SYSTEMS IS AN INFORMATION TECHNOLOGY FOCUSED PROFESSIONAL
      SERVICES PROVIDER FOR GOVERNMENT AND COMMERCIAL CUSTOMERS.
    </p>
    <br />
    <div class="container">
      <input
        class="input is-rounded is-medium"
        v-model="userName"
        type="text"
        placeholder="Full Name"
      />
    </div>
    <br />
    <a class="button is-success is-large" v-on:click="gotoRegister()">
      <span>Check in</span>
    </a>
  </div>
</template>

<script>
import users from "@/assets/fake.json";

export default {
  name: "Home",
  data: () => ({
    userName: ""
  }),

  mounted() {
    if (localStorage.userName) {
      this.userName = localStorage.userName;
    }
  },
  methods: {
    gotoRegister() {
      this.checkUser();
      this.$router.push({ name: "Register" });
      localStorage.userName = this.userName;
      console.log(this.userName);
    },
    checkUser() {
      let _fullname = "";
      let _email = "";
      let _gender = true;
      users.users.forEach(element => {
        if (element.fullname === this.userName) {
          _fullname = element.fullname;
          _email = element.email;
          _gender = element.UScitizen;
        }
      });
      localStorage.existing_fullname = _fullname;
      localStorage.existing_email = _email;
      localStorage.existing_gender = _gender;
    }
  }
};
</script>

<style>
.welcome {
  font-size: 45px;
}

.input {
  width: 400px;
}
</style>
