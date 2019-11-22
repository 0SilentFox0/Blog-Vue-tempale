<template>
  <section id="posts">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-6 mx-auto">
          <form v-if="isAuthorized" class="add-post-form mb-3">
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
          <h5 v-if="!posts.length" class="text-white">
            There are no posts yet. You should log in to create one.
          </h5>
          <div
            class="card post mb-3"
            v-for="(post, index) in posts"
            :key="index"
          >
            <div class="card-body">
              <h6 class="card-title d-flex justify-content-between text-info">
                {{ post.author_username }}
                <span class="text-muted post__timestamp">{{
                  post.created
                }}</span>
              </h6>
              <h5 class="card-title mb-1">{{ post.title }}</h5>
              <p class="card-text">
                {{ post.content }}
              </p>
              <a
                href="#"
                @click.prevent="like(post)"
                :class="{ disabled: !isAuthorized }"
              >
                <i class="fas fa-heart"></i>
                <span class="badge">
                  {{ post.total_likes }}
                </span>
              </a>
            </div>
          </div>
          <div class="spinner text-center d-none">
            <img :src="require('../assets/spinner.gif')"/>
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
        posts: [],
        previous: null,
        next: null,
        isAuthorized: localStorage.token !== undefined,
      };
    },
    created() {
      const config = this.headerConfig;
      this.$http.get("posts/", config).then(response => {
        this.previous = response.data.previous;
        this.next = response.data.next;
        this.posts = response.data.results;
      });
      window.addEventListener("scroll", this.handlePagination);
    },
    methods: {
      headerConfig() {
        if (!localStorage.token) return;
        return {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        };
      },
      addPost(e) {
        if (localStorage.token) {
          const config = this.headerConfig();
          let post_data = new FormData(e.target.form);
          this.$http.post("posts/", post_data, config).then(response => {
            e.target.form.reset();
            this.posts.unshift(response.data);
          });
        }
      },
      like(post) {
        if (!this.isAuthorized) return;
        let url = post.is_fan
          ? `posts/${post.id}/unlike/`
          : `posts/${post.id}/like/`;
        const config = this.headerConfig();

        this.$http.post(url, {}, config).then(response => {
          post.total_likes = response.data.total_likes;
          post.is_fan = response.data.is_fan;
        });
      },
      handlePagination() {
        let limit = document.body.offsetHeight - window.innerHeight;
        if (window.scrollY === limit && this.next) {
          let spinner = document.querySelector('.spinner');
          spinner.classList.remove('d-none');
          let config = this.headerConfig();
          this.$http.get(this.next, config).then(response => {
            spinner.classList.add('d-none');
            this.previous = response.data.previous;
            this.next = response.data.next;
            response.data.results.forEach(post => {
              this.posts.push(post);
            })
          });
        }
      }
    }
  };
</script>

<style scoped>
  .spinner img {
    max-width: 50px;
  }

  #posts {
    padding: 50px 0 10px;
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

  a.disabled {
    pointer-events: none;
  }
</style>
