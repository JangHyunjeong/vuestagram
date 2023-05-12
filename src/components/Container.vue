<template>
  <div>
    <Post :data="data[0]" />
    <!-- <Post :data="data" />
    <Post :data="data" /> -->
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    data: Array,
  },
};
</script>
