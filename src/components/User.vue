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
  beforeMount(){
    console.warn("before-mount", this.$el)
  },
  mounted(){
    console.warn("mounted", this.$el)
  }
};
</script>

<style scoped></style>
