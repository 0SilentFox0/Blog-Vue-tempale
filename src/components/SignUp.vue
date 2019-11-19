<template>
  <div class="container">
    <div class="col-md-6 mx-auto text-center">
      <div class="header-title"></div>
    </div>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="myform form ">
          <form action="" method="post" name="login" @submit.prevent="login">
            <div class="form-group">
              <input
                type="text"
                name="name"
                required
                v-model="username"
                class="form-control my-input"
                id="name"
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
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                required
                v-model="password"
                name="pswd"
                id="pswd"
                class="form-control my-input"
                placeholder="********"
                pattern="\w{8}"
                title="8 character password"
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
</template>

<script>
export default {
  name: "SignUp",
  // data() {
  //   return {
  //     access: null,
  //     refresh: null
  //   }
  // },
  // method: {
  //   signup() {
  //     this.$http.post("account/token/",{
  //       access: this.access,
  //       refresh: this.refresh
  //     })
  //   }
  // }
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
