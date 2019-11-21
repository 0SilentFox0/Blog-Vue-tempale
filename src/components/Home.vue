<template>
  <div id="home">
    <add-post @addPost="newPost" />
    <post />
  </div>
</template>
<script>
import Post from "@/components/Post";
import AddPost from "@/components/AddPost";

export default {
  name: "home",
  components: {
    AddPost,
    Post
  },
  methods: {
    newPost(response) {
      this.console.dir(response);
    }
  }
};
</script>

<style>
.photo img {
  width: 60px;
  border-radius: 50%;
  margin: 10px 10px;
}
h2 {
  color: white;
  margin: 50px 0 20px;
}
input, textarea {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 8px 10px;
  transition: border 0.1s linear;
  margin: 10px 0;
}
</style>
