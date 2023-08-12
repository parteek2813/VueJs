<template>
  <Modifiers />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomeCom from "./components/HomeCom.vue";
import Function from "./components/Function.vue";
import Checkboxes from "./components/Checkbox.vue";
import IfElse from "./components/IfElse.vue";
import Parent from "./components/Parent.vue";
import Home from "./components/Home.vue";
import HtmlBind from "./components/HtmlBind.vue";
import ClassBind from "./components/ClassBind.vue";
import User from "./components/User.vue";
import ref from "./components/ref.vue";
import Form from "./components/form.vue";
import Modifiers from "./components/Modifiers.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomeCom,
    Function,
    Checkboxes,
    IfElse,
    Parent,
    Home,
    HtmlBind,
    ClassBind,
    User,
    ref,
    Form,
    Modifiers,
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
