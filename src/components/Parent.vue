<template lang="">
  <h1>Parent Component</h1>
  <Child name="Parteek Kumar" :user="user" :getData="getData" />
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      user: {
        name: "Parteek",
        email: "parteek@gmail.com",
      },
    };
  },
  methods: {
    getData() {
      console.log("Parent component called");
    },
  },
};
</script>
<style lang=""></style>
