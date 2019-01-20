<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark" style="background-color:rgba(255,255,255,0);">
      <a class="navbar-brand navFont" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(item, index) in navBtn">
            <a class="nav-link navFont" :href="'/'+item">{{item}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link to="/login">
            <button class="btn my-2 my-sm-0 navFont navbar-brand">login</button>
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
        navBtn:['article', 'about']
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
  #app
    font-family: 'Amiri', serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
  .noPadding
    padding: 0px
  #nav
    position: absolute
    z-index: 2
    width: 100vw
  .navFont
    font-size: 25px
  @media (max-width: 465px)
    #nav
      padding: 0px 20px
  @media (min-width: 465px) and (max-width: 924px)
    #nav
      padding: 0px 40px
  @media (min-width: 924px)
    #nav
      padding: 0px 70px

</style>
