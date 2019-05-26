<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark">
      <router-link :to="'/'"><a class="navbar-brand navFont" style="color:white;">ShaneLin</a></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="'/'+item.href" v-for="(item, index) in navBtn"><a :class="['nav-link', 'navFont', navBtnIndex == index ? 'active' : '']" style="text-align:left" @click="navActive(index)">{{item.text}}</a></router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        navBtn:[{text:'linebot功能介紹', href:'article'}, {text:'關於我', href:'about'}],
        navBtnIndex:-1
      };
    },
    created: function () {
    },
    methods: {
      order() {
      },
      navActive(i){
        this.navBtnIndex = i;
        $('.navbar-toggler').click();
      }
    },
    mounted(){
      $(() => {
        let scroll_direct = {num:0, direct:'down'};
        $(window).scroll(() => {
          if (scroll_direct.direct == 'down') {
              if (parseFloat($('.carousel-text').css('opacity')) > 0) {
                $('.carousel-text').css('opacity', `${parseFloat($('.carousel-text').css('opacity')) - 0.05}`);
                $('.carousel-text-box').css('opacity', `${parseFloat($('.carousel-text').css('opacity')) - 0.05}`);
              }
          }else if (($(window).scrollTop() > 100) && ($(window).scrollTop() <= 400) && (scroll_direct.direct == 'up')) {
              if ((parseFloat($('.carousel-text').css('opacity')) <= 1) && (parseFloat($('.carousel-text').css('opacity')) >= 0)) {
                $('.carousel-text').css('opacity', `${parseFloat((400-$(window).scrollTop())/300)}`);
                $('.carousel-text-box').css('opacity', `${parseFloat((400-$(window).scrollTop())/300)}`);
              }
          }
          if ($(window).scrollTop() > 100) {
             $("#nav").addClass("headerShow");
          } else {
             $("#nav").removeClass("headerShow");
          }
          if (($(window).scrollTop() - scroll_direct.num) > 0) {
             scroll_direct.direct = 'down';
          }else {
             scroll_direct.direct = 'up';
          }
          scroll_direct.num = $(window).scrollTop();
        })
      })
    }
  };
</script>
<style lang="sass">
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

  .headerShow
    position: fixed !important
    top: -50px
    +animation(headSlowDown .5s)
    animation-fill-mode: forwards

  +keyframes(headSlowDown)
    from
      top: -50px
      background-color: rgba(255,255,255,0)
    to
      top: 0px
      background-color: rgba(0,0,0,0.82)
  ::-webkit-scrollbar
    display: none
  #app
    font-family: 'Amiri', serif
    font-family: 'Noto Serif SC', serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    .navbar-brand
      margin-left: 15px
    .navbar-toggler
      margin-right: 15px
    #navbarNavAltMarkup
      padding-left: 15px
  .main-content
    position: absolute
    width: 100vw
  .textOverflow
    overflow : hidden
    text-overflow : ellipsis
    white-space : nowrap
  .navFont
    font-size: 25px
  .articleFont-title
    font-size: 20px
  .articleFont-content
    font-size: 18px
  //common style
  .finger
    cursor: pointer
  .noPadding
    padding: 0px
  #nav
    position: absolute
    z-index: 2
    width: 100vw
  //column style
  .left-column
    position: relative
    background-color: white
    color: rgba(0, 0, 0, 0.82)
    float: left
    .left-square
      display: none
  .right-column
    position: relative
    float: left
  @media (max-width: 465px)
    .left-column
      width: 300px
      margin-left: -300px
      position: absolute
      z-index: 20
      background: white
      .left-square
        position: absolute
        height: 60px
        width: 60px
        background-color: white
        display: block
        margin-left: 254px
        border-radius: 999em
        top: calc(50vh - 30px)
        img
          height: 100%
    .right-column
      width: 100vw
    #navbarSupportedContent
      margin-top: 5px
    .navbar-btn
      height: 42.8px
      margin-right: 5px
    #nav
      padding: 5px 0px
  @media (min-width: 465px) and (max-width: 1199px)
    .left-column
      width: 25vw
    .right-column
      width: 75vw
    #navbarSupportedContent
      margin-top: 5px
    .navbar-btn
      height: 42.8px
      margin-right: 5px
    #nav
      padding: 5px 0px
  @media (min-width: 1000px)
    #navbarSupportedContent
      margin-top: 0px
    .left-column
      width: 300px
    .right-column
      width: calc(100vw - 300px)

</style>
