import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // 저장하고싶은 애를 여기에 저장
      name: "kim",
    };
  },
});

export default store;
