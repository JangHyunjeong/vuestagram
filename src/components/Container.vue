<template>
  <div>
    <Post v-for="(item, idx) in data" :key="idx" :data="item" />
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
