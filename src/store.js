import { createStore } from "vuex";
import data from "./data.js";

const store = createStore({
  state() {
    return {
      // 저장하고싶은 애를 여기에 저장
      data: data,
    };
  },
  // state수정방법 정의하는 곳
  mutations: {
    // 여깃는 파라미터 state는 위의 state를 의미함
    // 이름변경(state) {
    //   state.name = "park";
    // },

    // 나이변경(state, data) {
    //   state.age += data;
    // },

    좋아요(state, idx) {
      if (state.data[idx].liked == false) {
        state.data[idx].likes += 1;
        state.data[idx].liked = true;
      } else {
        state.data[idx].likes -= 1;
        state.data[idx].liked = false;
      }
    },
  },
});

export default store;
