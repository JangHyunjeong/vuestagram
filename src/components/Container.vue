<template>
  <div>
    <!-- <button @click="$emit('changePage', 0)">포스팅리스트</button>
    <button @click="$emit('changePage', 1)">필터선택</button>
    <button @click="$emit('changePage', 2)">글작성</button> -->

    <div v-if="this.step == 0">
      <Post
        v-for="(item, idx) in data"
        :key="idx"
        :data="item"
        :filter="filter"
      />
      <button @click="$emit('more')">더보기</button>
    </div>

    <div v-if="this.step == 1">
      <!-- 필터선택페이지 -->
      <div
        :class="선택한필터"
        class="upload-image"
        :style="`background-image: url(${this.imgUrl})`"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(name, idx) in filterArray"
          :imgUrl="imgUrl"
          :key="idx"
          :filter="name"
        >
          {{ name }}

          <!-- # 슬롯 여러개 사용하기
            <template v-slot:a>a빵꾸에 들어간다 </template>
          <template v-slot:b>b빵꾸에 들어간다 </template> -->

          <!-- #슬롯 자식 데이터 받아오기
            <template v-slot:default="작명">
            <span>{{ 작명.msg }}</span></template
          > -->
        </FilterBox>
      </div>
    </div>

    <div v-if="this.step == 2">
      <!-- 글작성페이지 -->
      <div
        :class="선택한필터"
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
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      filterArray: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    data: Array,
    step: Number,
    imgUrl: String,
    filter: String,
    선택한필터: String,
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
