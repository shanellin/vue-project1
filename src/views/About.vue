<template>
  <div id="introduce" class="main-content" :style="{marginTop:mainMarginTop + 'px'}">
    <section class="section-self w-100">
      <div class="self-pic"></div>
      <div class="self-word">If you found your ability doesn't enough to handle something,<br> just slow down and learn more.</div>
    </section>
    <section class="sec2">
      <div class="sec2-pic col-12 col-sm-12 col-lg-4">
        <div class="">

        </div>
      </div>
      <div class="sec2-describe col-12 col-sm-12 col-lg-8">

      </div>
    </section>
    <section class="sec3">
      <div class="sec3-describe col-12 col-sm-12 col-lg-8">

      </div>
      <div class="sec3-pic col-12 col-sm-12 col-lg-4">
        <div class="">

        </div>
      </div>
    </section>
    <section class="sec4">
      <div class="sec4-describe col-12 col-sm-12">
        <div class="describe-title"><h1>What skills I have?</h1></div>
        <div class="describe-content">前端之路技能五花八門，各門各派均有其獨特的價值，以下是這兩年來小弟一路成長所習得的大小技能，還請各位前輩不要見笑了</div>
      </div>
      <div class="sec4-pic col-12 col-sm-12">
        <div class="col-12 col-sm-4" v-for="(item, index) in sec4_data">
          <div class="inner_pic">

          </div>
          <div class="inner_title m-1">{{item.title}}</div>
          <div class="inner_text w-100">
            <span class="badge badge-primary p-2 m-1" v-for="(inItem, inIndex) in item.skill">{{inItem}}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      //公用
      mainMarginTop:parseInt($('#nav').height()),
      //右側框內容
      sec4_data:[{pic:'', skill:['vue.js', 'vue-cli', 'vue-router', 'vuex'], title:'Vue框架'},
                 {pic:'', skill:['ejs', 'html5', 'css3', 'js-es6', 'jquery', 'sass', 'vue', 'bootstrap'], title:'畫面渲染&模板'},
                 {pic:'', skill:['Restful-API', 'router', 'gulp', '爬蟲'], title:'Node.js'}]
    };
  },
  created: function () {
    const that = this;
    DocStyle('nav').backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.82})`;
  },
  watch:{
  },
  methods: {
  },
  computed: {
    ...mapState(['introduce'])
  },
  mounted(){
    const that = this;
  }
};
</script>
<style media="screen" lang="sass">
  $person-pic-size: 180px
  $sec-pic-size: 280px
  #introduce
  .section-self
    font-family: 'Meddon', cursive
    display: inline-table
    height: 650px
    background-image: url('../assets/colorful.jpg')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    .self-pic
      height: $person-pic-size
      width: $person-pic-size
      border-radius: $person-pic-size / 2
      border: 1px solid white
      padding: 10px
      margin: auto
      left: 0
      right: 0
      margin-top: 7%
      background: transparent
      background-image: url('../assets/wood.jpeg')
      background-repeat: no-repeat
      background-position: center
      background-size: cover
    .self-word
      margin: auto
      left: 0
      right: 0
      font-size: 25px
      margin-top: 7%
  .sec2, .sec3
    height: 800px
    width: 100%
    display: flex
    > div
      height: 50%
    .sec2-pic, .sec3-pic
      display: flex
      > div
        margin: auto
        height: $sec-pic-size
        width: $sec-pic-size
        border-radius: $sec-pic-size / 2
        border: 1px solid white
        background: transparent
        background-image: url('../assets/wood.jpeg')
        background-repeat: no-repeat
        background-position: center
        background-size: cover
  .sec3
    background: #3498db
  .sec4
    height: 600px
    width: 100%
    .sec4-describe
      width: 100%
      height: 200px
      .describe-title
        font-size: 25px
        font-family: 'Amiri', serif
        padding: 30px 0px
        color: black
      .describe-content
        font-size: 18px
        color: rgb(153, 153, 153)
    .sec4-pic
      display: block
      width: 100%
      height: 400px
      > div
        display: inline-table
        .inner_pic
          height: $sec-pic-size
          width: $sec-pic-size
          border-radius: $sec-pic-size / 2
          border: 1px solid white
          background: transparent
          background-image: url('../assets/wood.jpeg')
          background-repeat: no-repeat
          background-position: center
          background-size: cover
          margin: auto
          margin-top: 10px
        .inner_title
          height: 50px
          font-size: 25px
          text-align: center
          line-height: 50px
        .inner_text
          height: 200px
          padding: 10px
          font-size: 20px
  @media (max-width: 465px)
    .section-self
      .self-pic
        margin-top: 17%
    .sec3
      .sec3-describe
        order: 2
      .sec3-pic
        order: 1
  @media (min-width: 465px) and (max-width: 924px)
    .section-self
      .self-pic
        margin-top: 17%
    .sec3
      .sec3-describe
        order: 2
      .sec3-pic
        order: 1
  @media (min-width: 924px)
    .sec2, .sec3
      height: 500px
      display: inline-flex
      > div
        height: 100%
    .sec4-pic
      display: inline-flex
</style>
