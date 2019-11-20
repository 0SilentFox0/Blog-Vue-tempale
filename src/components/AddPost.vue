<template>
  <div class="row">
    <div class="col-12">
      <form class="add__post">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title of your post"
          />
          <textarea
            class="form-control"
            id="content"
            rows="3"
            placeholder="Enter text"
          >
          </textarea>
          <button type="button" class="btn btn-block">
            POST
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost"
};
</script>

<style scoped></style>
