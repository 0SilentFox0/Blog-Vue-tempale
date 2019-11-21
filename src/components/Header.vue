<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 header">
          <router-link to="/" class="header__link text-info">
            One Story
          </router-link>
          <div class="header__icons">
            <router-link to="/signUp" v-if="!isAuthorized">
              <i class="fas fa-user-plus text-info"></i>
            </router-link>
            <router-link to="/login" v-if="!isAuthorized">
              <i class="fas fa-key text-info"></i>
            </router-link>
            <a href="#" v-if="isAuthorized">
              <i class="fas fa-sign-in-alt text-info" @click="logout"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAuthorized:  localStorage.token !== undefined
    }
  },
  methods: {
    logout() {
      delete localStorage.token;
      delete localStorage.refresh;
      delete this.$http.defaults.headers.common["Authorization"];
      location.replace(location.origin);
    }
  }
};
</script>

<style scoped>
header {
  background: white;
  padding: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header__link {
  font-size: 25px;
  text-decoration: none;
}

.header__icons {
  display: flex;
  align-items: center;
}

.header__icons i {
  margin: 0 5px;
  font-size: 18px;
}
</style>
