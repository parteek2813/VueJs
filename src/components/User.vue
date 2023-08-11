<template>
  <div>
    <h2>User component</h2>
    <button v-on:click="sendUserName">Send User Name</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return { userName: "Kirmada" };
  },
  methods: {
    sendUserName() {
      this.$emit("send-user-name", this.userName);
    },
  },
};
</script>

<style scoped></style>
