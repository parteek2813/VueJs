<!-- <template lang="">
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

<style lang=""></style> -->

<template lang="">
  <h1>For loop in Vue Js</h1>
  <ul>
    <li v-for="item in technology" key="item">{{ item }}</li>
  </ul>

  <br />
  <ul>
    <li v-for="item in user" key="item.name">
      Name is : {{ item.name }} <br />
      Email is: {{ item.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "IfElse",
  data() {
    return {
      technology: ["Java", "Php", "JavaScript", "Node"],
      user: [
        { name: "Parteek", email: "parteek@gmail.com" },
        { name: "John", email: "John@gmail.com" },
        { name: "sam", email: "sam@gmail.com" },
        { name: "joe", email: "joe@gmail.com" },
      ],
    };
  },
};
</script>
<style lang=""></style>
