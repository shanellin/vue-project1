<template>
  <div class="home">
      <div class="container-fluid noPadding">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div :class="['carousel-item', index == 0 ? 'active' : '']" v-for="(item, index) in carouselIMG" style="height:100%;">
              <div class="backgroundIMG" alt="First slide" :style="{height:'100%',backgroundImage: 'url(' + item + ')', backgroundAttachment: 'fixed'}"></div>
            </div>
            <div class="carousel-text-box" style="">
              <div class="carousel-text">
                <!-- 希望自己在五年後能成為一位精通跨平台且全端開發的IT人才。 -->
                <!-- Five years later, I hope that I will be an IT talent who is proficient in cross-platform and full-stack. -->
                <h3>希望自己在五年後能成為一位精通跨平台且全端開發的IT人才</h3>
                <h5 style="text-align:right">- 2019 ShaneLin</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
    <section class="introduce_text px-1 px-sm-1 px-md-5 py-5">
      <div class="inner">
        <ul class="feature">
          <li class="col-12 col-sm-12 col-lg-4" v-for="(item, index) in introduce_text">
            <h3 class="col-12 col-sm-12"><img :src="item.pic" alt="title圖">{{item.title}}</h3>
            <hr align="left">
            <p class="col-12 col-sm-12" v-html="item.content"></p>
          </li>
        </ul>
      </div>
    </section>
    <section class="forest px-3 px-md-5 py-3 py-md-5">
      <div class="w-80">
        <h3 class="w-100">Hello, I'm ShaneLin.<br>If you want to share something with me, you can send mail to me.</h3>
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shane.sandy123@gmail.com" target="_blank"><button class="px-4 pointer" type="button" name="button">send mail</button></a>
      </div>
    </section>
    <section class="introduce_cards p-3 px-sm-4 pt-sm-5">
      <h3>以下是我做的成品的一些功能介紹</h3>
      <h4>these are some introductions about my results.</h4>
      <hr>
      <div class="col-12 col-sm-4 pointer" v-for="(item, index) in introduce_cards">
        <a v-for="(item_in, index_in) in item" :href="'https://'+item_in.url" target="_blank">
          <div class="card mb-3">
            <img class="card-img-top" :src="item_in.pic" alt="Card image cap">
            <div class="card-body">
              <p class="card-text" v-html="item_in.text"></p>
            </div>
          </div>
        </a>
      </div>
    </section>
    <socialLink></socialLink>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import social_link from '@/components/link.vue'
