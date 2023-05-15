<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step = step + 1">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :data="data"
    :step="step"
    :imgUrl="imgUrl"
    :선택한필터="선택한필터"
    @changePage="changePage($event)"
    @getContent="getContent($event)"
    @more="more"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- multiple : 여러개의 파일 받기 -->
      <!-- accept="image/*" : 이미지만 보여주세요 .. js .type으로 검사하기-->
      <input
        @change="uploadPhoto"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- # vuex에 저장된 데이터 가져오는법-->
  <!-- 1. $store.state.변수명
  <h4>안녕 {{ $store.state.name }}</h4>

  2. 변경도 유롭게 가능하다. 하지만.. 그러지 말자. 추적이 매우매우 어렵다.
  <button @click="$store.state.name = 'Park'">vuex state 바꾸기</button>

  3. vuex 수정 국룰 
  1) 미리 store.js에 수정 방법을 정의해두고 
  2) 그 방법을
  컴포넌트에서 소환해서 수정해야함. -->
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

// # 이미지 업로드 한걸 HTML에 보여주려면?
//   #1. 전통적인 방법
//   1) 업로드한 서버로 보내고 저장시킴
//   2) 저장된 URL을 img src="" 에 넣어줌

//   #2. 요즘은 브라우저에서 이미지 다루는 함수 씀
//   1) FileReader() API 쓰거나
//    - 파일을 글자로 변환해줌
//   2) URL.createObjectURL() 사용 - 요고 사용
//    - 가상의 이미지 URL을 생성해줌
// ... 업로드 후엔 다음페이지로 보내야함. + 업로드한 이미지 띄우기

export default {
  name: "App",
  data() {
    return {
      data: data,
      cnt: 0,
      step: 0,
      imgUrl: "",
      content: "",
      선택한필터: "",
    };
  },
  mounted() {
    // # mitt가져오기
    // this.emitter.on("작명", (a) => {
    //   // 작명이라는 이벤트 발사하면 수신해주시오.
    //   console.log(a);
    // });
    // 많이쓰면 안됩니다. 관리가 힘들어짐  --> vuex 쓰는게 나음

    this.emitter.on("박스클릭함", (a) => {
      this.선택한필터 = a;
    });
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

    changePage(step) {
      this.step = step;
    },

    uploadPhoto(e) {
      let file = e.target.files;
      // console.log(file[0].type); // .type 파일 타입 제한은 여기서
      let url = URL.createObjectURL(file[0]); // 이미지 임시 url생성
      // blob : 컴퓨터 안에 있는 파일은 모두 binary데이터(0과 1로 이뤄진 데이터)
      // binary데이터를 다룰때는 BLOB라는 Object에 담아서 담음(Binary Large Object) -> 담아서 이미지 조작 가능
      this.imgUrl = url;
      this.step = 1;
    },

    getContent(value) {
      var content = value;
      this.content = content;
    },

    publish() {
      var currentData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.선택한필터,
      };

      this.data.unshift(currentData);
      this.step = 0;
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
