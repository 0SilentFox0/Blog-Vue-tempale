<template>
  <section id="add-post">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-9">
          <form class="add-post-form">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Enter title of your post"
              v-model="title"
            />
            <textarea
              class="form-control"
              id="content"
              rows="4"
              placeholder="Enter text"
              v-model="content"
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
    </div>
  </section>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      title: null,
      content: null
    };
  },
  methods: {
    addPost() {
      if (localStorage.token) {
        this.$http
          .post("posts/", {
            title: this.title,
            content: this.content
          })
          .then(response => {
            this.$emit("addPost", response);
          })
          .catch(err => console.dir(err));
      }
    }
  }
};
</script>

<style scoped>
#add-post {
  margin: 50px 0 10px;
}
.form-control,
.form-control:focus,
.form-control:focus-within {
  box-shadow: none !important;
  outline: none;
}
</style>