export default {
  components: {
    'socialLink':social_link
  },
  data() {
    return {
      carouselIMG:['http://www.d852.com/uploads/tuku/87439/vwhmsdv5z4v.jpg'],
      introduce_cards:[[{text:'[BlueNet首頁]<br>三大平台(Android、ios、Web&Line)之各式功能簡介', pic:require( '../assets/bn_main.png'), url:'www.bluenet-ride.com'}, {text:'[BlueNet功能介紹頁]<br>提供各式運具服務(計程車、公車、捷運、火車/高鐵、公共腳踏車)路線規劃、即時車班...等', pic:require( '../assets/traffic.png'), url:"www.bluenet-ride.com/introduce_Traffic"}],
                      [{text:'[BlueNet功能介紹頁]<br>三大平台(Android、ios、Web&Line)之計程車功能詳細介紹、功能操作影片', pic:require( '../assets/web02_0.png'), url:"www.bluenet-ride.com/introduce_Taxi"}, {text:'[BlueNet功能介紹頁]<br>透過爬蟲提供各式資訊服務(即時新聞、美食、景點、住宿、電視台)並搭配各式運具提供最適交通路徑', pic:require( '../assets/information.png'), url:"www.bluenet-ride.com/introduce_Service"}],
                      [{text:'[BlueNet功能介紹頁]<br>行事曆功能詳細介紹(一鍵同步google行事曆、搭配server排程做line訊息推播、搭配各式運具提供最適交通路徑)', pic:require( '../assets/schedule.png'), url:"www.bluenet-ride.com/introduce_Schedule"}, {text:'[Google play商店]<br>全方位吃藥提醒app搭配離線提醒並與各大醫院合作產生專有QR-Code，民眾只需一鍵掃描即可', pic:require( '../assets/drug.png'), url:"play.google.com/store/apps/details?id=com.biovlsi.shane.drugs_new"}]],
      introduce_link:[{text:'LineBot', pic:require( '../assets/line.png')}, {text:'LinkedIn', pic:require( '../assets/linkedin.png')},
                      {text:'github', pic:require( '../assets/git.jpg')}, {text:'gmail', pic:require( '../assets/gmail.jpg')}],
      introduce_text:[{title:'editor', content:'目前主要用來開發的編輯器是Atom，選擇它的緣由 : <br><br>現代化的介面、強大的第三方套件、對開發者的友善，或許它有著先天的缺陷，但卻無法掩蓋它的魅力。', pic:require( '../assets/atom.jpg')},
                      {title:'github', content:'目前實驗室的Web是單人開發，而我git的習慣通常是分成三個分支(master、dev、local)、主要是希望能保持階段性開發。<br>1. local : 能無時無刻git自己的分支做備份<br>2. dev : 發佈正式版前模擬測試<br>3. master : 待dev測試完成後正式發佈。', pic:require( '../assets/git.jpg')},
                      {title:'nodejs', content:'目前Web、linebot、爬蟲的建置都是使用nodejs做設置。', pic:require( '../assets/node-js-icon.png')}]
    }
  },
  created: function () {
  },
  methods: {
    order () {
    }
  },
  mounted () {
    // $('.carousel').carousel({
    //   interval: 3000
    // })
  }
}
</script>
<style media="screen" lang="sass">
  $body-color: #4d5968
  $content-color: #7e8895
  .pointer
    cursor: pointer
  //@mixin for keyframe
  =keyframes($name)
    @-webkit-keyframes #{$name}
      @content
    @-moz-keyframes #{$name}
      @content
    @-ms-keyframes #{$name}
      @content
    @keyframes #{$name}
      @content

  //@mixin for animation
  =animation($content)
    -webkit-animation: $content
    -moz-animation: $content
    -o-animation: $content
    animation: $content

  @media (max-width: 465px)
    .carousel-inner
      height: 90vh
    .carousel-text
      width: 90vw
    .introduce_text
      li
        display: block !important
  @media (min-width: 465px) and (max-width: 924px)
    .carousel-inner
      height: 90vh
    .carousel-text
      width: 70vw
  @media (min-width: 924px)
    .carousel-inner
      height: 90vh
    .carousel-text
      width: 60vw

  .card-img-top
    background: rgba(184, 184, 184, 0.3)
    max-height: 300px
  .carousel-inner
    display: flex
  .carousel-text-box
    width: 100%
    height: 30%
    position: absolute
    bottom: 0px
    background: rgba(21, 27, 33, 0.6)
    display: flex
  .carousel-text
    background: transparent
    margin: auto
    z-index: 1
    color: white
  .forest
    //background-image: url('../assets/forest.jpg')
    background-image: -webkit-linear-gradient(45deg, rgba(39, 161, 227, 0.4), rgba(231, 35, 42, 0.4)), url('../assets/forest.jpg')
    background-position: center center
    background-size: cover
    background-attachment: fixed, fixed, fixed, fixed
    background-repeat: repeat, repeat, no-repeat, no-repeat
    width: 100%
    height: 400px
    background-color: lightyellow
    display: flex
    flex-wrap: wrap
    div
      display: flex
      flex-wrap: wrap
      margin: auto
    h3
      text-align: left
      color: white
      font-weight: bold
      margin-bottom: 2em
    button
      height: 40px
      border-radius: 5px
      border: 2px solid white
      background: transparent
      color: white
      font-weight: bold
      font-size: 1em
    button:hover
      background: white
      color: $body-color
      transition: all 0.1s ease-out
  .home
    // background-image: url('../assets/bg.jpg')
    // background-repeat: no-repeat
    // background-position: center
    // background-size: cover
    // background-color: rgba(255,255,255,0.3)
    // background-blend-mode: lighten
  #carouselExampleIndicators
    top: 0px
  .backgroundIMG
    background-size: cover
    background-repeat: no-repeat
    background-position: '0px -160px'
  +keyframes(introduce_cards_hover)
    from
      border-color: white
    to
      border-color: rgb(238, 200, 125)
      border-width: 2px
  .introduce_cards
    a
      text-decoration: none
      color: black
    display: inline-flex
    flex-wrap: wrap
    max-width: 68em
    padding-top: 50px
    h3, h4
      width: 100%
      text-align: left
    h3
      color: $body-color
      font-weight: bold
      margin-bottom: 0.5em
    h4
      color: $content-color
    hr
      width: 100%
    > div
      display: flex
      flex-wrap: wrap
    .card
      overflow: hidden
      width: 18rem
    .card:hover
      +animation(introduce_cards_hover 1s)
      animation-fill-mode: forwards
      > img
        transform: scale(1.1,1.1)
        transition: all 1s ease-out
    .card-text
      text-align: left
  $introduce_imgSize: 2.5em
  .introduce_text
    width: 100%
    height: auto
    ul.feature
      list-style: none
      padding: 0
      margin-bottom: 0px
      li
        display: inline-flex
        flex-wrap: wrap
        margin-bottom: 20px
        h3, p
          margin: auto
          text-align: left
        h3
          padding-left: 3em
          color: $body-color
          font-size: 1.25em
          font-weight: 700
          margin: 0px
          height: $introduce_imgSize
          line-height: $introduce_imgSize
          img
            width: $introduce_imgSize
            height: $introduce_imgSize
            border-radius: 1.25em
            border: solid 2px rgba(144, 144, 144, 0.25)
            position: absolute
            left: 0px
        p
          color: #212529
          font-size: 100%
          padding: 0px
        hr
          border-top: 1px solid #7e8895
          width: 30%
      > li:nth-child(2), li:last-child
        padding-top: 20px
</style>
