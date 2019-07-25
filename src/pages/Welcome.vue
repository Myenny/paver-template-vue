<template>
  <div class="container box">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">WELCOME</h1>
          <h2 class="subtitle">You are checked in {{ fullName }}</h2>
          <input v-model="fullName" />
          <button v-on:click="welcome">Welcome Message</button>
          <h1 v-for="post in posts" v-bind:key="post.id" v-bind:post="post">{{post.title}}</h1>
          <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise,
    checked: Boolean
  },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      message: "Hello Vue!",
      firstName: "Foo",
      lastName: "Bar",
      fullName: ""
    };
  },
  methods: {
    welcome: function() {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.fullName + "!");
      // `event` is the native DOM event
    }
  }
};
</script>

<style>
</style>
