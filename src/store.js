import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // 저장하고싶은 애를 여기에 저장
      name: "kim",
      age: 20,
      like: 30,
      liked: false,
    };
  },
  // state수정방법 정의하는 곳
  mutations: {
    // 여깃는 파라미터 state는 위의 state를 의미함
    이름변경(state) {
      state.name = "park";
    },

    나이변경(state, data) {
      state.age += data;
    },

    좋아요(state) {
      if (state.liked == false) {
        state.like += 1;
        ``;
        state.liked = true;
      } else {
        state.like -= 1;
        state.liked = false;
      }
    },
  },
});

export default store;
