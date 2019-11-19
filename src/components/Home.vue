<template>
  <div class="home">
    <section>
      <div class="container wrapper">
        <div class="row">
          <div class="col-12">
            <div class="header">
              <p class="home">Home</p>
              <div class="header__icons">
                <router-link to="/signUp">
                  <i class="fas fa-sign-in-alt"></i>
                </router-link>
                <router-link to="/login">
                  <i class="fas fa-key"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card mb-3">
              <div class="post d-flex">
                <div class="photo">
                  <img src="../assets/photo.jpg" class="card-img" alt="photo" />
                </div>
                <div class="card-body">
                  <div class="card-body__user-info">
                    <h5 class="card-name">User name</h5>
                    <p class="card-nick">@Nick_name</p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <p class="card-body__text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer. This is a wider card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer. This is a
                    wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </p>
                  <div class="card-body__actions">
                    <i class="far fa-comment"></i>
                    <i class="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
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

.wrapper {
  background: rgb(32, 161, 241);
  border: 1px solid gainsboro;
}

.header {
  position: relative;
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

.home {
  font-size: 20px;
  text-align: center;
  border-radius: 3px;
  padding-top: 10px;
}

.photo img {
  width: 60px;
  border-radius: 50%;
  margin: 10px 10px;
}

.card-body__user-info {
  display: flex;
}
.card-name,
.card-nick,
.card-text {
  margin-left: 10px;
}

.card-body__actions {
  display: flex;
  justify-content: space-around;
}
</style>
