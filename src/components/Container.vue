<template>
  <div>
    <!-- <button @click="$emit('changePage', 0)">포스팅리스트</button>
    <button @click="$emit('changePage', 1)">필터선택</button>
    <button @click="$emit('changePage', 2)">글작성</button> -->

    <div v-if="this.step == 0">
      <Post v-for="(item, idx) in data" :key="idx" :data="item" />
      <button @click="$emit('more')">더보기</button>
    </div>

    <div v-if="this.step == 1">
      <!-- 필터선택페이지 -->
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${this.imgUrl})` }"
      ></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <div v-if="this.step == 2">
      <!-- 글작성페이지 -->
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${this.imgUrl})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @change="$emit('getContent', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>
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
    step: Number,
    imgUrl: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
