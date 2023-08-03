<template lang="">
  <h1>Checkboxes</h1>
  <h3>Technology</h3>
  <label for="java">Java</label>
  <input type="checkbox" value="Java" id="java" v-model="technology" />

  <label for="php">Php</label>
  <input type="checkbox" value="php" id="php" v-model="technology" />

  <label for="node">Node</label>
  <input type="checkbox" value="node" id="node" v-model="technology" />

  <br />
  <br />

  <h3>Who i am</h3>
  <label for="student">Student</label>
  <input type="radio" value="student" v-model="who" id="student" name="who" />

  <label for="developer">Developer</label>
  <input
    type="radio"
    value="developer"
    v-model="who"
    id="developer"
    name="who"
  />

  <h4>Selected tech: {{ technology }}</h4>
  <h4>Who i am : {{ who }}</h4>
</template>

<script>
export default {
  name: "Checkboxes",
  data() {
    return {
      technology: [],
      who: null,
    };
  },
};
</script>

<style lang=""></style>
