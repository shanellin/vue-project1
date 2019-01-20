<template>
  <div id="main-content" class="main-content" :style="{marginTop:mainMarginTop + 'px'}">
    <div class="left-column" :style="{height:columnHeight}">

    </div>
    <div class="right-column" :style="{height:columnHeight, overflowY:'scroll'}">
      <div class="" style="height:1000px;width:100%;background-color:white">

      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      mainMarginTop:parseInt($('#nav').height()),
      columnHeight:`calc(100vh - ${parseInt($('#nav').height())}px)`
    };
  },
  created: function () {
    DocStyle('nav').backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.82})`;
  },
  methods: {
  },
  mounted(){
    console.log(Doc('main-content'));
  }
};
</script>
<style media="screen" lang="sass">
  // @media (max-width: 465px)
  // @media (min-width: 465px) and (max-width: 924px)
  // @media (min-width: 924px)

  .main-content
    position: absolute
    width: 100vw
  .left-column
    position: relative
    width: 350px
    background-color: rgba(0, 0, 0, 0.82)
    color: white
    float: left
  .right-column
    position: relative
    width: calc(100vw - 350px)
    float: left
</style>
