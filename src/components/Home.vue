<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="header__title text-info">One Story</h1>
          <div class="header__icons">
            <router-link to="/signUp">
              <i class="fas fa-user-plus"></i>
            </router-link>
            <router-link to="/login">
              <i class="fas fa-key"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <add-post />
    <post />
  </header>
</template>
<script>
import Post from "@/components/Post";
import AddPost from "@/components/AddPost";

export default {
  name: "home",
  components: { AddPost, Post },
  updated() {
    if (!localStorage.token && this.$route.path !== "/") {
      this.$router.push("/?redirect=" + this.$route.path);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
body {
  margin: 0 auto;
  padding: 0;
}

header {
  background: white;
  padding: 20px 0;
}

.header__title {
  font-size: 30px;
}

.header__icons {
  position: absolute;
  top: 15px;
  right: 10px;
}

.header__icons i {
  color: black;
}

.fa-sign-in-alt {
  margin-right: 10px;
}

.photo img {
  width: 60px;
  border-radius: 50%;
  margin: 10px 10px;
}
</style>
