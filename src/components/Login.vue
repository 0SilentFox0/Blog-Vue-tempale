<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" @submit.prevent="login">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label><br />
                <input
                  required
                  v-model="username"
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br />
                <input
                  required
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-info btn-md submit__button"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </div>
      </div>
    </div>
  </div>
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
      localStorage.token = req.data.token;
      this.$router.replace(this.$route.query.redirect || "/");
    },
    loginFailed() {
      this.error = "Login Failed";
      delete localStorage.token;
    }
  },
  updated() {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || "/");
    }
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>
