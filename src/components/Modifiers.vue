<template lang="">
  <h1>Form Modifiers</h1>
  <input type="number" v-model.lazy="data" />
  <h2>Data is: {{ typeof(data) }}</h2>
</template>
<script>
export default {
  name: "Modifiers",
  data() {
    return {
      data: "",
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>


<!-- INterview question -->

/**
Can we use more than one modifiers at a time?
Yes, you can use multiple modifiers at a time in Vue.js. Modifiers are 
special directives that can be used alongside Vue directives to add extra 
behavior or modify the default behavior of an element or component. When 
using multiple modifiers, you simply chain them together.

<!-- <input v-model.trim.number="myValue" /> -->

*/