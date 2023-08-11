<template lang="">
  <input type="text" ref="input" />
  <button v-on:click="printData">Click me</button>
</template>
<script>
export default {
  name: "ref",
  methods: {
    printData() {
      const a = this.$refs.input.value;
      console.log(a);
    },
  },
};
</script>
<style lang=""></style>
