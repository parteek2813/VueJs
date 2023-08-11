<template>
  <div>
    <h1>Reuse Component</h1>
    <User @send-user-name="handleUserName" />
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Home",
  components: {
    User,
  },
  methods: {
    handleUserName(name) {
      alert(name);
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
