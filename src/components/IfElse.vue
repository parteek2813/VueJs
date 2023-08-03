<template lang="">
  <h1 v-if="show">If Condtion</h1>
  <h1 v-else>else Condtion</h1>
  <button v-on:click="show = !show">Toggle</button>
</template>
<script>
export default {
  name: "IfElse",
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style lang=""></style>
