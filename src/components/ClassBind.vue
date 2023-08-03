<template lang="">
  <h1>Class Binding</h1>
  <h2 class="otherclass" :class="applyStyles">Class Componenet</h2>
  <button v-on:click="colorful = !colorful">Appy style</button>
</template>
<script>
export default {
  name: "ClassBind",
  data() {
    return {
      colorful: true,
    };
  },
  computed: {
    applyStyles() {
      return {
        green: this.colorful,
        err: true,
        other: true,
      };
    },
  },
};
</script>
<style scoped>
.green {
  background-color: green;
  width: 200px;
  padding: 10px;
}
.err {
  color: red;
}
.other {
  font-size: 50px;
}
</style>

<!-- Interview Question -->

<!-- How to apply several dynamic classes in the vue? 


Answer: By using this syntax===> :class="{ green: colorful, err: true }
Or we can use the function too to seprate the logic in the function and then 
given the value based on the funtion too

-->
