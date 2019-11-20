<template>
  <div id="signUp">
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div class="container">
      <div class="col-md-6 mx-auto text-center">
        <div class="header-title"></div>
      </div>
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="myform form ">
            <form name="login" class="form" @submit.prevent="signUp">
              <div class="form-group">
                <input
                  required
                  v-model="username"
                  type="text"
                  name="username"
                  class="form-control my-input"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  required
                  v-model="email"
                  name="email"
                  class="form-control my-input"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  required
                  v-model="password"
                  name="pswd"
                  class="form-control my-input"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  required
                  v-model="password2"
                  name="pswd2"
                  class="form-control my-input"
                  placeholder="Confirm password"
                />
              </div>
              <div class="text-center ">
                <button type="submit" class=" btn btn-block send-button tx-tfm">
                  Create Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signUp",
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
        .then(() => this.$router.replace(this.$route.query.redirect || "/"))
      .catch(err => this.failSign(err.response.data));
    },
    failSign(err) {
      let firstKey = Object.keys(err)[0];
      this.error = err[firstKey][0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.send-button {
  background: rgb(32, 161, 241);
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 8px 25px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.my-input {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: text;
  padding: 8px 10px;
  transition: border 0.1s linear;
}

.header-title {
  margin: 5rem 0;
}

h1 {
  font-size: 31px;
  line-height: 40px;
  font-weight: 600;
  color: #4c5357;
}

h2 {
  color: #5e8396;
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
