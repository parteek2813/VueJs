<!-- <template>
  <div>
    <h1>Reuse Component {{ name }}</h1>
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
  data(){
    console.warn("created");
    return {
      name: "Parteek"
    }
  },
  beforeCreate() {
   
    alert("Before created") 
  },
  created(){
    this.name= "sidhu"
    alert("Created")
  }
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style> -->


<template lang="">
  <h1>Home component</h1>
  <button v-on:click="show=!show">Toggle</button>
  <User v-if="show" />
</template>
<script>
import User from './User.vue';
export default {
  name: "Home",
  data(){
    return {
      show: true,
    }
  },
  components: {
    User
  }
}

</script>
<style lang="">
  
</style>


<!-- Flow of before create, and created -->

<!-- 
Before anyhting the beforecreated function will be called and executed
and now once this  function is executed then the component will execute its js 
and at the end when all js loaded then created() function will be called
 -->

 <!-- Interview question  -->

 <!-- 
  Will the property changed inside the beforecreated function will alter the 
  property value defined inside the data() function.....?

  In Vue.js, the beforeCreate lifecycle hook is called before an instance is created and 
  before data observation and event/watcher setup. This means that any changes you make to
  properties inside the beforeCreate hook will not affect the properties defined inside 
  the data() function.

  The data() function is used to define the initial data properties of a Vue component, 
  and Vue's reactivity system is set up based on these initial properties. Any changes 
  made directly to properties within the data() function will be tracked and trigger reactivity.

  However, changes made inside the beforeCreate hook will not trigger reactivity and will 
  not be reflected in the component's template. If you want to modify the initial data 
  properties or perform some setup before the component is created, it's better to do 
  so within the created hook, which is called after the instance has been created and 
  data observation has been set up.
  -->