<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Email: {{ email }}</h2>
    <h3>Name {{ getName() }}</h3>
    <button @click="getEducation">Click me to get edu</button>
    <h3>Sum of two numbers: {{ calculateSum(1, 5) }}</h3>
    <h1>All data: {{ getData().email }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "Parteek1@gmail.com",
      getName: function () {
        return "Parteek kumar";
      },
    };
  },

  methods: {
    getEducation() {
      console.log("From education");
      return "Btech";
    },
    calculateSum(num1, num2) {
      return num1 + num2;
    },
    getData() {
      return {
        name: "Parteek",
        email: this.email,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: aqua;
}
</style>
