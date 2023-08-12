<template lang="html">
  <div class="heading">
    <h1>Simple Form</h1>
    <form>
      <div>
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
          :value="form.email"
          @input="form.email = $event.target.value"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          :value="form.password"
          @input="form.password = $event.target.value"
        />
      </div>

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
