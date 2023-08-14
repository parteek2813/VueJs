<!-- <template>
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

<style scoped></style> -->

<!-- <template lang="">
  <h1 ref="count">{{counter}}</h1>
  <button v-on:click="counter=counter+1">Update Count</button>
</template>
<script>
export default {
  name: "User",
  data(){
    return {
      counter: 0
    }
  },
  beforeUpdate(){
    console.log("BeforeUpdate", this.$refs["count"].textContent);
  },
  updated(){
    console.log("updated", this.$refs["count"].textContent);
  }
}
</script>
<style lang="">
</style> -->


<template lang="">
  <h1 ref="user">User component</h1>
</template>
<script>
export default {
  name: "User",
  data(){
    return{
      title: "User",
    }
  },
  beforeUnmount(){
    console.log("beforeunmounted", this.$refs["user"]);
  },
  unmounted(){
    console.log("Unmounted", this.$refs["user"]);
  }
}
</script>
<style scoped>
  
</style>

<!-- Interview question -->

<!-- 
  QUESTION: Does beforeUpdate and update calls on property value change or 
  the UI value changes?

  They call on the UI value changes and the difference betweent the 
  two can be understood by the UI changes only.


  MORE DETAILED:
  
In Vue.js, the beforeUpdate and updated lifecycle hooks are called when the component's data changes and causes a re-render of the component, resulting in a change in the UI. These hooks are related to the reactivity mechanism of Vue, which tracks changes to data properties and automatically updates the UI to reflect those changes.

Here's how these hooks work:

beforeUpdate: This hook is called before the component's DOM is patched 
(updated) with the new data values and before the updated component is 
re-rendered in the UI. It's a good place to perform any necessary 
cleanup or preparations before the update.

updated: This hook is called after the component's DOM has been updated 
with the new data values and after the updated component has been re-rendered 
in the UI. It's a suitable place to interact with the updated DOM or perform 
additional actions that need to happen after the update.


QUESTION:  Difference between the beforeUNmounted and unmounted?

in one of them, the component will be available in the beforeUNmounted one and 
in the unmounted one, the component will not be available

Before unmounted runs first and then the unmounted will be called.

 -->

