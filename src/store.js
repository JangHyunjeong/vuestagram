import { createStore } from "vuex";
import axios from "axios";
import data from "./data.js";

const store = createStore({
  state() {
    return {
      // 저장하고싶은 애를 여기에 저장
      data: data,
      more: {},
      cnt: 1,
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

    setMore(state, data) {
      state.more = data;
    },
  },

  // vuex에서 ajax를 사용하고 싶을것은 여기서 작업
  // 또는 오래걸리는 작업

  // ajax는 actions에서
  // state 변경은 mutations 에서
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((result) => {
          console.log(result.data);
          context.commit("setMore", result.data);
        });
    },
  },
});

export default store;
