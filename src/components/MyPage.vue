<template>
  <div style="padding: 10px" class="follower-list">
    <h4>팔로워</h4>
    <input placeholder="검색" />
    <div class="post-header" v-for="(a, idx) in follower" :key="idx">
      <div
        class="profile"
        :style="`background: url(${a.image}) no-repeat center`"
      ></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>

    <!-- { "id": 0, "name": "_Limvely", "image": "https://placeimg.com/200/200/animals/grayscale" },  -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    // data, methods, computed, watch, hook..  등 다 여기 안에 만들 수 있다.
    // 관련 있는 코드들을 한눈에 볼 수 있다.

    // 데이터 만들기 모든 값을 ref안에 만들어햐나다.
    let follower = ref([]);

    //composition api에서 lifecycle hook 쓰려면 다음과 같이 써야한다.
    //on라이프사이클함수명
    //onMounted(()=>{}),
    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        // 데이터 수정하려면 데이터.value 를 수정해야함
        follower.value = a.data;
      });
      // 데이터를 사용하고 싶을땐 return 필수
    });

    return { follower };
  },

  data() {
    return {};
  },
};
</script>
