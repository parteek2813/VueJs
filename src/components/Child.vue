<template lang="">
  <h1>Child Component</h1>
  <h2>{{ name }}</h2>
  <h2>{{ user.name }}</h2>
  <button v-on:click="getData()">Child Button</button>
</template>
<script>
export default {
  name: "Child",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
};
</script>
<style lang=""></style>
