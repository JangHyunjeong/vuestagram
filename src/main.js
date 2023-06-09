import { createApp } from "vue";
import App from "./App.vue";

// mitt 라이브러리 셋팅
import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);

// 자주쓰는 라이브러리 여기에 등록해도 됨
// 그러면 vue 파일에서 import 해올 필요 없이, this.emiiter로 사용가능
// 글로벌하게 emitter를 막 사용할라고 설정해둔거임
app.config.globalProperties.emitter = emitter;

// vuex 설치
import store from "./store.js";

import './registerServiceWorker'

// use(store) : 모든 컴포넌트들이 store.js 직접 참고 가능하다.
app.use(store).mount("#app");
