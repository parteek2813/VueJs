<template lang="">
  <h1>{{ text }}</h1>
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
</template>
<script>
export default {
  name: "HtmlBind",
  data() {
    return {
      text: "Parteek kumar",
      tag: "<h1>Parteek kumar</h1>",
      tag2: "<h1>Hello world</h1>",
    };
  },
};
</script>
<style lang=""></style>
