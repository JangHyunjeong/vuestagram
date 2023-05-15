<template>
  <div
    :class="`${filter} filter-1`"
    :style="{ backgroundImage: `url(${this.imgUrl})` }"
  ></div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imgUrl: String,
    filter: String,
  },
};
</script>
