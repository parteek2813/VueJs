<template>
  <HelloWorld msg="Welcome to vue js" />
  <HomeCom />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomeCom from "./components/HomeCom.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomeCom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
