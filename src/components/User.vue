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

<template lang="">
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
</style>

<!-- Interview question -->

<!-- 
  Does beforeUpdate and update calls on property value change or 
  the UI value changes?

  They call on the UI value changes and the difference betweent the 
  two can be understood by the UI changes only.
 -->

