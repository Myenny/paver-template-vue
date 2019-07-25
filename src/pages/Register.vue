<template>
  <div class="container">
    <section class="container is-centered">
      <div class="box">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">VISITOR REGISTRATION</h1>
            </div>
          </div>
        </section>
        <div class="container field">
          <label class="label">Full Name:</label>
          <div class="control">
            <input class="input" v-model="fullName" type="text" placeholder="Full Name" />
          </div>

          <div class="container field">
            <label class="label">Email:</label>
            <div class="control">
              <input class="input" v-model="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="container field">
            <label class="label">Phone Number:</label>
            <div class="control">
              <input class="input" v-model="phone" type="phone" placeholder="Phone Number" />
            </div>
          </div>
          <div class="container field">
            <label class="label">Company:</label>
            <div class="control">
              <input class="input" v-model="company" type="company" placeholder="Company" />
            </div>
          </div>
          <div class="container field">
            <label class="label">Purpose for Visit:</label>
            <div class="control">
              <input class="input" v-model="purpose" type="purpose" placeholder="Purpose for Visit" />
            </div>
          </div>

          <div class="container field">
            <label class="label">Badge ID:</label>
            <div class="control">
              <input class="input" v-model="badge" type="badge" placeholder="Badge ID" />
            </div>
          </div>

          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{{lvlofEd}}</span>
                <span class="icon is-small"></span>
              </button>
            </div>
            <div class="dropdown-menu" ref="drop" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a v-on:click="dropUpdate('noob')" class="dropdown-item">Noob</a>
                <a v-on:click="dropUpdate('wizard')" class="dropdown-item">Wizard</a>
                <a v-on:click="dropUpdate('Super noob')" class="dropdown-item">Super Noob</a>
                <a
                  v-on:click="dropUpdate('Wizard of the wizards')"
                  class="dropdown-item"
                >Wizard of the wizards</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container field">
          <a class="button is-success is-medium" v-on:click="gender = !gender">
            <div v-if="gender">Female</div>
            <div v-else>Male</div>
          </a>
        </div>
      </div>

      <a class="button is-success is-large" v-on:click="getFormValues()">
        <span>Submit</span>
      </a>
    </section>
  </div>
</template>


<script>
import UserClass from "@/assets/models/UserClass.js";
// import { EventBus } from "../models/eventbus.js";

export default {
  name: "Home",
  data: () => ({
    // users: users,
    fullName: localStorage.existing_fullname,
    email: localStorage.existing_email,
    phone: "",
    company: "",
    purpose: "",
    visiting: "",
    citizen: "",
    badge: "",
    classified: "",
    lvlofEd: "Level of Education",
    gender: localStorage.existing_gender,
    arr: []
  }),
  methods: {
    getFormValues() {
      const user = new UserClass();
      user.fullName = this.fullName;
      user.email = this.email;
      user.phone = this.phone;
      user.lvlofEd = this.lvlofEd;
      user.gender = this.gender;
      user.company = this.company;
      user.purpose = this.purpose;
      user.visiting = this.visiting;
      user.badge = this.badge;
      user.citizen = this.citizen;
      user.classified = this.classified;
      user.date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      // this.arr.push(user);
      // const data = JSON.stringify(this.arr);
      // window.localStorage.setItem("arr", data);
      localStorage.setItem(`${user.fullName}`, JSON.stringify(user));
    },

    dropUpdate(lvl) {
      this.lvlofEd = lvl;
    }
  }
};
</script>

<style>
.reg {
  font-size: 50px;
}
.columns {
  height: 40px;
  margin-left: 8px;
  margin-top: 5px;
  margin-right: 7px;
}

.field {
  width: 50px;
}
</style>
