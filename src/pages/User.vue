<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Users</h1>
        </div>
      </div>
    </section>
    <br />
    <div class="columns is-narrow">
      <div class="column is-one-fifth">
        <!-- <div v-for="(data) in users.users" v-bind:key="data.id"> -->
        <div v-for="(data) in values" v-bind:key="data.id">
          <br />
          <!-- <a class="button is-primary" v-on:click="retrieveUser(data.index)">{{ data.fullName }}</a> -->
          <a class="button is-primary">{{ data.fullName }}</a>
        </div>
      </div>

      <div class="container is-centered">
        <br />

        <table class="table is-bordered has-text-centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Company</th>
              <th>Purpose for Visit</th>
              <th>Person/Dept Visiting</th>
              <th>US Citizen</th>
              <th>Classified Visit</th>
              <th>Badge ID</th>
            </tr>
            <tr v-for="(data, id) in values" v-bind:key="id">
              <!-- <td>{{ currentUser.fullname }}</td>
              <td>{{ currentUser.date }}</td>
              <td>{{ currentUser.company }}</td>
              <td>{{currentUser.purpose}}</td>
              <td>{{currentUser.personvisiting}}</td>-->
              <td>{{ data.fullName }}</td>
              <td>{{ data.date }}</td>
              <td>{{ data.company }}</td>
              <td>{{ data.personvisiting}}</td>
              <td>{{ data.purpose}}</td>
              <td>
                <!-- <div v-if="currentUser.UScitizen.bool">Yes</div>
                <div v-else>No</div>-->
              </td>
              <td>
                <!-- <div v-if="currentUser.classifiedvisit.bool">No</div>
                <div v-else>Yes</div>-->
              </td>
              <td>{{data.badge}}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
// import users from "@/assets/fake.json";
// import UserClass from "@/models/UserClass.js";

export default {
  name: "User",
  data() {
    return {
      // users: users,
      values: [],
      userlist: localStorage.getItem.fullName
      // firstname: users.users[0].name,
      // lastname: users.users[0].lastname,
      // currentUser: users.users[0]
    };
  },
  mounted() {
    this.getKeys();
  },
  methods: {
    // retrieveUser(index) {
    //   this.values.forEach(element => {
    //     if (element.index === index) {
    //       let tempV = JSON.parse(localStorage.getItem(index));
    //       this.values = element;

    //       this.values.push(tempV);
    //     }
    //   });
    //   console.log(tempV);
    // },
    getKeys() {
      let keys = Object.keys(localStorage);
      this.localStorageUser(keys);
    },
    localStorageUser(userKeys) {
      userKeys.forEach(key => {
        if (key !== "loglevel:webpack-dev-server") {
          let tempV = JSON.parse(localStorage.getItem(key));

          this.values.push(tempV);
        }
      });
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>