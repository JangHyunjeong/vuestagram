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
import { computed, onMounted, ref, toRefs, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  //setup(props, context)
  setup(props) {
    let follower = ref([]);
    // #1. reactive
    // let test = reactive({ name: "kim" });  // ref랑 거의 비슷

    // #2. props 사용하기
    // props 이렇게만 쓰면 실시간 반영안될수 있음
    // let { props작명 } = toRefs(props) 가 관습적으로 많이 쓰는 방법
    // 이렇게 사용해야 실시간 랜더링.. 리액티브
    let { one } = toRefs(props);
    // 이거도 .value로 꺼내와야함
    console.log(one.value);

    // #3. watch 사용하기
    // 첫번째 파라미터 : watch하고싶은 데이터
    // watch(watch하고싶은데이터, () => { 적용하고싶은 함수 });
    watch(one, () => {
      console.log("hi");
    });

    // #4. computed 사용하기
    // computed(() => {return 연산결과;});
    let 결과 = computed(() => {
      return follower.value.length;
    });
    console.log("follower", 결과.value);

    // #5. vuex 사용법
    // 1) import { useStore } from "vuex";
    // 2) let store = useStore();
    let store = useStore();
    console.log("vuex:", store.state.data);
    // mapState는 사용 못함.. vuex 5버전 이상에서 사용가능

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },

  data() {
    return {};
  },
};
</script>
