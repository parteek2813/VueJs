<template>
  <!-- <button @click="changeTab"> Show next component</button>
  <component :is="currentComponent"></component> -->
  <User />
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
import p1 from "./components/p1.vue";
import Watcher from "./components/watcher.vue";
import Slots from "./components/Slots.vue";

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
    Slots,
    ref,
    Form,
    Modifiers,
    p1,
    Watcher,
    Slots
    },
    data(){
      return{
        components: [
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
        Slots,
        ref,
        Form,
        Modifiers,
        p1,
        Watcher,
        Slots
        ],
        currentComponentIndex: 0
      }
    },
    computed: {
      currentComponent(){
        return this.components[this.currentComponentIndex]
      }
    },
    methods:{
      changeTab(){
        this.currentComponentIndex = (this.currentComponentIndex + 1) % this.components.length
      }
    }
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
