<template lang="">
  <h1>Reuse Component</h1>
  <ul>
    <li v-for="item in users" :key="item.name">
      <User :data="item" :getData="getData" />
    </li>
  </ul>
</template>
<script>
import User from "./UserCom.vue";
export default {
  name: "Home",
  components: {
    User,
  },
  methods: {
    getData(name) {
      alert(name);
    },
  },
  data() {
    return {
      users: [
        { name: "Parteek", email: "parteek@gmail.com" },
        { name: "sam", email: "sam@gmail.com" },
        { name: "peter", email: "peter@gmail.com" },
        { name: "bruce", email: "bruce@gmail.com" },
      ],
    };
  },
};
</script>
<style lang=""></style>
