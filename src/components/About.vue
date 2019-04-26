<template>
  <div id="introduce" class="main-content">
    <section class="section-self w-100">
      <div class="self-pic"></div>
      <div class="self-word">If you find that your ability is not enough to handle something,<br> just slow down and learn more.</div>
    </section>
    <section class="sec2 px-lg-5">
      <div class="sec2-pic col-12 col-sm-12 col-lg-4">
        <div class=""></div>
      </div>
      <div class="sec2-describe col-12 col-sm-12 col-lg-8 p-4 py-lg-5 px-lg-3">
        <div class="describe-box">
          <div class="describe-head p-2 w-100">
            <h3>熱血的大學時期</h3>
          </div>
          <div class="describe-body p-2 w-100" style="color:rgb(153, 153, 153)">
            專題題目是全方位吃藥提醒與紀錄app，當時熱衷於android使持裝置開發，當中的樂趣與成果令我沉迷其中，並於2016年榮獲台大醫院雲林分院app競賽-金獎。
            <br>
            <br>
            <a href="https://play.google.com/store/apps/details?id=com.biovlsi.shane.drugs_new"><img src="../assets/androidbtn.png" alt=""></a>
          </div>
        </div>
      </div>
    </section>
    <section class="sec3 px-lg-5">
      <div class="sec3-describe col-12 col-sm-12 col-lg-8 p-4 py-lg-5 px-lg-4">
        <div class="describe-box">
          <div class="describe-head p-2 w-100" style="color:white;">
            <h3>扎實的研究所歷練</h3>
          </div>
          <div class="describe-body p-2 w-100" style="color:white;">
            目前研究的方向是基於linebot運用，理念為line是目前台灣地區通訊軟體首屈一指的app，若是能在其上打造出智能、多功且跨平台的行動小秘書，必定能造福社會大眾。主要包含功能有  :
            <br>
            <br>
            1.  交通工具頁面--各大交通運具(計程車、捷運、公車、腳踏車、火車/高鐵、mix運具)。
            <br>
            2.  安排行程頁面--行事曆(搭配google  calendar、各運具、line提醒訊息)、記事本。
            <br>
            3.  資訊服務頁面--新聞、美食、景點、住宿、電視台(搭配爬蟲技術、google  api)。
            <br>
            <br>
            <a href="https://line.me/R/ti/p/%40rqz0882f"><img src="../assets/linebtn.png" alt=""></a>
          </div>
        </div>
      </div>
      <div class="sec3-pic col-12 col-sm-12 col-lg-4">
        <div class=""></div>
      </div>
    </section>
    <section class="sec4">
      <div class="sec4-describe col-12 col-sm-12">
        <div class="describe-title"><h1>What skills I have?</h1></div>
        <div class="describe-content">前端之路，我期許自己能保持著學習的熱忱持續邁進。在這時代洪流裡，學如逆水行舟，不進則退。</div>
      </div>
      <div class="sec4-pic col-12 col-sm-12">
        <div class="col-12 col-sm-4" v-for="(item, index) in sec4_data">
          <div class="inner_pic" :style="{'background-image':'url(' + item.pic + ')'}">

          </div>
          <div class="inner_title m-1">{{item.title}}</div>
          <div class="inner_text w-100">
            <span class="badge badge-primary p-2 px-3 m-1" v-for="(inItem, inIndex) in item.skill">{{inItem}}</span>
          </div>
        </div>
      </div>
    </section>
    <socialLink></socialLink>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import social_link from '@/components/link.vue'
export default {
  components: {
    'socialLink': social_link
  },
  data () {
    return {
      // 右側框內容
      sec4_data: [{ pic: require('../assets/vue.png'), skill: ['vue.js', 'vue-cli', 'vue-router', 'vuex'], title: 'Vue框架' },
                  { pic: require('../assets/mix.png'), skill: ['ejs', 'html5', 'css3', 'js-es6', 'jquery', 'sass', 'vue', 'bootstrap'], title: '前端框架&模板' },
                  { pic: require('../assets/node-js-icon.png'), skill: ['Restful-API', 'router', 'gulp', '爬蟲'], title: 'Node.js' }]
    }
  },
  created: function () {
    const that = this
    DocStyle('nav').backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.82})`
  },
  watch: {
  },
  methods: {
  },
  computed: {
    ...mapState(['introduce'])
  },
  mounted () {
    const that = this
  }
}
</script>
<style media="screen" lang="sass">
  $person-pic-size: 180px
  $sec-pic-size: 280px
  #introduce
  .section-self
    font-family: 'Meddon', cursive
    display: inline-table
    height: 90vh
    background-image: url('../assets/colorful.jpg')
    background-position: center center
    background-size: cover
    background-attachment: fixed, fixed, fixed, fixed
    background-repeat: repeat, repeat, no-repeat, no-repeat
    padding-top: 50px
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
      box-shadow: 0px 0px 0px 7px transparent, 0px 0px 0px 8px rgba(255, 255, 255, 0.25)
    .self-word
      margin: auto
      left: 0
      right: 0
      font-size: 25px
      margin-top: 7%
  .sec2, .sec3
    height: auto
    width: 100%
    display: flex
    flex-wrap: wrap
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
        background-repeat: no-repeat
        background-position: center
        background-size: cover
    .sec2-pic
      > div
        box-shadow: 0px 0px 0px 7px #fff, 0px 0px 0px 8px rgba(0, 0, 0, 0.3)
        background-image: url('../assets/shane2.jpg')
    .sec3-pic
      > div
        box-shadow: 0px 0px 0px 7px #3498db, 0px 0px 0px 8px rgba(255, 255, 255, 0.3)
        background-image: url('../assets/shane3.png')
    .sec2-describe, .sec3-describe
      display: flex
      flex-wrap: wrap
      text-align: left
      img
        height: 50px
      img:hover
        transform: scale(1.1,1.1)
        transition: all 0.1s ease-out
      .describe-box
        margin: auto
        .describe-head
          font-size: 25px
          font-weight: bold
          // height: 50px
        .describe-body
          font-size: 18px
          // height: calc(100% - 50px)
  .sec3
    background: #3498db
  .sec4
    height: auto
    width: 100%
    .sec4-describe
      width: 100%
      height: 200px
      margin-bottom: 20px
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
      height: auto
      > div
        display: inline-table
        .inner_pic
          height: $sec-pic-size
          width: $sec-pic-size
          border-radius: $sec-pic-size / 2
          border: 1px solid white
          background: transparent
          background-repeat: no-repeat
          background-position: center
          background-size: cover
          margin: auto
          margin-top: 10px
          box-shadow: 0px 0px 0px 7px #fff, 0px 0px 0px 8px rgba(0, 0, 0, 0.3)
        .inner_title
          height: 50px
          font-size: 25px
          text-align: center
          line-height: 50px
        .inner_text
          height: auto
          padding: 10px
          font-size: 20px
  @media (max-width: 465px)
    .sec2, .sec3
      padding-top: 30px
    .section-self
      .self-pic
        margin-top: 17%
    .sec3
      .sec3-describe
        order: 2
      .sec3-pic
        order: 1
  @media (min-width: 465px) and (max-width: 924px)
    .sec2, .sec3
      padding-top: 30px
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
