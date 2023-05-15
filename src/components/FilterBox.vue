<template>
  <div
    :class="`${filter} filter-1`"
    :style="{ backgroundImage: `url(${this.imgUrl})` }"
  >
    <slot></slot>
    <button @click="fire">버튼</button>

    <!-- #1. slot 으로 부모 - 자식 데이터 전송법
  1. 자식 : 구멍 뚫기 
  <slot></slot>

  2. 부모 :  컴포넌트 태그 사이에 자료 입력 -> 그럼 slot에 그 자료가 보인다.
  <컴포넌트>여기에 쓴 글이 <slot>에 노출됩니다. </컴포넌트>

  ** slot은 html안에 데이터 바인딩하는 경우만 쓸수있음. 클래스에 추가한다던가... 그런건 props 써야함
  -->

    <!-- 
    #2. solt 여러개 사용하는 법
    1.  자식 : 이름 지에서 구멍뚫기
    <slot name="a"></slot>
    
    2. 부모 : template v-solt:a 해서 보내기
    <template v-slot:a>a빵꾸에 들어간다 </template>
    -->
    <!-- <slot name="a"></slot>
    <slot name="b"></slot> -->

    <!-- 
    #2. solt 부모가 자식 데이터 사용하고싶을때
    1. 자식 : <slot :자식데이터="자식데이터"
    <slot :msg="msg"></slot>
    2. 부모 : <template v-solt:default="작명"> 후에 {{ 작명.자식데이터 }}
    <template v-slot:default="작명"><span>{{ 작명.msg }}</span></template>
    -->
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data() {
    return {
      msg: "슬롯테스트",
    };
  },
  // mitt로 데이터 전송한느 법
  // 1. 자식 : this.emitter.emit()로 발사
  // 2. 부모 : this.emitter.on()으로 수신
  methods: {
    fire() {
      //this.emitter.emit("작명", "데이터");
      this.emitter.emit("박스클릭함", this.filter);
    },
  },
  props: {
    imgUrl: String,
    filter: String,
  },
};
</script>
