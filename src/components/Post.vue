<template>
  <section id="posts">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-6 mx-auto">
          <form class="add-post-form">
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="Enter title of your post"
            />
            <textarea
              class="form-control"
              name="content"
              rows="4"
              placeholder="Enter text"
              maxlength="1024"
            >
            </textarea>
            <button
              type="button"
              class="btn btn-block btn-dark"
              @click="addPost"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-10 col-lg-6 mx-auto">
          <div
            class="card post mb-3"
            v-for="(result, index) in results"
            :key="index"
          >
            <div class="card-body">
              <h6 class="card-title d-flex justify-content-between text-info">
                {{ result.author_username }}
                <span class="text-muted post__timestamp">{{
                  result.created
                }}</span>
              </h6>
              <h5 class="card-title mb-1">{{ result.title }}</h5>
              <p class="card-text">
                {{ result.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      this.results = response.data.results.reverse();
    });
  },
  methods: {
    addPost(e) {
      if (localStorage.token) {
        let post_data = new FormData(e.target.form);
        this.$http
          .post("posts/", post_data)
          .then(response => {
            e.target.form.reset();
            this.results.unshift(response.data);
          })
          .catch(err => console.dir(err));
      }
    }
  }
};
</script>

<style scoped>
.add-post-form {
  margin: 50px 0 10px;
}

.form-control,
.form-control:focus,
.form-control:focus-within {
  box-shadow: none !important;
  outline: none;
}

.post__timestamp {
  font-size: 12px;
}

h5 {
  margin: 0;
}
</style>
