<template>
  <Parent />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomeCom from "./components/HomeCom.vue";
import Function from "./components/Function.vue";
import Checkboxes from "./components/Checkbox.vue";
import IfElse from "./components/IfElse.vue";
import Parent from "./components/Parent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomeCom,
    Function,
    Checkboxes,
    IfElse,
    Parent,
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
