<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data" />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import data from "./data.js";
import axios from "axios";
// # 1. ajax 사용하는 법 (get, post로 데이터 요청하기)
// 1. axios 사용 - 이렇게 많이 씀
// 2. fetch 함수 사용 - 호환성 문제 좀 있음

// 1. axios 사용하기
// 1) 설치 - npm install axios
// 2) import
// import axios from "axios";
// 3) 요청
// axios.get(); // 이게 get 요청하는 법임
// axios.post(); // 이게 post 요청하는 법임

export default {
  name: "App",
  data() {
    return {
      data: data,
      cnt: 0,
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        // post요청은 내가 원하는 데이터를 보내고싶을 때 사용한다.
        // .post("url", { name: "kim" })
        // .then()  // 요청 성공시 실행되는 코드
        // .catch()  // 요청 실패시 실행되는 코드
        // .catch((err) => { console.log(err)}) // 에러는 이런식으로 메세지 받을 수 있음

        .get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
        //.then(function (result) {
        .then((result) => {
          // this 가져다 쓰려면 이렇게 쓰셈
          // get요청 성공시 함수 실행 .then
          // 요청 성공시 실행할 코드
          // get 요청으로 가져온 결과값은 result(위에 파라미터) 에 저장된다.
          this.data.push(result.data);
          this.cnt++;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
