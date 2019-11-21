<template>
  <section id="login">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Log in</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">
          <form class="login-form" @submit.prevent="login">
            <input
              required
              v-model="username"
              type="text"
              name="username"
              class="form-control"
              placeholder="Username"
            />
            <input
              required
              v-model="password"
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            />
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <button class="btn btn-dark btn-block">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      username: null,
      password: null,
      error: false
    };
  },
  methods: {
    login() {
      this.$http
        .post("account/token/", {
          username: this.username,
          password: this.password
        })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed());
    },
    loginSuccessful(req) {
      if (!req.data.access) {
        this.loginFailed();
        return;
      }
      this.error = false;
      localStorage.token = req.data.access;
      localStorage.refresh = req.data.refresh;
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.token;
      this.$router.replace(this.$route.query.redirect || "/");
    },
    loginFailed() {
      this.error = "Wrong login or password";
      delete localStorage.token;
      delete this.$http.defaults.headers.common["Authorization"];
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
.login-form label {
  width: 100%;
  margin: 0;
}
</style>
