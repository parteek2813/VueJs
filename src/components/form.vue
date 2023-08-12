<template lang="html">
  <div class="heading">
    <h1>Simple Form</h1>
    <form>
      <div>
        <p>{{ form }}</p>
        <label for="email">Email</label>
        <!-- There are two methods of defining and getting the value from 
        the input box.... one way is to define [v-model=data.state or form.email] is this case
        v-model in simple language creates a two way binding
        another way is to use the vue 2.0 things like first? define the value as the form.email
         :value="form.email"
         then send the input in this form to update the form.email property value
        -->
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          v-model="form.email"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          v-model="form.password"
        />
      </div>

      <br />

      <select v-model="form.country">
        <option>India</option>
        <option>China</option>
        <option>Japan</option>
      </select>

      <br />

      <h3>technology</h3>
      <label>Java</label>
      <input type="checkbox" value="Java" v-model="form.technology" />
      <br />

      <label>Kotlin</label>
      <input type="checkbox" value="Kotlin" v-model="form.technology" />

      <h3>Gender</h3>
      <label>Male</label>
      <input type="checkbox" value="Male" v-model="form.gender" />
      <br />

      <label>Female</label>
      <input type="checkbox" value="Female" v-model="form.gender" />

      <button v-on:click="login" type="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: [],
      },
    };
  },
  methods: {
    login() {
      console.log("Login data", this.form);
    },
  },
};
</script>

<style>
.heading {
  display: flex;
  flex-direction: column;
}
</style>
