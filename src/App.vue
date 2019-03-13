<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark" style="background-color:rgba(255,255,255,0);height:52.8px;">
      <a class="navbar-brand navFont" href="/">ShaneLin</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(item, index) in navBtn">
            <a class="nav-link navFont" :href="'/'+item.href">{{item.text}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link to="/login">
            <button class="btn my-2 my-sm-0 navFont navbar-brand">登入</button>
          </router-link>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        navBtn:[{text:'功能介紹', href:'article'}, {text:'關於我', href:'about'}],
      };
    },
    created: function () {
      // `this` points to the vm instance
    },
    methods: {
      order() {
      }
    },
    mounted(){
    }
  };
</script>
<style lang="sass">
  //text style
  ::-webkit-scrollbar
    display: none
  #app
    font-family: 'Amiri', serif
    font-family: 'Noto Serif SC', serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
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
    #nav
      padding: 0px 20px
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
        background-color: black
        display: block
        margin-left: 254px
        border-radius: 999em
        top: calc(50vh - 30px)
    .right-column
      width: 100vw
  @media (min-width: 465px) and (max-width: 1240px)
    #nav
      padding: 0px 40px
    .left-column
      width: 25vw
    .right-column
      width: 75vw
  @media (min-width: 1240px)
    #nav
      padding: 0px 70px
    .left-column
      width: 300px
    .right-column
      width: calc(100vw - 300px)

</style>
