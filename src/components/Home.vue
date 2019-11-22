<template>
  <div id="home">
    <post />
  </div>
</template>
<script>
import Post from "@/components/Post";

export default {
  name: "home",
  components: {Post}
};
</script>

<style>
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
