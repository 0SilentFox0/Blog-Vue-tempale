<template>
  <section id="sign-up">
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Sing up</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">
          <form class="sign-up-form" @submit.prevent="signUp">
            <input
              required
              v-model="username"
              type="text"
              name="username"
              class="form-control"
              placeholder="Name"
            />
            <input
              type="email"
              required
              v-model="email"
              name="email"
              class="form-control"
              placeholder="Email"
            />
            <input
              type="password"
              required
              v-model="password"
              name="password"
              class="form-control"
              placeholder="Password"
            />
            <input
              type="password"
              required
              v-model="password2"
              name="password2"
              class="form-control"
              placeholder="Confirm password"
            />
            <button type="submit" class="btn btn-block btn-dark">
              Create Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "sign-up",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      password2: null,
      error: false
    };
  },
  methods: {
    signUp() {
      this.$http
        .post("account/register/", {
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2
        })
        .then(() =>
          this.$router.replace(this.$route.query.redirect || "/login")
        )
        .catch(err => console.dir(err));
      // this.failSign(err.response.data)
    },
    failSign(err) {
      let firstKey = Object.keys(err)[0];
      this.error = err[firstKey][0];
    }
  }
};
</script>
