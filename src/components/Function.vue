<!-- <template lang="">
  <h1 v-on:mousemove="getConsole()">Function Component</h1>
  <button v-on:click="getData('Button 1 clicked')">Click me</button>
  <button v-on:dblclick="getData('Button double clicked')">Click me</button>
  <h2>{{ count }}</h2>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getData(data) {
      this.count = this.count + 1;
    },
    getConsole() {
      console.log("function called");
    },
  },
};
</script>
<style lang=""></style> -->

<template lang="">
  <h1>Input field demo</h1>
  <input type="text" placeholder="enter email" v-model="email" />
  <br />
  <br />
  <input type="text" placeholder="enter password" v-model="password" />
  <br />
  <br />
  <button v-on:click="getData()" type="button">Get Values</button>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    getData() {
      console.log("value: ", this.email, this.password);
    },
  },
};
</script>
<style lang=""></style>
