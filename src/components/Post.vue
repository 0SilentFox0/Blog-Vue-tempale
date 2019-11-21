<template>
  <div class="row">
    <div class="col-12">
      <div class="card mb-3" v-for="(result, index) in results" :key="index">
        <div class="post d-flex">
          <div class="photo">
            <img src="../assets/photo.jpg" class="card-img" alt="photo" />
          </div>
          <div class="card-body">
            <div class="card-body__user-info">
              <h5 class="card-name">{{ result.author_username }}</h5>
              <p class="card-text">
                <small class="text-muted">{{ result.created }}</small>
              </p>
            </div>
            <div class="card-body__text">
              <h4 class="card-body__title">
                {{ result.title }}
              </h4>
              {{ result.content }}
            </div>
            <div @click="changeLike"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      isLiked: false,
      results: []
    };
  },
  created() {
    this.$http.get("posts/").then(response => {
      this.results = response.data.results;
    });
  },
  methods: {
    changeLike() {
      this.isLiked = !this.isLiked;
    }
  }
};
</script>

<style scoped>
.card-body__user-info {
  display: flex;
  justify-content: space-between;
}

.card-body__text {
  text-align: left;
}

.card-body__title {
  text-align: center;
}

.fa-heart {
  display: flex;
  align-content: center;
  justify-content: flex-end;
}

.notLiked {
  color: black;
}

.liked {
  color: red;
}
</style>
